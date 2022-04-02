/*========= navi-current ===============*/
href = location.href;

const links = $(".menu > .menu__item > a");

links.each(function (index, value) {
    if (value.href == href) {
        $(".menu").children(".menu__item").eq(index).addClass("current");
    }
});
