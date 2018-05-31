var idArray = ["personalsitelabel", "poetrylabel", "geneticlabel", "recipielabel", "equationlabel"];
var labelArray = setupLabels(idArray);
function setupLabels(idsArray) {
    var tempLabel;
    for (i = 0; i < idsArray.length; ++i) {
        tempLabel = document.getElementById(idsArray[i]);
        if (tempLabel != null) {
            changeLabelClassOnMouse(tempLabel);
            tempLabel.addEventListener("click", function () {
                window.open(this.dataset.link);
            });
        }
        
    }
}
function changeLabelClassOnMouse(label) {
    label.addEventListener("mouseover", function () {
        label.className = "rounded mylabel-hover";
    });
    label.addEventListener("mouseout", function () {
        label.className = "rounded mylabel";
    });
}