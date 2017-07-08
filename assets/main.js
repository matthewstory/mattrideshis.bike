$(function() {
    var colors = [ "pink", "orange", "blue", "navy" ];
    var topClass, bottomClass;
    function getRad() {
        if (topClass !== undefined) {
            $('.site-header').removeClass(topClass);
        }
        if (bottomClass !== undefined) {
            $('.site-header').removeClass(bottomClass);
        }
        topClass = colors[Math.floor(Math.random()*colors.length)] + "-top";
        bottomClass = colors[Math.floor(Math.random()*colors.length)] + "-bottom";
        $(".site-header").addClass(topClass);
        $(".site-header").addClass(bottomClass);
    }

    getRad();
    setInterval(getRad, 10000);
});
