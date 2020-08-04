/**
 * Custom scripts for bananiumlabs.com
 */

(function($) {
    'use strict';

    jQuery(document).ready(function() {

        // Load all submodules
        $('#header').load('html/nav.html', function() {ready()});
        $('#banner').load('html/banner.html', function() {ready()});
        $('#about-fill').load('html/about.html', function() {ready();counter();typeWriter();});
        $('#team-fill').load('html/team.html', function() {ready()});
        $('#projects-fill').load('html/projects.html', function() {ready();work();});
        $('#services-fill').load('html/services.html', function() {ready()});
        $('#blog-fill').load('html/blog.html', function() {ready()});
        $('#contact-fill').load('html/contact.html', function() {ready()});
        $('#footer').load('html/footer.html', function() {ready()});

        ready();

        setTimeout(function() {
            waypoints();
        }, 2000);
        // waypoints();

    });

})(jQuery);


function counter() {
    /*COUNTER UP JS*/
    $(".counter-number").counterUp({
        time: 1000,
        delay: 10
    });
    /*COUNTER UP JS*/
}

function work() {
    /*START MAGNIFICENT POPUP JS*/
    $('.work-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    /*END MAGNIFICENT POPUP JS*/

    /*START WORK JS*/
    $('.work-inner').mixItUp();
    /*END WORK JS*/
}

function ready() {

    // Load lazy loading script
    var lazy = new LazyLoad({
        elements_selector: '.lazy'
    })



    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', 'assets/js/particles.json', function () {
        console.log('callback - particles.js config loaded');
    });

    /*START MENU HIDE*/
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    /*END MENU HIDE*/

    /*START BOOTSTRAP SCROLL-SPY*/
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 195
    });
    /*END BOOTSTRAP SCROLL-SPY*/

    /*START CHANGE MENU BACKGROUND JS*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > window.innerHeight) {
            $('.header-top-area').addClass('menu-bg');
        } else {
            $('.header-top-area').removeClass('menu-bg');
        }
    });
    /*END CHANGE MENU BACKGROUND JS*/

    /*START SMOOTH SCROLL JS*/
    $('a.smoth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - $(window).height() * 0.08
        }, 1000);
        e.preventDefault();
    });
    /*END SMOOTH SCROLL JS*/

    /*START CONTACT MAP JS*/
    var contact = {
        "lat": "37.3149512",
        "lon": "-122.0562906"
    }; //Change a map coordinate here!
    try {
        $('.map').gmap3({
            action: 'addMarker',
            latLng: [contact.lat, contact.lon],
            map: {
                center: [contact.lat, contact.lon],
                zoom: 10
            },
        }, {
                action: 'setOptions',
                args: [{
                    scrollwheel: false
                }]
            });
    } catch (err) { }
    /*END CONTACT MAP JS*/

    /*START SCROLL TO UP*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $('.scrollup').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
        /*END SCROLL TO UP*/

    /*START PRELOADED*/
    $(window).on('load', function () {
        // $('#loading').removeClass("assetloading");
        $('#loading').css('animation', '1s ease-out 1.5s 1 loading-bg forwards');
        $('#loading-logo').css('animation', '1s ease-in-out 0s 1 loading-logo forwards');
        $('.preloader').fadeOut();
        $('.preloader-area').delay(350).fadeOut('slow');
    });
    /*END PRELOADED*/
}

function writeText() {
    if (i < txt.length) {
        document.getElementById("aboutTextWord").innerHTML += txt.charAt(i);
        i++;
        setTimeout(writeText, 50);
    }
}

function waypoints() {
    // Setup waypoints
    var home = new Waypoint({
        element: document.getElementById('banner'),
        handler: function (diretion) { waypointHandler('home-link') },
        offset: $(window).height() * 0.08
    })

    var about = new Waypoint({
        element: document.getElementById('about-fill'),
        handler: function (diretion) { waypointHandler('about-link') },
        offset: $(window).height() * 0.08
    })
    var services = new Waypoint({
        element: document.getElementById('services-fill'),
        handler: function (diretion) { waypointHandler('services-link') },
        offset: $(window).height() * 0.08
    })
    var team = new Waypoint({
        element: document.getElementById('team-fill'),
        handler: function (diretion) { waypointHandler('team-link') },
        offset: $(window).height() * 0.08
    })
    var projects = new Waypoint({
        element: document.getElementById('projects-fill'),
        handler: function (diretion) { waypointHandler('projects-link') },
        offset: $(window).height() * 0.08
    })
    var blog = new Waypoint({
        element: document.getElementById('blog-fill'),
        handler: function (diretion) { waypointHandler('blog-link') },
        offset: $(window).height() * 0.08
    })

    var contact = new Waypoint({
        element: document.getElementById('contact-fill'),
        handler: function (diretion) { waypointHandler('contact-link') },
        offset: $(window).height() * 0.08
    })
}

/**
 * Runs as the handler for the Waypoint system to highlight a header link when on the correct section.
 * @param {string} elementId The ID of the element to highlight. Do not include the prefix #
 */
function waypointHandler(elementId) {
    clearSelections();
    console.log(elementId);
    $('#' + elementId).addClass('selected');
    return this;
}

/**
 * Clears the '.selected' class on all links on the banner.
 */
function clearSelections() {
    $('.selected').removeClass('selected');
}

let captionLength = 0;
let caption = '';
let typeDelay = 50;

let captions = ['Innovation', 'Creativity', 'Dedication', 'Collaboration', 'Engineering', "Competitions", "Passion"];
let captionIndex = 0;

function typeWriter() {

    setInterval('cursorAnimation()', 600);
    captionEl = $('#caption');
    newType();

}

function newType() {
    caption = captions[captionIndex];
    type();
}

function incrementCaption() {
    captionIndex++;
    if (captionIndex === captions.length) {
        captionIndex = 0;
    }
    caption = captions[captionIndex];
    setTimeout('erase()', 2000);
}
function type() {
    captionEl.html(caption.substr(0, captionLength++));
    if (captionLength < caption.length + 1) {
        setTimeout('type()', typeDelay);
        console.log(captionIndex);
        console.log(captions.length);
    } else if (captionIndex === captions.length - 1){

        // captionLength = 0;
        // caption = '';
        setTimeout('incrementCaption()', 10000);
    }
    else {
        incrementCaption();
    }
}

function erase() {
    captionEl.html(captionEl[0].innerText.substr(0, captionLength--));
    // console.log(captionEl.innerText);
    if (captionEl[0].innerText.length > 0) {
        setTimeout('erase()', typeDelay);
    } else {
        captionLength = 0;
        setTimeout('type()', 2000);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}
