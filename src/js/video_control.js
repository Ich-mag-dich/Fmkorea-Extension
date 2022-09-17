function video_control_func() {
  let videos = document.querySelectorAll("video");
  for (i = 0; i < videos.length; i++) {
    var videohtml = document.createElement("video");
    var videosrc = document.createElement("source");
    try {
      var getvideohtml = `${videos[i].outerHTML}`;
    } catch {}
    //console.log(videos[i].parentElement.parentElement.className);
    if (videos[i].parentElement.parentElement.className !== "content_dummy") {
      // console.log(
      //   `820px ${videos[i].parentElement.parentElement.className}`
      // );
      //console.log(videohtml.style.maxWidth);
      //videos[i].style.maxWidth = "820x";
      videohtml.style.maxWidth = "820px";
      //console.log(videohtml.style.maxWidth);
      videohtml.style.height = "auto";
      let vdsp = getvideohtml.split('src="');
      let vdsp1 = vdsp[1].split('" type=');
      let vdsp2 = vdsp1[0];
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
      $("#delete").remove();
    } else {
      // console.log(
      //   `no 820px ${videos[i].parentElement.parentElement.className}`
      // );
    }
  }
}
