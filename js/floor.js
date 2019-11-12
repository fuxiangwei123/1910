;$(".lao ul").children("li").click(function(){
    var i = $(this).index();
    var now = $(".floor").eq(i);
    var t = now.offset().top;
    $("html").animate({
        scrollTop:t
    })
})