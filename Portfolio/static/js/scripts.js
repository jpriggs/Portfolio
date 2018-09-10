$(document).ready(function() {

    $(".image-container").click(function() {
        var url = $(this).find("a").attr("href");
        window.open(url);
    });
    $(".project-object").fadeIn(500);
});
