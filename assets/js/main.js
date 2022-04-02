/* =============== ハンバーガーメニュー============================== */
$("#hamburger").click(function () {
    $(this).toggleClass("active")
    $(".globalNav--sp").toggleClass("js-slideIn").css("opacity", "1")
    $("body").toggleClass("no-scroll")
})
/* =============== スライダー============================== */

$(".slider-1").slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    // autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    arrows: false,
    dots: true,//下部ドットナビゲーションの表示
});


/* =============== スマホでhoverOff ==================================== */
var touch =
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si]
            if (!styleSheet.rules) continue
            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue
                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri)
                }
            }
        }
    } catch (ex) {}
}

/* =============== no-js判定 ==================================== */

document.documentElement.classList.remove("no-js");