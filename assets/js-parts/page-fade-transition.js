/* =============== page-fade-transition =========================== */
$(window).on("load", function () {
    $("body").removeClass("js-fadeout")//これがメイン。画面全体のファイド指定
    $(".js-animation-fadeUp").addClass("animation-fadeUp")//fv内の各要素の出現を指定。基本なくても良い
    $(".js-animation-fadeRight").addClass("animation-fadeRight")//fv内の各要素の出現を指定
    $(".js-animation-fadeLeft").addClass("animation-fadeLeft")//fv内の各要素の出現を指定
})

$(function () {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルーさせる指定
    $('a:not([href^="#"]):not([target])').on("click", function (e) {
        e.preventDefault() // ナビゲートをキャンセル
        url = $(this).attr("href") // 遷移先のURLを取得
        if (url !== "") {
            $("body").addClass("js-fadeout") // bodyに class="js-fadeout"を挿入
            setTimeout(function () {
                window.location = url // 0.8秒後に取得したURLに遷移
            }, 400)
        }
        return false
    })
})

// page-fade-transition② 各リンクにも実装する時（1行目のクラス名を変更すればOK)

$(".vm-hover,.btn-hv").on("click", function (e) {
    e.preventDefault() // ナビゲートをキャンセル
    url = $(this).attr("href") // 遷移先のURLを取得
    if (url !== "") {
        $("body").addClass("js-fadeout") // bodyに class="fadeout"を挿入
        setTimeout(function () {
            window.location = url // 0.4秒後に取得したURLに遷移
        }, 400)
    }
    return false
})
