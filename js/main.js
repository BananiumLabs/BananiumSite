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
});
