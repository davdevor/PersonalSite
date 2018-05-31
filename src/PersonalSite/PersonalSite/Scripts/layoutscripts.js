window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-119836223-1');

$(document).ready(function () {});
var githubImage = document.getElementById("githubIcon");
var linkedinImage = document.getElementById("linkedinIcon")
makeOpaqueListener(linkedinImage);
makeOpaqueListener(githubImage);

var navbuttonsIds = ["nv1", "nv2", "nv3", "nv4"];
addHoverToNavButtons(navbuttonsIds);
function addHoverToNavButtons(idsArray) {
    var tempButton;
    for (i = 0; i < idsArray.length; ++i) {
        tempButton = document.getElementById(idsArray[i]);
        if (tempButton != null) {
            tempButton.addEventListener("mouseover", function () {
                this.className = "btn btn-default btn-sm text-white background-secondary";
            });
            tempButton.addEventListener("mouseout", function () {
                this.className = "btn btn-default btn-sm text-white";
            })
        }
    }
}
function makeOpaqueListener(image) {
    image.addEventListener("mouseover", function () {
        image.className = "img-opaque";
    });
    image.addEventListener("mouseout", function () {
        image.className = "";
    });
}