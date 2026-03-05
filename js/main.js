$(function() {
    // ハンバーガーメニューの開閉処理
    $('#js-hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('#js_nav').toggleClass('is-show'); 
    });

    $('#js_nav a').on('click', function() {
        $('#js-hamburger').removeClass('is-active');
        $('#js_nav').removeClass('is-show');
    });

    //スクロールによるヘッダー表示制御
    $(window).on('scroll resize', function() {
        var scroll = $(window).scrollTop();
        var windowWidth = $(window).width();
        var targetPos = $('.about').offset().top;

        if (windowWidth > 900) { 
            if (scroll >= targetPos) {
                $('#header').addClass('is-show');
            } else {
                $('#header').removeClass('is-show');
            }
        } else {
            $('#header').addClass('is-show');
        }
    });

    // 雲アニメーション
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        const randomDelay = Math.random() * 5;
        cloud.style.animationDelay = `${randomDelay}s`;

        const randomDuration = 4 + Math.random() * 4; 
        cloud.style.animationDuration = `${randomDuration}s`;
    });
});

$(".clickpoint").modaal({
	overlay_close:true,
	before_open:function(){
		$('html').css('overflow-y','hidden');
	},
	after_close:function(){
		$('html').css('overflow-y','scroll');
	}
});


function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");

    } else {
      $(this).removeClass("appeartext");
    }
  });
}

function BlurTextAnimeControl() {
  $('.about_p').each(function() {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('slide');
    }
  });
}

$(window).scroll(function() {
  BlurTextAnimeControl();
});

$(window).on('load', function() {
  BlurTextAnimeControl();
});


$(window).on('scroll', function() {
    $('.about2_content dl').each(function() {
        var elemPos = $(this).offset().top; 
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height(); 

        if (scroll > elemPos - windowHeight + windowHeight / 4) {
            $(this).addClass('is-show');
        }
    });
});

