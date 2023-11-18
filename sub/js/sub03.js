window.addEventListener('DOMContentLoaded', function () {



    setTimeout(()=>{
        gsap.to('#container',1,{opacity:1});
    })

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        if(scrollTop >= 1100){
            $('#section03').addClass('on');
        }

        if(scrollTop >= 2500){
            $('#section04').addClass('on');
        }

        if(scrollTop >= 3700){
            $('#section05').addClass('on');
        }

    });



    /*  slide,click event section */

    //서브2 svg 모션
    $('.m_05').mouseenter(function () {


        anime({
            targets: '#shape-1',
            points: [
                {value: '37.9 2 2 58 37.9 116 408 116 439 59 412.2 2 37.9 2'},
                {value: '2 2 2 58 2 116 440 116 439 59 440 2 2 2'},
            ],
            easing: 'easeOutQuad',
            duration: 1000,
            loop: false
        });


    }).mouseleave(function () {

        anime({
            targets: '#shape-1',
            points: [
                {value: '2 2 2 58 2 116 440 116 439 59 440 2 2 2'},
                {value: '37.9 2 2 58 37.9 116 408 116 439 59 412.2 2 37.9 2'},
            ],
            easing: 'easeOutQuad',
            duration: 1000,
            loop: false
        });

    });

        $('.m_06').mouseenter(function () {


            anime({
                targets: '#shape-2',
                points: [
                    {value: '37.9 2 2 58 37.9 116 408 116 439 59 412.2 2 37.9 2'},
                    {value: '2 2 2 58 2 116 440 116 439 59 440 2 2 2'},
                ],
                easing: 'easeOutQuad',
                duration: 1000,
                loop: false
            });


        }).mouseleave(function () {

            anime({
                targets: '#shape-2',
                points: [
                    {value: '2 2 2 58 2 116 440 116 439 59 440 2 2 2'},
                    {value: '37.9 2 2 58 37.9 116 408 116 439 59 412.2 2 37.9 2'},
                ],
                easing: 'easeOutQuad',
                duration: 1000,
                loop: false
            });


        });

    $('.m_07').mouseenter(function () {


        anime({
            targets: '#shape-3',
            points: [
                {value: '5.7,5 44.7,119 420.7,119 381.7,5'},
                {value: '44.7,5 5.7,119 381.8,119 420.8,5'},
            ],
            easing: 'easeOutQuad',
            duration: 1000,
            loop: false
        });


    }).mouseleave(function () {

        anime({
            targets: '#shape-3',
            points: [
                {value: '44.7,5 5.7,119 381.8,119 420.8,5'},
                {value: '5.7,5 44.7,119 420.7,119 381.7,5'},
            ],
            easing: 'easeOutQuad',
            duration: 1000,
            loop: false
        });


    });

    $(".toggle").click(function () {

        $(".toggle").toggleClass('on');

        if ($(this).hasClass('on')) {

            $("#menu").fadeIn();
            $('.menu-open img').attr('src', `../images/menu/close_btn_w.png`);
            $('.home img').attr('src', `../images/menu/home_btn.png`);
            $('.category img').attr('src', `../images/menu/category.png`);
        } else {
            $("#menu").fadeOut();
            $('.menu-open img').attr('src', `../images/menu_btn.png`);
            $('.home img').attr('src', `../images/menu/home_btn_c.png`);
            $('.category img').attr('src', `./images/sub01/category.png`);
        }

    });

    $(".menu-close").click(function () {
        $("#menu").fadeOut();
        $(this).removeClass();
        // $(".toggle").addClass('menu-open');
    });



    //서브1 카드 드래그
    var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto',
        centeredSlides: false,
        // loop: true,
        spaceBetween: 0,
        grabCursor: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 500,
        scrollbar: {
            el: '#section04 .bar',
            dragSize:146,
            draggable: true,
        },
        on : {
            slideChangeTransitionStart : function (e) {


                $('.swiper-slide').removeClass('on');

            },
            slideChangeTransitionEnd : function (e) {

                // var currentSlide = $(e.);
                console.log(this.activeIndex);

                $('.swiper-slide-active').addClass('on');
            }
        }
    });

    //서브1 카드 펼치기
    let clicked = true;

    $('.question').click(function () {

        // $(this).toggleClass('on');
        $('#section05 .question .on_box').hide();
        $('#section05 .question .off_box').show();


        if(clicked === true){


            $(this).find('.off_box').hide();
            $(this).find('.on_box').show();

        }else{

            $(this).find('.off_box').show();
            $(this).find('.on_box').hide();
        }


        clicked = !clicked;




    });

    //단일 비디오 플레이
    const video = document.querySelector('#video01');

    $('.play').click(function () {

        $(this).toggleClass('on');

        if($(this).hasClass('on')){

            video.play()
        }else{

            video.pause()
        }

    });



    //메뉴 클릭 서브 이동
    $('#navi > div').click(function () {


        $('#menu,.toggle,.home,.category').fadeOut();
        gsap.to('#container .main',1,{opacity:0,onComplete:()=>{
                location.href = `${$(this).attr('data-name')}.html`;
            }});



    });


});


