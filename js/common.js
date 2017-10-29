$(document).ready(function() {

    $("input[type='tel").mask("+3 (999) 999 99 99");

    $('.datepicker').datepicker({
        language: "ru",
        orientation: "bottom auto",
        autoclose: true,
        format: 'mm/dd/yyyy',
    });

    $(".pay-js img").click(function(){
        $(this).parent().find(".active").removeClass("active");
        $(this).addClass("active");
    });

    $(".rating-change-js").barrating({
        theme: 'fontawesome-stars',
        onSelect: function(value, text, event) {
            if (typeof(event) !== 'undefined') {
             $(event.target).parent().parent().find(".rating-js").barrating('set', value);
             $(event.target).parent().parent().find(".rating-js").barrating('readonly', true);
            } 
          },
          initialRating : -1,
      });

    $(".rating-js").barrating({
        theme: 'fontawesome-stars',
        onSelect: function(value, text, event) {
            if (typeof(event) !== 'undefined') {
             $(event.target).parent().parent().find(".rating-js").barrating('set', value);
             $(event.target).parent().parent().find(".rating-js").barrating('readonly', true);
            } 
          },
          readonly: true,
          initialRating : 4,
      });

    var handlesSlider = document.getElementById('slider-range');
    if (handlesSlider!== null) {
            noUiSlider.create(handlesSlider, {
            start: [ parseInt(0), 50000 ],
            connect: [false,true, false],
            step: 1,
            range: {
                'min': [  0],
                'max': [ 50000 ]
            }
        });

        handlesSlider.noUiSlider.on('update', function( values, handle, unencoded ) {
            if (handle==0) {
                $(".wrapper-range .left-value").text(parseInt(unencoded[handle]));
            }
            else{
                 $(".wrapper-range .right-value").text(parseInt(unencoded[handle]));
            }
            
        });
    }
    

    $(".shadow").click(function(){
        $(this).parents(".bucket").toggleClass("close");
    })

    $(".modal .close").click(function(e){
        $(".modal").hide();
         $("html").css("overflow","auto");
    });

    $(".order-js").click(function(e){
        e.preventDefault();
        $("html").css("overflow","hidden");
        $(".order-modal").show();
    });
    $(".review-js").click(function(e){
        e.preventDefault();
        $("html").css("overflow","hidden");
        $(".review-modal").show();
    });

    $(".wrapper-video").click(function(){
        let video = $(this).find("video");
        if (video.get(0).paused ==false) {
            $(this).removeClass("active");
            video.get(0).pause();
            video.parent().find("img").show();
        }
        else{
            $(this).addClass("active");
            video.get(0).play();
            video.parent().find("img").hide();
        }
    });

    let mainSlider = $('.main-slider');
    mainSlider.slick({
        accessibility:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.nav-slider',
        speed: 800,
    });

    $('.nav-slider').slick({
        accessibility:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        centerPadding:'0',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        prevArrow: false,
        nextArrow: false,
        adaptiveHeight:false,
    });

    $(".wrapper-slider .right-arrear").click(function (event) {
        event.preventDefault();
        mainSlider.slick('slickNext');
    });
    $(".wrapper-slider .left-arrear").click(function (event) {
        event.preventDefault();
        mainSlider.slick('slickPrev');
    });

    $("form").submit(function() {
        var form = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: form.serialize()
        }).done(function() {
            $.fancybox('#thanks');
            form.find('input:not([type="submit"])').val('');
        });
        return false;
    });
});
