/* =============== Animation.cssに対するイベント ================================ */

if ($(".js-animateCss").length) {
    //ページ内にjs-animateCssがある場合のみアニメを実施
    animationCss()
}

function animationCss() {
    $(window).scroll(function () {
        $(".js-animateCss").each(function () {
            const position = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height()

            if (scroll > position - windowHeight + 40) {
                $(this).addClass("rubberBand")
                // $(this).addClass("animate__animated animate__zoomInRight animate__delay-0.5s")
            }
        })
    })
}
$(window).trigger("scroll") //リロード時後にaddClassが外れてしまうのを防ぐ役割

