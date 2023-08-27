function video_control_func() {
  let videos = document.querySelectorAll("video");
  let height_keep = document.querySelectorAll(".height_keep");
  let auto_media_wrapper = document.querySelectorAll(".auto_media_wrapper ");
  let mediaelement_video = document.querySelectorAll(".mediaelement_video");
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
      // console.log(vdsp1[0]);
      let vdsp2 = vdsp1[0];
      // console.log(getvideohtml);

      // if (vdsp2.includes("<a")) {
      //   vdsp2.replace("<a href='", "");

      // }
      // if (!vdsp2.includes("https")) {
      //   vdsp2 = `https:${vdsp2}`;
      // }

      // console.log(vdsp2);
      videohtml.className = "addedVideo";
      videosrc.className = "addedVideoSource";
      //videosrc.src = `${vdsp2}}`;
      videosrc.type = "video/mp4";
      videohtml.src = `${vdsp2}`;
      videohtml.controls = true;
      videohtml.controlsList = "nofullscreen";
      try {
        videohtml.volume = localStorage.getItem("fmvolume-volume");
      } catch (e) {
        videohtml.volume = 0.5;
        // console.log(e);
      }

      if (`${vdsp2}`.includes("gif")) {
        videohtml.autoplay = true;
        videohtml.loop = true;


      }
      else if (mediaelement_video[i].className.includes("video-without-sound")) {
        videohtml.autoplay = true;
        videohtml.loop = true;
      }

      else {
        videohtml.autoplay = false;
        videohtml.loop = false;
      }
      videohtml.appendChild(videosrc);
      // videos[i].id = "delete";
      auto_media_wrapper[i].parentElement.append(videohtml);
      // document.querySelectorAll(".addedvideo")[i].src = `${vdsp2}`;
      // document.querySelector(".addedvideoSource").src = `${vdsp2}`;
      height_keep[i].remove();
      // document.querySelector("#delete").remove();
    } else {
    }
  }
}
