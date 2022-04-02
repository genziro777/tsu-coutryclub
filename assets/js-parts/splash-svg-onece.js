/* =============== splash ========================== */

if ($.cookie("access") == undefined) {
    $.cookie("access", "onece")
    var logoVivus1 //SVG設定

    //SVG初期設定
    function VivusInit() {
        logoVivus1 = new Vivus(
            "svgLogo",
            {
                start: "autostart", //アニメーションの自動再生
                duration: 100, //アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
                // type: "scenario-sync", // アニメーションのタイプを設定
                type: "scenario", // アニメーションのタイプを設定
                pathTimingFunction: Vivus.EASE, //動きの加速減速設定
            },
            function (obj) {
                $("#svgLogo").attr("class", "done") //描画が終わったらdoneというクラスを追加
            }
        )
        logoVivus1.stop()
    }

    // //スクロールをしたらSVGが出現する設定 //これないと出現してくれない
    function VivusAnime() {
        //スクロールをしたら id="logo"が出現する設定
        var elemPos = $("#svgLogo").offset().top - 30 //要素より、50px上の位置まで来たら出現
        var scroll = $(window).scrollTop()
        var windowHeight = $(window).height()
        if (scroll >= elemPos - windowHeight) {
            logoVivus1.play(1) //描画される速さ。数が大きくなるほど速い
        }
    }

    //この中に設定を書く/////////////////////////
    VivusInit() //SVG初期設定
    VivusAnime() /* SVGアニメーション用の関数を呼ぶ*/

    $(".js-animation-fadeUp").css("display", "none") // これないとすでに出現しているため
    $(".js-animation-fadeRight").css("display", "none")
    $(".js-animation-fadeLeft").css("display", "none")

    $("#splash-logo").delay(3000).fadeOut("slow") //ロゴを1.2秒でフェードアウトする記述
    $("#splash")
        .delay(3000)
        .fadeOut("slow", function () {
            //ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述

            $("body").addClass("appear") //フェードアウト後bodyにappearクラス付与
            setTimeout(function () {
                $(".js-animation-fadeUp").css("display", "block")
                $(".js-animation-fadeRight").css("display", "block")
                $(".js-animation-fadeLeft").css("display", "block")
            }, 1300)
        })
} else {
    $("#splash").css("display", "none")
    $("#container").css("opacity", "1") //page-fade-transitionといっしょに使うと必要になる
}
