/* =============== 蛍光ペンラインに対するスクロールアニメーション ========================== */

function underlineAnime() {
    $(".js-underline").each(function () {
        let position = $(this).offset().top
        let scroll = $(window).scrollTop()
        let windowHeight = $(window).height()
        if (scroll > position - windowHeight + 50) {
            $(this).addClass("is-underline")
        }
    })
}
$(window).scroll(function () {
    underlineAnime()
})
