/* =============== 数字のカウントアップ ============================= */


$(".count-1").on("inview", function (event, isInView) {
    if (isInView) {
        //表示領域に入った時
        $(this).numerator({
            easing: "linear", // アニメーションの動き
            duration: 500, // アニメーションの時間
            toValue: 150.5, // どこまでカウントアップするか
            delimiter: ",", // ３桁ごとに区切る値
            rounding: 1, // 小数点以下の桁数
        })
    } else {//隠れた時には0に戻す？
        $(this).numerator({
            easing: "linear", // アニメーションの動き
            duration: 500, // アニメーションの時間
            toValue: 0, // どこまでカウントアップするか
            delimiter: ",", // ３桁ごとに区切る値
            rounding: 0, // 小数点以下の桁数
        })
    }
})
