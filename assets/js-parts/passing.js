/* =============== 左から右へマスクのスライドアニメーション ===================== */

function passingAnime() {
    const elem = $(".js-passing")

    elem.each(function () {
        const isPlay = "is-play",
            elemOffset = $(this).offset().top,
            scrollPos = $(window).scrollTop(),
            wh = $(window).height()

        if (scrollPos > elemOffset - wh + 20) {
            $(this).addClass(isPlay)
        }
    })
}

$(window).on("load scroll", function () {
    passingAnime()
})
