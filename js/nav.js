;$(".nav-c").children("ul").children("li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".nav-bot ul").children("li").css("display", "none").eq($(this).index()).css("display", "block");
})

$(".nav-c").children("ul").children("li").mouseout(function () {
    $(this).removeClass("active");
    $(".one").addClass("active")
    $(".nav-bot ul").children("li").css("display", "none");
    $(".first").css("display", "block");
})
$(".row").children("ul").children("li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
})
$(".row").children("ul").children("li").mouseout(function () {
    $(this).removeClass("active");
})