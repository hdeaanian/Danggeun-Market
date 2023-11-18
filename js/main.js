/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 *
 by.
 _
 ___(_)_     _
 / __| | \   / |
 \__ \ |  \_/  |
 |___/_|_|\_/|_|

 Version : 1.5.0
 Author  : SeonBeom Sim
 Website : https://github.com/simseonbeom

 - KindTiger -


 */

function overScroll() {
    var bWidth = $(window).width();
    var bHeight = $(window).height();
    var rWidth = 1920 - bWidth;
    var rHeight = 1080 - bHeight;
    $('#container').overscroll({
        scrollLeft: 3840 - innerWidth,
        scrollTop: 0,
        // scrollLeft: (1920 - (innerWidth * 0.5)),
        // scrollTop: (980 - (innerHeight * 0.5)),
        captureWheel: false
    });
}

$(window).resize(function () {
    overScroll();
});


// console.log((1920  - (innerWidth * 0.5)));

//동네생활 블럭 위 걷는 여자
$(document).ready(function () {

    Logic();

    let tl = gsap.timeline();

    // tl.to('.find02',2,{x:-200,y:50})
    // tl.to('.find02',2,{x:0,y:0})

    setInterval(() => {


        tl.to('.find02', 2, {x: -50, y: 40})
        tl.set('.find02', {backgroundImage: 'url(images/01/find_back.gif)'})
        tl.to('.find02', 2, {x: 0, y: 0})
        tl.set('.find02', {backgroundImage: 'url(images/01/find.gif)'})


    }, 5000);


    const intro = setTimeout(() => {
        gsap.to('.stage',3,{scale:1,x:-960,y:507,onComplete:()=>{

            $('.stage').fadeOut();

            }})
    }, 2000);


//메뉴 페이지 이동
    $('#navi > div').click(function () {


        $('#menu,.toggle').fadeOut();
        gsap.to('#container .main',1,{opacity:0,onComplete:()=>{
            location.href = `sub/${$(this).attr('data-name')}.html`;
         }});



    });

//서브페이지 이동
    $('.nextPage').click(function () {


        gsap.to('#container .main',1,{opacity:0,onComplete:()=>{
            location.href = `sub/${$(this).attr('data-name')}.html`;
         }});



    });


//다수 비디오 정지재생
    const videoList = [
        document.querySelector('#video01'),
        document.querySelector('#video02'),
        document.querySelector('#video03'),
        document.querySelector('#video04'),
        document.querySelector('#video05'),
    ]

    $('.play').click(function () {


        // $(this).toggleClass('on');

        $(this).fadeOut();

        for(let i = 0; i < videoList.length; i++){
            videoList[i].pause();
        }

        $(this).children().attr('src',`images/popup/stop_btn.png`);
        videoList[$(this).attr('data-index')].play();


        if($(this).hasClass('on')){

            $('.play').fadeOut();

        }else{
            $(this).children().attr('src',`images/popup/stop_btn.png`);
            
        }




    });


    $('#pop01_slider').click(function () {
        $('.play').fadeIn();
        $('.play').children().attr('src',`images/popup/play_btn.png`);
        for(let i = 0; i < videoList.length; i++){
            videoList[i].pause();
        }

    });



//팝업1 광고영상 리스트 슬라이더
    $("#pop01_slider").slick({
        dots: true, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        pauseOnHover: false, // pause on mouse hover
        fade: true, //fade mode only one slider
        speed: 900, // speed
        infinite: true, // infinite mode
        asNavFor: '#small_slider', // another slider
        centerMode: false, // center move
        centerPadding: '0%', // center move padding
        slidesToShow: 1, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function(event, slick, currentSlide, nextSlide){

    }).on('afterChange', function(event, slick, currentSlide, nextSlide){

            $('.play').attr('data-index',currentSlide);
     });




    $("#small_slider").slick({
        dots: false, //navigation
        arrows: true, //arrow
        prevArrow: $('.prev'), //prev
        nextArrow: $('.next'), //next
        autoplay: false, // autoplay mode
        autoplaySpeed: 2000, // auto speed
        asNavFor: '#pop01_slider', // another slider
        // pauseOnHover:false, // pause on mouse hover
        fade: false, //fade mode only one slider
        speed: 900, // speed
        slidesToShow: 4, // show slider number
        slidesToScroll: 1, // next slider number
        swipe: true, // swiper
        focusOnSelect: true, // click to slider
        draggable: true,
        vertical: false, // vertical slider
        verticalSwiping: false, // vertical swiper
        initialSlide: 0,// slider number
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
        variableWidth: false,

    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

        $('#small_slider .list').removeClass('on');
    }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

        $(`#small_slider .slick-current`).addClass('on');
    });


//팝업
    $('.g_ad').click(function () {

        $('.pop01').addClass('on');
    });

    $('.g_app').click(function () {

        $('.pop03').addClass('on');
    });

    $('.g_chat .chat, .c_point').click(function () {

        $('.pop04').addClass('on');
    });

    $('.find_cat, .f_point').click(function () {

        $('.pop05').addClass('on');
    });

    $('.cat, .t_point').click(function () {

        $('.pop06').addClass('on');
    });


//부동산 채팅팝업
    $('.property, .p_point').click(function () {

        const transition = 1;
        $('.pop02').addClass('on');

        let tl = gsap.timeline();


        tl.to('.chat01', transition, {delay: 1, opacity: 1, scale: 1});
        tl.to('.chat02', transition, {delay: 0.5, opacity: 1, scale: 1});
        tl.to('.chat03', transition, {delay: 0.5, opacity: 1, scale: 1});
        tl.to('.chat04', transition, {delay: 2, opacity: 1, scale: 1});
        tl.to('.chat05', transition, {delay: 2, opacity: 1, scale: 1});
        tl.to('.chat06', transition, {delay: 1, opacity: 1, scale: 1});
        tl.to('.chat07', transition, {delay: -1, opacity: 1, scale: 1});


    });

//메뉴
    $('#navi .menu').mouseenter(function () {

        gsap.to('#navi .menu', .2, {opacity: 0.3, scale: 0.8, ease: Power2.easeInOut});


        if ($(this).hasClass('menu01')) gsap.to('#navi .menu01', .2, {opacity: 1, scale: 1, ease: Power2.easeInOut});
        if ($(this).hasClass('menu02')) gsap.to('#navi .menu02', .2, {opacity: 1, scale: 1, ease: Power2.easeInOut});
        if ($(this).hasClass('menu03')) gsap.to('#navi .menu03', .2, {opacity: 1, scale: 1, ease: Power2.easeInOut});


    })

    $('#navi').mouseleave(function () {

        gsap.to('#navi .menu', .5, {opacity: 1, scale: 1, ease: Power2.easeInOut});


    });


    $('.close').click(function () {

        $('.pop').removeClass('on');
    });


    $(window).on('keydown', function (e) {

        console.log();

        if (e.keyCode === 13) {
            $('#guide').fadeOut();
        }
    })

    //가이드 닫기버튼
    $('#guide .close_btn').click(function () {

        $('#guide').fadeOut();
        $('#container').stop().animate({'scrollLeft': (1920 - (innerWidth * 0.5)), 'scrollTop': (980 - (innerHeight * 0.5))}, 1200, 'easeInOutExpo');
    });

//menu-btn

    $(".toggle").click(function () {

        $(".toggle").toggleClass('on');

        if ($(this).hasClass('on')) {

            $("#menu").fadeIn();
            $('.menu-open img').attr('src', `images/menu/close_btn_w.png`);
        } else {
            $("#menu").fadeOut();
            $('.menu-open img').attr('src', `images/menu_btn.png`);
        }

    });


    $(".menu-close").click(function () {
        $("#menu").fadeOut();
        $(this).removeClass();
        // $(".toggle").addClass('menu-open');
    });

    // $(".toggle .close").click(function(){
    //     $("#menu").slideUp();
    //     $(this).addClass();
    // });


});