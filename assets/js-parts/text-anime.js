/* =============== テキストアニメーション ========================== */

// ① 流れるように出現（左から右）

function slideAnime() {
    $(".leftAnime").each(function () {
        var elemPos = $(this).offset().top - 30
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            //左から右へ表示するクラスを付与
            //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeLeftRight") //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
            $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft") //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        } else {
            //左から右へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeLeftRight")
            $(this)
                .children(".leftAnimeInner")
                .removeClass("slideAnimeRightLeft")
        }
    })
}

// ② じわっと出現

function BlurTextAnimeControl() {
    $(".blurTrigger").each(function () {
        //blurTriggerというクラス名が
        var elemPos = $(this).offset().top - 30 //要素より、50px上の
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("blur") // 画面内に入ったらblurというクラス名を追記
        } else {
            $(this).removeClass("blur") // 画面外に出たらblurというクラス名を外す
        }
    })
}

// ③ ほのかに光りながら出現

function GlowAnimeControl() {
    $(".glowAnime").each(function () {
        var elemPos = $(this).offset().top - 30
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("glow")
        } else {
            $(this).removeClass("glow")
        }
    })
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    slideAnime() /* ① 流れるように出現（左から右）*/
    BlurTextAnimeControl() /* ② じわっと出現*/
    GlowAnimeControl() /* ③ ほのかに光りながら出現*/
}) // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    slideAnime() /* ① 流れるように出現（左から右）*/
    BlurTextAnimeControl() /* ② じわっと出現*/
})

// ③ ほのかに光りながら出現//画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
    //spanタグを追加する
    var element = $(".glowAnime")
    element.each(function () {
        var text = $(this).text()
        var textbox = ""
        text.split("").forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox +=
                        '<span style="animation-delay: .' +
                        i +
                        's;">' +
                        t +
                        "</span>"
                } else {
                    var n = i / 10
                    textbox +=
                        '<span style="animation-delay: ' +
                        n +
                        's;">' +
                        t +
                        "</span>"
                }
            } else {
                textbox += t
            }
        })
        $(this).html(textbox)
    })

    GlowAnimeControl() /* ③ ほのかに光りながら出現*/
}) // ここまで画面が読み込まれたらすぐに動かしたい場合の記述
