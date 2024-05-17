/**
 * 
 */

    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip(); 
    });

    document.addEventListener('DOMContentLoaded', function() {
        const hoverImage = document.getElementById('wide');
        const audio = document.getElementById('audio');
		audio.volume = 0.1;    
        
        hoverImage.addEventListener('mouseenter', function() {
            
            audio.play();

        });
    	
        hoverImage.addEventListener('mouseleave', function() {
            audio.pause();
        });
    });

    function Skele() {
    var skeleRat = document.getElementById("skeleRat");
    skeleRat.removeAttribute("hidden"); // Show the image
}