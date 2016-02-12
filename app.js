$(function() {
    $("img.lazy").lazyload({
        effect: "fadeIn"
    });

    // we shouldn't apply the magnificPopup to smaller devices 
    if ($(window).width() > 950) {
        $('#gallery').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image',
            gallery: {
                enabled: true
            },
        });
    }

    // add 3 random images to home page
    if ($("#home-gallery").length > 0) {
        $.getJSON("image-gallery.json", function(data) {
            if (data.spec["section#gallery"].data) {
                var images = data.spec["section#gallery"].data;
                var img1, img2, img3;
                while (true) {
                    img1 = Math.floor((Math.random() * images.length));
                    img2 = Math.floor((Math.random() * images.length));
                    img3 = Math.floor((Math.random() * images.length));
                    if (img1 !== img2 && img1 !== img3 && img2 !== img3) {
                        break;
                    }
                }

                $("#home-gallery").append("<a href='./image-gallery.html'><img src='" + images[img1].a.href + "'></a>");
                $("#home-gallery").append("<a href='./image-gallery.html'><img src='" + images[img2].a.href + "'></a>");
                $("#home-gallery").append("<a href='./image-gallery.html'><img src='" + images[img3].a.href + "'></a>");
            }
        });
    }

});
