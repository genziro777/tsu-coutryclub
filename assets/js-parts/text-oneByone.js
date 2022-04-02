/* =============== テキストアニメーション 1文字づつIN=============== */

/* separate text */
$(".textAnime-push .textAnime-push__txt")
    .children()
    .addBack()
    .contents()
    .each(function () {
        if (this.nodeType == 3) {
            let $this = $(this)
            $this.replaceWith(
                $this.text().replace(/(\S)/g, '<span class="push">$&</span>')
            )
        }
    })

/* animation delay */
$(".textAnime-push .push").each(function () {
    let letters = $(this).closest(".textAnime-push__inner").find(".push")
    let index = $(letters).index(this)
    let time = index * 0.05
    $(this).css("animation-delay", time + "s")
})

$(window).on("load", function () {
    $(".textAnime-push").addClass("is-visible")
})

/* =============== 上下に揺れるアニメ =============== */
let head = $(".head__design")
let content = $(head).html()
let text = $.trim(content)
let newHtml = ""
text.split("").forEach(function (v) {
    newHtml += '<span class="cl">' + v + "</span>"
})
$(head).html(newHtml)
let count = $(head).text().length
let times = 0.2
for (i = 1; i <= count; i++) {
    $(".cl:eq(" + i + ")").css({
        "animation-delay": i * times + "s",
    })
}
