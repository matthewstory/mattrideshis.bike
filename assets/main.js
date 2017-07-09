// Set up the header color switching
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

// set up insta feed
$(function() {
    var clientId = $("#instafeed").data("instagram_clientid"),
        userId = $("#instafeed").data("instagram_userid");
    if (clientId !== undefined && userId !== undefined) {
        new Instafeed({
            "get": "user",
            "userId": userId,
            "limit": 4,
            "clientId": clientId,
            "template": "<li class='ig-item'><a href='{{link}}'><img src='{{image}}' /></a></li>"
        }).run();
    }
});
