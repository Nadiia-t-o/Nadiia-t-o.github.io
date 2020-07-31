document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.querySelector ('.video__play-btn');
          overlay = document.querySelector ('.video__overlay');
          video = document.querySelector ('.video__screen')

    playBtn.addEventListener("click", function(){
        overlay.style.display = "none";

        let symbol = video.src.indexOf("?") > -1 ? "&" : "?";
        
        video.src += symbol + "autoplay=1";
    });
});