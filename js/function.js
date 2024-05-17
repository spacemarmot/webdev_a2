/**
 * 
 */

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });

    document.addEventListener('DOMContentLoaded', function() {
        const hoverImage = document.getElementById('wide');
        const audio = document.getElementById('audio');
    
        hoverImage.addEventListener('mouseenter', function() {
      
            audio.play();
        });
    
        hoverImage.addEventListener('mouseleave', function() {
            audio.pause();
        });
    });