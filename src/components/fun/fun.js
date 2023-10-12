const head = document.getElementById("leHead");

// MipMip Section

const mipmip = document.getElementById("mip");

let ded = false;
mipmip.addEventListener('click', function() {

    if (ded == false) {
        mipmip.style.marginLeft = (innerWidth / 2) + "px";
        ded = true;
    } else {
        mipmip.style.marginLeft = "0px";
        ded = false;
    }
    
    
});


// Barrel Roll

const rick = document.getElementById("rick-roll");

let rolled = false;
let rotation = 0;
rick.addEventListener("click", function() {
    rotation += 180;
    let rot_str = "rotate(" + rotation + "deg)";
    if (rolled == false) {
        head.style.transform = rot_str;
        rolled = true;
    } else {
        head.style.transform = rot_str;
        rolled = false;
    }
});