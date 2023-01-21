$(document).ready(function(){
    $('.main-carousel').slick({
//        lazyLoad: 'ondemand',
        autoplay: true,
        dots: true,
        responsive: [
            {
              breakpoint: 640,
              settings: "unslick"
            }
        ]
    });

    var searchMin = $('.decade-input').data('min');
    var searchMax = $('.decade-input').data('max');

    $('.timeline-range').slider({
        range: true,
        min: searchMin,
        max: searchMax,
        step: 10,
        values: [(searchMin + 20), (searchMax - 20)],
        slide: function(event, ui){
            $('.decade-input').val(ui.values[0] + ' - ' + ui.values[1]);
        }
    });

    $('.decade-input').val($('.timeline-range').slider('values', 0) + ' - ' + $('.timeline-range').slider('values', 1));
});
