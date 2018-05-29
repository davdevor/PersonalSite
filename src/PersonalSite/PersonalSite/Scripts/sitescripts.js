var image1 = document.getElementById("githubIcon");
var image2 = document.getElementById("linkedinIcon")
makeOpaque(image1);
makeOpaque(image2);

function makeOpaque(image) {
    image.addEventListener("mouseover", function () {
        image.className = "img-opaque";
    });
    image.addEventListener("mouseout", function () {
        image.className = "";
    });
}