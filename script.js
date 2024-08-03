const $smallCups = $(".cup-small");
const $liters = $("#liters");
const $percentage = $("#percentage");
const $remained = $("#remained");

updateBigCup();

$smallCups.each(function (idx) {
  $(this).on("click", () => highlightCups(idx));
});
function highlightCups(idx) {
  if (
    $($smallCups[idx]).hasClass("full") &&
    !$($smallCups[idx]).next().hasClass("full")
  ) {
    idx--;
  }
  $smallCups.each(function (idx2) {
    if (idx2 <= idx) {
      $(this).addClass("full");
    } else {
      $(this).removeClass("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = $(".cup-small.full").length;
  const totalCups = $smallCups.length;

  if (fullCups === 0) {
    $percentage.css("visibility", "hidden");
    $percentage.css("height", 0);
  } else {
    $percentage.css("visibility", "visible");
    $percentage.css("height", `${(fullCups / totalCups) * 330}px`);
    $percentage.text(`${(fullCups / totalCups) * 100}%`);
  }

  if (fullCups === totalCups) {
    $remained.css("visibility", "hidden");
    $remained.css("height", 0);
  } else {
    $remained.css("visibility", "visible");
    $liters.text(`${2 - (250 * fullCups) / 1000}L`);
  }
}
