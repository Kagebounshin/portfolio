$(document).ready(function() {
    // Gets current year.
    $('#copyright').text(new Date().getFullYear());
    // For navigation bar on mobile.
    $('.sidenav').sidenav();
});
