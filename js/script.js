$(document).ready(function(){

    // Service - 탭
    $(".tab li").eq(0).css("color","#76E91B");
    $(".tab_content li").hide();
    $(".tab_content li").eq(0).show();

    $(".tab li").click(function(){
        $(".tab li").css("color","#ddd");
        $(this).css("color","#76E91B");

        var tabNum = $(this).index();
        $(".tab_content li").hide();
        $(".tab_content li").eq(tabNum).show();
        $(window).scrollTop(0);
    });

    $("body").css("display", "none");
    $("body").fadeIn(1000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    };

    $(".tab_bbookk").click(function(){
        $("#quickview").fadeOut();
    });
    $(".tab_eatrip").click(function(){
        $("#quickview").fadeIn();
    });


});
