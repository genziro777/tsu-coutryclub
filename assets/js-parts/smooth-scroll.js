
// #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない
$('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    let adjust = 0
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    let href = $(this).attr("href")
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    let target = $(href == "#" || href == "" ? "html" : href)
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    let position = target.offset().top + adjust
    // スクロールの速度（ミリ秒）
    let speed = 500
    // スムーススクロール linear（等速） or swing（変速）
    $("html, body").animate(
        {
            scrollTop: position,
        },
        speed,
        "swing"
    )
    return false
})





/*===============================================
headerHとして変数に格納するパターン
$("#g-navi li a"）をlinkのクラス名に変更せよ
==================================================*/

//リンク先のidまでスムーススクロール
// var headerH = $("#header").outerHeight(true) //headerの高さを取得
// $("#g-navi li a").click(function () {
//     var elmHash = $(this).attr("href")
//     var pos = $(elmHash).offset().top - headerH //header分の高さを引いた高さまでスクロール
//     $("body,html").animate({ scrollTop: pos }, 1000)
//     return false
// })
