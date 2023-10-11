const mipmip = document.getElementById("mip");

mipmip.addEventListener('click', function() {
    let ded = false;
    let n = 0;

    while (ded == false) {
        if (mipmip.style.marginLeft == "600px") {
            ded = true;
        }
        mipmip.style.marginLeft = n + "px";
        n += 1;
    }
    
});