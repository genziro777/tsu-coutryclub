/* =============== ハンバーガーメニュー============================== */
$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".globalNav--sp").toggleClass("js-slideIn").css("opacity", "1");
    $("body").toggleClass("no-scroll");
});
/* =============== スライダー============================== */

$(".slider-1").slick({
    fade: true, //切り替えをフェードで行う。初期値はfalse。
    infinite: true,
    // autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 5000, //次のスライドに切り替わる待ち時間
    speed: 1000, //スライドの動きのスピード。初期値は300。
    arrows: false,
    dots: true, //下部ドットナビゲーションの表示
});
$(".slider-2").slick({
    // autoplay: true, //自動的に動き出すか。初期値はfalse。
    infinite: true,
    autoplaySpeed: 2000, //次のスライドに切り替わる待ち時間
    speed: 1000, //スライドの動きのスピード。初期値は300。
    arrows: false,
    dots: true, //下部ドットナビゲーションの表示
    vertical: true,
});
$(".slider-3").slick({
    fade: true, //切り替えをフェードで行う。初期値はfalse。
    infinite: true,
    // autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 5000, //次のスライドに切り替わる待ち時間
    speed: 1000, //スライドの動きのスピード。初期値は300。
    arrows: false,
    dots: true, //下部ドットナビゲーションの表示
});
$(".slider-4").slick({
    // autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,
    autoplaySpeed: 5000, //次のスライドに切り替わる待ち時間
    speed: 500, //スライドの動きのスピード。初期値は300。
    arrows: true,
    dots: true, //下部ドットナビゲーションの表示
    prevArrow: '<div class="slide-arrow slick-prev"></div>',
    nextArrow: '<div class="slide-arrow slick-next"></div>',
    centerMode: true,
    centerPadding: "3.1%",
    slidesToShow: 3, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
    responsive: [
        {
            breakpoint: 850, //399px以下のサイズに適用
            settings: {
                slidesToShow: 1,
                centerPadding: "23%",
            },
        },
    ],
});
const $slider = $(".js-slider"); //このクラスを新しく付与

$slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
    $slider.find(".slick-slide").each((index, el) => {
        const $this = $(el),
            slickindex = $this.attr("data-slick-index");
        if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
            if (slickindex == "-1") {
                $this.addClass("is-active-next");
            } else {
                $this.removeClass("is-active-next");
            }
        } else if (nextSlide == 0) {
            if (slickindex == slick.slideCount) {
                $this.addClass("is-active-next");
            } else {
                $this.removeClass("is-active-next");
            }
        } else {
            $this.removeClass("is-active-next"); //このクラスを.slick-currentのところに追加
        }
    });
});

/* =============== アコーディオン ============================== */
$(".accordion__title").on("click", function () {
    var findElm = $(this).next(".accordion__box");
    $(findElm).slideToggle();

    if ($(this).hasClass("close")) {
        $(this).removeClass("close");
    } else {
        $(this).addClass("close");
    }
});

/* =============== スマホでhoverOff ==================================== */
var touch =
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
if (touch) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;
            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;
                if (styleSheet.rules[ri].selectorText.match(":hover")) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

/* =============== no-js判定 ==================================== */

document.documentElement.classList.remove("no-js");
