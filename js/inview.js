function inView(elem) {
    var view_top = $(window).scrollTop();
    var view_bottom = view_top + $(window).height();

    var elem_top = $(elem).offset().top;
    var elem_bottom = elem_top + $(elem).height();

    return ((elem_bottom <= view_bottom) && (elem_top >= view_top));
}