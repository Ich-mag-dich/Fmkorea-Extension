function img_dataset_origin() {
  let toSetImgs = document.querySelectorAll("img");
  for (i in toSetImgs) {
    try {
      if (`${toSetImgs[i].src}`.includes("transparent.gif")) {
        if (toSetImgs[i].dataset.original != null) {
          toSetImgs[i].src = toSetImgs[i].dataset.original;
        }
      }
    } catch (e) {}
  }
}

function img_idk() {
  let imgtag = document.querySelectorAll("img");
  for (i in imgtag) {
    try {
      let testCloset = imgtag[i].closest("#articlediv");
      if (Boolean(testCloset)) {
        for (z = 1; z <= 10; z++) {
          try {
            let vdw = document.getElementById(`#videojs${z}`);
            vdw.style.maxwidth = "820px";
            vdw.style.height = "auto";
          } catch (e) {}
        }
        try {
          var imgtag1 = imgtag[i].querySelector("video");
          if (imgtag1.style.maxWidth !== "100%") {
            imgtag1.style.maxWidth = "820px";
            imgtag1.style.height = "auto";
          }
          if (imgtag1 != null) {
            var vd = imgtag1.parentElement.innerHTML;
            var vd1 = imgtag1.innerHTML;
            vd = vd.replace(">", "autoplay >");
            vd1 = vd1.replace(">", "autoplay >");
            imgtag1.parentElement.innerHTML = `${vd}`;
            imgtag1.innerHTML = vd1;
            if (imgtag1.parentElement.style.maxWidth !== "100%") {
              imgtag1.parentElement.style.maxWidth = "820px";
              imgtag1.parentElement.style.height = "auto";
            }

            document.querySelector(".vjs-sound.video-js").style.width = "auto";
          }
          imgtag1.parentElement.style.maxWidth = "820px";
          imgtag1.parentElement.style.height = "auto";
        } catch (e) {}
        try {
          var aTag = document.getElementsByClassName("re_comment");
        } catch (e) {}
        var True_and_false = true;
        try {
          while (True_and_false) {
            document.querySelector(".fdb_nav.img_tx > a").remove();
          }
        } catch (e) {
          True_and_false = false;
        }
      }
    } catch (e) {
      //
    }
  }
}
