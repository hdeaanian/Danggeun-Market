/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */
function Logic () {
    console.log("%c by.",'background:black; color:white;');
    console.log(
        "     _\n" +
        " ___(_)_     _\n" +
        "/ __| | \\   / |\n" +
        "\\__ \\ |  \\_/  |\n" +
        "|___/_|_|\\_/|_|\n" +
        "\n" +
        "Version : 1.5.0\n" +
        "Author  : SeonBeom Sim\n" +
        "Website : https://github.com/simseonbeom");


    console.log("%c - KindTiger - ",'background:black; color:white;');
    // class delay logic event
    $.fn.queueAddClass = function(className) {
        this.queue('fx', function(next) {
            $(this).addClass(className);
            next();
        });
        return this;
    };
    $.fn.queueRemoveClass = function(className) {
        this.queue('fx', function(next) {
            $(this).removeClass(className);
            next();
        });
        return this;
    };
    $.fn.queuetoggleClass = function(className) {
        this.queue('fx', function(next) {
            $(this).toggleClass(className);
            next();
        });
        return this;
    };

    // pop event
/*
    $(".pop_btn").click(function(){
        $(".pop").stop().fadeToggle(500);
        return false; //중요
    });
    $(document).click(function(e){
        if(e.target.className =="pop"){
            return false
        }
        $(".pop").stop().fadeOut(500);
    });
*/

    //hover attr replace event
    $('.hover_img').mouseenter(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('.png','_on.png'));
    });
    $('.hover_img').mouseleave(function(){
        $(this).children('img').attr('src',$(this).children('img').attr('src').replace('_on.png','.png'));
    });

    //gnb nav event
    $('#nav > li a').click(function () {
        var posX = $($(this).attr('href')).position().left;
        var posY = $($(this).attr('href')).position().top;
        var scrollL = $('#container').scrollLeft();
        var scrollT = $('#container').scrollTop();
        $('#container').stop().animate({'scrollLeft': posX, 'scrollTop': posY}, 1200, 'easeInOutExpo');
        $('#nav > li a').removeClass('on');
        $(this).addClass('on');
        return false;
    });

   





}