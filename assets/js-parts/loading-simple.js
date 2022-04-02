// ページのロード完了時にローディング画面をフェードアウト
$(window).on("load", function () {
    $("#loading-simple").delay(2000).fadeOut(1000);
});

// ページのロードが完了しない場合でも10秒たったら強制的にローディング画面をフェードアウト
setTimeout("stopLoading()", 10000);
function stopLoading() {
    $("#loading-simple").fadeOut("slow");
}
