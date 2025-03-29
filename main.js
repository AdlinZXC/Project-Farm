$(document).ready(function() {
    var scale = 1.0; 
    var zoomInLimit = 3.0; 
    var zoomOutLimit = 1.0; 

    $('#zoom-img').on('mousewheel', function(event) {
        event.preventDefault();
        
        if (event.originalEvent.wheelDelta > 0 && scale < zoomInLimit) { // Прокручивание вверх (увеличение)
            scale += 0.25;
        } else if (event.originalEvent.wheelDelta <= 0 && scale > zoomOutLimit) { // Прокручивание вниз (уменьшение)
            scale -= 0.25;
        }

        $(this).css({
            'transform': 'scale(' + scale + ')'
        });
    });
});
