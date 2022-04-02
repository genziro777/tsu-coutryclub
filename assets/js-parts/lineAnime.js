/* =============== BOXのボーダーがアニメーションした後、中の要素が出現 ===================== */

function fadeAnime() {
    // 4-6 じわっ（ぼかしから出現）

    $(".blurTrigger").each(function () {
        //blurTriggerというクラス名が
        var elemPos = $(this).offset().top - 50 //要素より、50px上の
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("blur") // 画面内に入ったらblurというクラス名を追記
        } else {
            $(this).removeClass("blur") // 画面外に出たらblurというクラス名を外す
        }
    })

    //4-8 スーッ（枠線が伸びて出現）

    $(".lineTrigger").each(function () {
        //lineTriggerというクラス名が
        var elemPos = $(this).offset().top - 50 //要素より、50px上の
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("lineanime") // 画面内に入ったらlineanimeというクラス名を追記
        } else {
            $(this).removeClass("lineanime") // 画面外に出たらlineanimeというクラス名を外す
        }
    })
}
$(window).scroll(function () {
    fadeAnime();
});