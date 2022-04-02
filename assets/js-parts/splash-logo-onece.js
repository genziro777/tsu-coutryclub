/* =============== splash ========================== */

$(window).on("load", function () {
    if ($.cookie("access") == undefined) {
        $.cookie("access", "onece")

        //この中に設定を書く/////////////////////////
        $(".js-animation-fadeUp").css("display", "none")// これないとすでに出現しているため
        $(".js-animation-fadeRight").css("display", "none")
        $(".js-animation-fadeLeft").css("display", "none")

        $("#splash-logo").delay(2000).fadeOut("slow") //ロゴを2秒でフェードアウトする記述
        $("#splash")
            .delay(2000)
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
})
