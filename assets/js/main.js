// Set up the header color switching
$(function() {
    var colors = [ "pink", "orange", "blue", "navy" ];
    var topClass, bottomClass, footerClass;
    function getRad() {
        if (topClass !== undefined) {
            $('.site-header').removeClass(topClass);
        }
        if (bottomClass !== undefined) {
            $('.site-header').removeClass(bottomClass);
        }
        if (footerClass !== undefined) {
            $('.site-footer').removeClass(footerClass);
        }
        topClass = colors[Math.floor(Math.random()*colors.length)] + "-top";
        bottomClass = colors[Math.floor(Math.random()*colors.length)] + "-bottom";
        footerClass = colors[Math.floor(Math.random()*colors.length)] + "-top";

        $(".site-header").addClass(topClass);
        $(".site-header").addClass(bottomClass);
        $(".site-footer").addClass(footerClass);
    }

    getRad();
    setInterval(getRad, 10000);
});

// set up insta feed
$(function() {
    var clientId = $("#instafeed").data("instagram_clientid"),
        userId = $("#instafeed").data("instagram_userid"),
        accessToken = $("#instafeed").data("instagram_accesstoken");
    if (clientId !== undefined && userId !== undefined && accessToken !== undefined) {
        new Instafeed({
            "get": "user",
            "userId": userId,
            "limit": 4,
            "clientId": clientId,
            "accessToken": accessToken,
            "template": "<li class='ig-item'><a href='{{link}}'><img src='{{image}}' /></a></li>"
        }).run();
    }
});
