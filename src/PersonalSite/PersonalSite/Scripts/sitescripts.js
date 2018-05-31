window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-119836223-1');

$(document).ready(function () {
    console.log("document loaded");
});
var githubImage = document.getElementById("githubIcon");
var linkedinImage = document.getElementById("linkedinIcon")
makeOpaqueListener(linkedinImage);
makeOpaqueListener(githubImage);

function makeOpaqueListener(image) {
    image.addEventListener("mouseover", function () {
        image.className = "img-opaque";
    });
    image.addEventListener("mouseout", function () {
        image.className = "";
    });
}