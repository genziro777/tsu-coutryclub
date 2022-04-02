/* =============== スクロールイベント（fadeIn) ===================== */

if ($(".js-fadeTrigger").length) {
    //ページ内にfadeTargetがある場合のみアニメを実施
    scrollFadeAnimation()
}

function scrollFadeAnimation() {
    $(window).scroll(function () {
        $(".js-fadeTrigger").each(function () {
            const position = $(this).offset().top,
                scroll = $(window).scrollTop(),
                windowHeight = $(window).height()

            if (scroll > position - windowHeight + 40) {
                $(this).addClass("is-active")
            }
        })
    })
}
$(window).trigger("scroll") //リロード時後にもアクション
