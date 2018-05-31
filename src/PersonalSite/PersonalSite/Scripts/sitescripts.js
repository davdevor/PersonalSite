window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-119836223-1');

var githubImage = document.getElementById("githubIcon");
var linkedinImage = document.getElementById("linkedinIcon")
makeOpaque(linkedinImage);
makeOpaque(githubImage);

function makeOpaque(image) {
    image.addEventListener("mouseover", function () {
        image.className = "img-opaque";
    });
    image.addEventListener("mouseout", function () {
        image.className = "";
    });
}