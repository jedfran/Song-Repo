// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

//Animation Function

function myAnimation() {
    let id = null;
    const elem = document.getElementById("video_animation");
    let pos = 0;
    elem.style.display = 'block'
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.left = pos + "px";
        }
    }
}