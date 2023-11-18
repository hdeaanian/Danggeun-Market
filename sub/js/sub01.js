window.addEventListener('DOMContentLoaded', function () {



    setTimeout(()=>{
        gsap.to('#container',1,{opacity:1});
    });

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        if(scrollTop >= 400){
            $('#section02').addClass('on');
        }


        if(scrollTop >= 1100){
            $('#section03').addClass('on');
        }

    });




    //메뉴 클릭 닫기
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
            $('.category img').attr('src', `./images/sub03/category.png`);
        }

    });

    $(".menu-close").click(function () {
        $("#menu").fadeOut();
        $(this).removeClass();
        // $(".toggle").addClass('menu-open');
    });




    //단일 비디오 플레이
    const video = document.querySelector('#video01');

    $('.play').click(function () {

        $(this).toggleClass('on');

        if($(this).hasClass('on')){ /* 재생 했으 ㄹ떄 떄떄 떄떄*/

            video.play();

            $('.character').fadeOut();

        }else{ /* 멈 췄을떄ㄸ ㅒ떄ㄸ ㅒ떄*/

            $('.character').fadeIn();
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


})


