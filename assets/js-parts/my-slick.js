/* =============== スライダー ===================== */

// =============== 横移動させて全画面で見せる =============== */
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});



// =============== slickスライダー 2週目先頭がカクッとなるのを解除 =============== */

// const $slider = $(".js-slider") //このクラスを新しく付与

// $slider.on("beforeChange", (event, slick, currentSlide, nextSlide) => {
//     $slider.find(".slick-slide").each((index, el) => {
//         const $this = $(el),
//             slickindex = $this.attr("data-slick-index")
//         if (nextSlide == slick.slideCount - 1 && currentSlide == 0) {
//             if (slickindex == "-1") {
//                 $this.addClass("is-active-next")
//             } else {
//                 $this.removeClass("is-active-next")
//             }
//         } else if (nextSlide == 0) {
//             if (slickindex == slick.slideCount) {
//                 $this.addClass("is-active-next")
//             } else {
//                 $this.removeClass("is-active-next")
//             }
//         } else {
//             $this.removeClass("is-active-next") //このクラスを.slick-currentのところに追加
//         }
//     })
// })
// === slickスライダー 2週目先頭がカクッとなるのを解除 のcss====== */
// .slick-current,
// .is-active-next {
// transform: scale(1.2);
// @media (max-width: $sp){
//     transform: scale(1);

// }
// }

