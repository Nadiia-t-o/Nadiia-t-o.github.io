document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.querySelector ('.video__play-btn');
          overlay = document.querySelector ('.video__overlay');

    playBtn.addEventListener("click", function(){
        overlay.style.display = "none";
    });
});