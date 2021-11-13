const clicktitle = document.querySelectorAll(".title.hotdeal_var8");

let articlecheck = false;

function onCaptured(imageUri) {
  console.log(imageUri);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function changediv() {
  var nowpagediv = document.querySelector("#bd_capture").innerHTML;
  document.body.innerHTML = "expage";
  document.querySelector(".content_widget").append(nowpagediv);
}

function getdiv(link) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        console.log(xmlHttp.status);
        var el = document.createElement("html");
        var winY = window.pageYOffset;
        el.innerHTML = xmlHttp.responseText;
        var frame = document.createElement("div");
        var articleFrame = document.createElement("div");
        var articleDiv = document.createElement("div");
        var replFrame = document.createElement("div");
        var replDiv = document.createElement("div");
        var atcTitle = document.createElement("div");
        var chooban = document.createElement("div");
        var choo = document.createElement("div");
        var choobanresult = document.createElement("div");
        var ban = document.createElement("div");
        var username = document.createElement("div");
        var looknum = document.createElement("div");
        var uploadDate = document.createElement("div");
        var repPg = document.createElement("div");

        // #cmtPosition > div.fdb_tag.bg_f_f9.css3pie > div
        try {
          repPg.innerHTML = el.querySelector(
            "#cmtPosition > div.fdb_tag.bg_f_f9.css3pie > div"
          ).innerHTML;
        } catch (e) {
          console.log(e);
        }
        looknum.innerHTML = `${
          el.querySelector(".side.fr > span:nth-child(1)").innerHTML
        }`;
        looknum.style.textAlign = "right";
        uploadDate.innerHTML = `${el.querySelector(".date.m_no").innerHTML}`;
        uploadDate.style.textAlign = "right";
        //choo.append(el.querySelector(".vote_label"));
        username.innerHTML = `<br>${el.querySelector(".side").innerHTML}`;
        username.id = "username";
        looknum.style.marginRight = "40px";
        uploadDate.style.marginRight = "40px";
        choobanresult.innerHTML = `추천수: ${
          el.querySelector(".btn_img.new_voted_count").innerText
        } <br><br><br><br>`;
        choobanresult.style.fontFamily = `"Noto Sans CJK KR", sans-serif`;
        choobanresult.style.fontSize = "24px";
        choobanresult.style.fontWeight = "bold";
        //ban.append(el.querySelector(".vote3"));
        atcTitle.innerHTML = `<br><br>${
          el.querySelector(
            "#bd_capture > div.rd_hd.clear > div.board.clear > div.top_area.ngeb > h1 > span"
          ).innerText
        }`;
        try {
          replDiv.innerHTML = `<br><br>${
            el.querySelector("#cmtPosition > ul").innerHTML
          }<br><br>`;
        } catch {
          replDiv.innerHTML = "<br><br>댓글이 없어용 ;ㅅ;";
          replDiv.style.textAlign = "center";
          replDiv.style.fontFamily = `"Noto Sans CJK KR", sans-serif`;
          replDiv.style.fontSize = "24px";
          replDiv.style.fontWeight = "bold";
        }
        replDiv.style.listStyle = "none";
        replDiv.style.marginLeft = "20px";
        //choo.style.display = "inline-block";
        choobanresult.style.textAlign = "center";
        choobanresult.style.fontWeight = "bold";
        //ban.style.display = "inline-block";
        username.style.marginLeft = "40px";
        //chooban.append("<br><br><br>");
        chooban.append(choo);
        chooban.append(choobanresult);
        chooban.append(ban);

        articleFrame.appendChild(atcTitle);
        articleFrame.appendChild(username);
        articleFrame.appendChild(uploadDate);
        articleFrame.appendChild(looknum);
        articleFrame.appendChild(articleDiv);
        articleFrame.appendChild(chooban);
        replFrame.appendChild(repPg);
        replFrame.appendChild(replDiv);
        frame.appendChild(articleFrame);
        frame.appendChild(replFrame);

        //#bd_capture > div.rd_body.clear > article > div
        atcTitle.style.textAlign = "left";
        atcTitle.style.marginTop = "25px";
        //atcTitle.style.position = "absolute";
        atcTitle.style.marginLeft = "40px";
        atcTitle.style.fontSize = "24px";
        atcTitle.style.fontWeight = "bold";
        atcTitle.style.letterSpacing = "-1.66px";
        atcTitle.id = "arcTitle";
        atcTitle.style.fontFamily = "Noto Sans CJK KR, sans-serif;";
        //    font-size: 24px
        // font-weight: bold;;
        // letter-spacing: -1.66px;
        //articleDiv.style.position = "absolute";
        articleDiv.style.width = "820px";
        articleDiv.style.maxWidth = "820px";
        articleDiv.style.marginTop = "80px";
        articleDiv.style.zIndex = "103";
        articleDiv.style.marginLeft = "40px";
        articleDiv.id = "articlediv";
        articleDiv.innerHTML = `${
          el.querySelector("#bd_capture > div.rd_body.clear > article > div")
            .innerHTML
        }<br><br><br><br>`;
        articleDiv.style.fontSize = "medium";

        articleFrame.style.backgroundColor = "rgba( 255, 255, 255, 0.9 )";
        articleFrame.style.width = "900px";
        articleFrame.style.maxWidth = "900px";
        articleFrame.style.zIndex = "102";
        articleFrame.style.marginTop = "100px";
        articleFrame.style.borderRadius = "10px";

        replFrame.style.width = "900px";
        replFrame.style.maxWidth = "900px";
        replFrame.style.backgroundColor = "rgba( 255, 255, 255, 0.9 )";
        replFrame.style.minHeight = "300px";
        replFrame.style.zIndex = "102";
        replFrame.style.marginTop = "20px";
        replFrame.style.borderRadius = "10px";

        replDiv.style.width = "860px";
        replDiv.style.maxWidth = "860px";
        replDiv.style.zIndex = "103";

        frame.style.width = "900px";
        frame.style.top = `${winY + 50}px`;
        frame.style.position = "absolute";
        frame.style.marginLeft = "21%";
        frame.style.marginRight = "auto";
        replFrame.style.marginBottom = "200px";
        frame.id = "getarticle";
        frame.style.zIndex = "101";
        frame.style.boxShadow = "rgba(109, 109, 109, 0.5) 0 0 0 9999px";
        frame.style.backgroundColor = "rgba(109, 109, 109, 0.5)";

        document.querySelector("#header").append(frame);
        articlecheck = true;
        document.querySelector(
          "#arcTitle"
        ).style.fontFamily = `"Noto Sans CJK KR", 'NanumGothic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

        document.querySelector("#username > a").style.color = "black";
        document.querySelector("#username > a").style.textDcoration = "none";
        var imgttt = true;
        try {
          var num = 0;
          while (imgttt) {
            document.querySelectorAll("img")[num].style.maxWidth = "820px";
            document.querySelectorAll("img")[num].style.height = "auto";
            num++;
          }
        } catch (e) {
          num = 0;
          imgttt = false;
          console.log(e);
        }
        var vdttt = true;
        try {
          var vdnum = 0;
          while (vdttt) {
            document.querySelectorAll("video")[vdnum].innerHTML = document
              .querySelectorAll("video")
              [vdnum].innerHTML.replace(">", "autoplay loop >");
            document.querySelectorAll("video")[vdnum].style.maxWidth = "820px";
            document.querySelectorAll("video")[vdnum].style.height = "auto";
            if (vdnum >= 1) {
              document.getElementById(`#videojs${z}`).innerHTML ==
                document
                  .getElementById(`#videojs${z}`)
                  .innerHTML.replace(">", "autoplay loop >");
            }
            vdnum++;
          }
        } catch (e) {
          vdnum = 0;
          vdttt = false;
          console.log(e);
        }

        try {
          var hhh = document.querySelector(".rd_body.clear").offsetHeight;
        } catch (e) {
          var hhh =
            document.getElementsByClassName("rd_body.clear").offsetHeight;
        } // .use_new_voted_count > span
        console.log("asdasdasd", hhh);
        var strhhh = "" + hhh;
        hhh = strhhh.toString().replace("px", "");
        articleFrame.style.height = `${500 + Number(hhh)}px`;
        var imgtag = document.querySelectorAll("#articlediv");
        try {
          document.getElementById("bvideojs_muted1").innerHTML = document
            .getElementById("bvideojs_muted1")
            .innerHTML.replace(">", "autoplay >");
          document.getElementById("bvideojs_muted1").id = "videojs1";
        } catch (e) {
          console.log(e);
        }
        console.log(1 + imgtag);
        for (i in imgtag) {
          try {
            var imgtag1 = imgtag[i].querySelector("img");
            imgtag1.style.maxWidth = "820px";
          } catch (e) {
            console.log(e);
            //
          }

          // if (imgtag[i].offsetWidth != null) {
          //   width = imgtag[i].offsetWidth;
          //   console.log(width);
          //   if (width >= 860) {
          //     imgtag[i].style.width = "840px";
          //   }
          //   imgtag[i].style.width = "840px";
          // }
        } // document.querySelector("#videojs1_html5_api > source")
        for (i in imgtag) {
          for (z = 1; z <= 10; z++) {
            try {
              let vdw = document.getElementById(`#videojs${z}`);
              vdw.style.width = "820px";
            } catch (e) {
              console.log(e);
            }
          }
          // autoplay
          try {
            // document.querySelector("#videojs1")
            // var mutedvideo =
            //   document.getElementById("bvideojs_muted1").innerHTML;
            // var mutedvideo1 = mutedvideo.replace(">", "autoplay >");
            // document.getElementById("bvideojs_muted1").innerHTML = mutedvideo1;
            var imgtag1 = imgtag[i].querySelector("video");
            imgtag1.style.maxWidth = "820px";
            if (imgtag1 != null) {
              var vd = imgtag1.parentElement.innerHTML;
              var vd1 = imgtag1.innerHTML;
              vd = vd.replace(">", "autoplay >");
              vd1 = vd1.replace(">", "autoplay >");
              // for (z = 1; z <= 10; z++) {
              //   try {
              //     let vdw = document.getElementById(`#videojs${z}`);
              //     vdw.style.width = "820px";
              //   } catch (e) {
              //     console.log(e);
              //   }
              // }
              imgtag1.parentElement.innerHTML = `${vd}`;
              imgtag1.innerHTML = vd1;
              console.log("123123", imgtag1.parentElement.innerHTML);
              imgtag1.parentElement.style.maxWidth = "820px";
              document.querySelector(".vjs-sound.video-js").style.width =
                "auto";
            }
            imgtag1.parentElement.style.maxWidth = "820px";
          } catch (e) {
            console.log(e);
          }
          try {
            var aTag = document.getElementsByClassName("re_comment");
          } catch (e) {
            console.log(e);
          }
          var tttt = true;
          try {
            while (tttt) {
              document.querySelector(".fdb_nav.img_tx > a").remove();
              console.log("지우기", i);
            }
          } catch (e) {
            tttt = false;
            console.log(e);
          }
        }
      } //document.querySelector("#getarticle")
    }
  }; //http://api.allorigins.win/raw?url=
  xmlHttp.open("GET", `${link}`);
  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xmlHttp.send(null);
}

document.addEventListener("click", function (e) {
  if (articlecheck == true) {
    if (e.target.id == "container") {
      document.querySelector("#getarticle").remove();
      articlecheck = false;
    } else if (e.target == "html") {
      console.log("html");
    }
    //alert(e.target.id, e.target.className);
    // if (
    //   e.target.nodeName != "DIV" &&
    //   e.target.nodeName != "LI" &&
    //   e.target.nodeName != "I" &&
    //   e.target.nodeName != "H1" &&
    //   e.target.nodeName != "IMG" &&
    //   e.target.nodeName != "A" &&
    //   e.target.nodeName != "B"
    // ) {
    //   document.querySelector("#getarticle").remove();
    //   articlecheck = false;
    //   // alert(e.target.nodeName);
    // }
    //alert(e.target.nodeName);
    //document.querySelector("#getarticle").remove();
    //articlecheck = false;
  }
});

for (const title1 of clicktitle) {
  title1.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
      //var expage = document.body.innerHTML;
      //location.replace(title1.querySelector("a").href);
      //window.open(title1.querySelector("a").href);
      getdiv(title1.querySelector("a").href);

      //window.open(title1.querySelector("a").href, "_blank");
      //alert(title1.querySelector("a").href);
      // Do what you want with click event
    },
    false
  );
}

// document.querySelectorAll(".title.hotdeal_var8").addEventListener(
//   "contextmenu",
//   function (e) {
//     e.preventDefault();
//     alert("우클릭123");
//     // Do what you want with click event
//   },
//   false
// );

//#bd_1135415169_0 > div > table > tbody > tr:nth-child(7) > td.title.hotdeal_var8
// #bd_1135415169_0 > div > table > tbody > tr:nth-child(8) > td.title.hotdeal_var8 > a.visited

window.onkeydown = event => {
  if (event.keyCode == 27) {
    if (articlecheck == true) {
      document.querySelector("#getarticle").remove();
      articlecheck = false;
    }
  }
};
