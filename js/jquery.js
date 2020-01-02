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
    })

    


});