/* =============== スクロールイベント（順番に出現させる） ===================== */

const effect_btm = 20 // 画面下からどの位置でフェードさせるか(px)
const effect_move = 50 // どのぐらい要素を動かすか(px)
const effect_time = 800 // エフェクトの時間(ms) 1秒なら1000

//親要素と子要素のcssを定義
$(".cards,.cards__auto-fit__minmax").css({
    opacity: 0,
})
$(".cards,.cards__auto-fit__minmax")
    .children()
    .each(function () {
        $(this).css({
            opacity: 0,
            transform: "translateY(" + effect_move + "px)",
            transition: effect_time + "ms",
        })
    })

// スクロールまたはロードするたびに実行
$(window).on("scroll load", function () {
    const scroll_top = $(this).scrollTop()
    const scroll_btm = scroll_top + $(this).height()
    const effect_pos = scroll_btm - effect_btm

    //エフェクトが発動したとき、子要素をずらしてフェードさせる
    $(".cards,.cards__auto-fit__minmax").each(function () {
        const this_pos = $(this).offset().top
        if (effect_pos > this_pos) {
            $(this).css({
                opacity: 1,
                transform: "translateY(0)",
            })
            $(this)
                .children()
                .each(function (i) {
                    $(this)
                        .delay(100 + i * 200)
                        .queue(function () {
                            $(this)
                                .css({
                                    opacity: 1,
                                    transform: "translateY(0)",
                                })
                                .dequeue()
                        })
                })
        }
    })
})

// index-fade-transition.htmlに実装してる
