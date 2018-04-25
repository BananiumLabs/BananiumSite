// Created and maintained by the BananiumLabs Team



//Load Header
$(document).ready(function (e) {
    $('#header').load('header.html');
    $('#footer').load('footer.html');
    $('#supportCPU').load('donateCPU.html');

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    //Hide loading splash after 3 seconds to fix possible reappearance when scrolling quickly
    //Also hide sidenav overlay from Materialize
    setTimeout(function() {
        $('#loading').hide();
        // $('.sidenav-overlay').hide();
    }, 3000)
});
