var downloadresumelabel = document.getElementById("downloadresumelabel");
if (downloadresumelabel != null) {
    downloadresumelabel.addEventListener("mouseover", function () {
        downloadresumelabel.className = "rounded mx-auto mylabel-hover";
    });
    downloadresumelabel.addEventListener("mouseout", function () {
        downloadresumelabel.className = "rounded mx-auto mylabel";
    });
    downloadresumelabel.addEventListener("click", function () {
        window.location = "Home/DownloadResume";
    })
}
