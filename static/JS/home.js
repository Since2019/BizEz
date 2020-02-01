$(document).ready(function() {
    $("#rank-box").click(function() {
        $("#uid-rank-info-bg").fadeIn();
    });

    $('#uid-rank-info-bg').click(function() {
        $("#uid-rank-info-bg").fadeOut();
    });

    $("#reward-box").click(function() {
        $("#uid-reward-info-bg").fadeIn();
    });

    $('#uid-reward-info-bg').click(function() {
        $("#uid-reward-info-bg").fadeOut();
    });
});