$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });

  $(".time-block").each(function () {
    var blockId = $(this).attr("id");
    var savedInput = localStorage.getItem(blockId);
    if (savedInput !== null) {
      $(this).find(".description").val(savedInput);
    }
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
