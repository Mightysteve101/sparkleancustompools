document.addEventListener("DOMContentLoaded", function(){
// add classes for mobile navigation toggling
    var CSbody = document.querySelector("body");
    const CSnavbarMenu = document.querySelector("#cs-navigation");
    const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

    CShamburgerMenu.addEventListener('click', function() {
        CShamburgerMenu.classList.toggle("cs-active");
        CSnavbarMenu.classList.toggle("cs-active");
        CSbody.classList.toggle("cs-open");
        // run the function to check the aria-expanded value
        ariaExpanded();
    });

    // checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
    function ariaExpanded() {
        const csUL = document.querySelector('#cs-expanded');
        const csExpanded = csUL.getAttribute('aria-expanded');

        if (csExpanded === 'false') {
            csUL.setAttribute('aria-expanded', 'true');
        } else {
            csUL.setAttribute('aria-expanded', 'false');
        }
    }

    // mobile nav toggle code
    const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
        for (const item of dropDowns) {
            const onClick = () => {
            item.classList.toggle('cs-active')
        }
        item.addEventListener('click', onClick)
        }
                                

    /*******************************
     ********** Hero JS ************
     ******************************/
    function togglePlayButton() {
        // Select all elements with the .cs-picture class
        const picture = document.querySelector('#hero-2042 .cs-video-wrapper');
        const playButton = document.querySelector('#hero-2042 .cs-play');

        function togglePlayButton() {
            playButton.classList.toggle('cs-hide');
        }

        picture.addEventListener('click', togglePlayButton);
        playButton.addEventListener('click', togglePlayButton);
    }

    // Call the function to activate the event listeners
    togglePlayButton();

    function toggleVideoPlayback() {
        // Select the video element
        const video = document.querySelector('#hero-2042 video');
        const playButton = document.querySelector('#hero-2042 .cs-play');

        function togglePlay() {
            // Check if the video is paused
            if (video.paused) {
                video.play(); // Play the video if it is paused
            } else {
                video.pause(); // Pause the video if it is playing
            }
        }

        video.addEventListener("click", togglePlay);
        playButton.addEventListener("click", togglePlay);
    }

    // Call the function to activate the event listener
    toggleVideoPlayback();

    /*******************************
     ********** FAQ JS ************
     ******************************/

    const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
                                
                                
});