$(document).ready(function(){
    $('.gallery-image').click(function (e) {
        var images = $('.gallery-image img');
        //find the clicked picture
        for(var image of images){
            if(image === e.target){
                $('.show-gallery').css('visibility', 'visible');
                var $src = $(e.target).attr('src');
                $('.img-show-gallery img').attr('src', $src);
                $(e.target).prev().css({'transform':'scale(1)', 'z-index': '99'});
                $('.img-show-gallery img').css('transform', 'scale(1)');
                $('.gallery-icon-overlay').css('display', 'block');

                //create new array
                var newImages = [];
                for (var img of images) {
                    if (img !== image){
                        newImages.push(img)
                    }
                }

                for(var withoutOverlayImg of newImages){
                    $(withoutOverlayImg).prev().css({'transform':'scale(0)', 'z-index': '0'});
                }
            }
        }
    });
    /* starts contact map */
    var marker = $('.marker');
    marker.css('display', 'none');
    if ($('#map').length > 0) {
        function initMap(getId) {
            if (document.getElementById(getId)) {
                let lat = parseFloat(document.getElementById(getId).getAttribute("lat"));
                let lng = parseFloat(document.getElementById(getId).getAttribute("lng"));

                var location = { lat, lng }
                map = new google.maps.Map(document.getElementById(getId), {
                    zoom: 16,
                    disableDefaultUI: true,
                    center: location,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
                marker = new google.maps.Marker({
                    map: map,
                    position: location,
                    animation: google.maps.Animation.DROP,
                    icon:`${marker[0].src}`,
                });
                marker.addListener('click', function() {
                    $('.contact_details').removeClass('dnonemobile');
                });
                marker.addListener('click', toggleBounce);
            }
        }
        function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        initMap("map");
        google.maps.event.addDomListener(window, "load", initMap);
    }

    /* ends contact map */



});