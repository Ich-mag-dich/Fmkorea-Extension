function video_control_func() {
  let videos = document.querySelectorAll("video");
  for (i = 0; i < videos.length; i++) {
    var videohtml = document.createElement("video");
    var videosrc = document.createElement("source");
    try {
      var getvideohtml = `${videos[i].outerHTML}`;
    } catch (e) {
      console.log(e);
    }
    if (videos[i].parentElement.parentElement.className !== "content_dummy") {
      videohtml.style.maxWidth = "820px";
      videohtml.style.height = "auto";
      let vdsp = getvideohtml.split('src="');
      let vdsp1 = vdsp[1].split('" type=');
      let vdsp2 = vdsp1[0];
      videohtml.className = "addedVideo";
      videosrc.src = vdsp2;
      videosrc.type = "video/mp4";
      videohtml.controls = true;
      videohtml.controlsList = "nofullscreen";
      try {
        videohtml.volume = localStorage.getItem("fmvolume-volume");
      } catch (e) {
        videohtml.volume = 0.5;
        console.log(e);
      }

      if (`${vdsp2}`.includes("gif")) {
        videohtml.autoplay = true;
        videohtml.loop = true;
      } else {
        videohtml.autoplay = false;
        videohtml.loop = false;
      }
      videohtml.appendChild(videosrc);
      videos[i].id = "delete";
      videos[i].parentElement.append(videohtml);
      document.querySelector("#delete").remove();
    } else {
    }
  }
}
