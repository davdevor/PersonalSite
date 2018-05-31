var downloadresumelabel = document.getElementById("downloadresumelabel");
downloadresumelabel.addEventListener("mouseover", function () {
    this.className = "rounded mx-auto mylabel-hover";
});
downloadresumelabel.addEventListener("mouseout", function () {
    this.className = "rounded mx-auto mylabel";
});
downloadresumelabel.addEventListener("click", function () {
    window.location = "Home/DownloadResume";
})