//test

function timewait(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}

var clicktitle = document.querySelectorAll(".title.hotdeal_var8");
var clicktitle2 = document.querySelectorAll(".title");

let articlecheck = false;

function onCaptured(imageUri) {
  //console.log(imageUri);
}

function onError(error) {
  //console.log(`Error: ${error}`);
}

const setCookie = function setCookie_by_name_value_period(name, value, period) {
  let date = new Date();
  date.setDate(date.getDate() + period);
  let Cookie = `${name}=${value};Expires=${date.toUTCString()}`;
  document.cookie = Cookie;
  //document.getElementsByClassName("content_dummy").reload();
  //console.log("추가");
  //$(".content_dummy").load(location.href + " .content_dummy");
};

var getCookie = function (url) {
  var name = "readed_documents";
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  ////console.log(value[2]);
  var url1 = `${url}`;
  if (url1.includes("listStyle")) {
    // https://www.fmkorea.com/index.php?mid=maple&sort_index=pop&order_type=desc&document_srl=4077148422&listStyle=webzine
    var addcookie = url1.replace(
      "https://www.fmkorea.com/index.php?mid=maple&sort_index=pop&order_type=desc&document_srl=",
      ""
    ); // https://www.fmkorea.com/index.php?mid=best2&sort_index=pop&order_type=desc&document_srl
    addcookie = addcookie.replace("&listStyle=webzine", "");
    ////console.log(url1);
  } else if (url1.includes("/best/")) {
    var addcookie = url1.replace("https://www.fmkorea.com/best/", "");
  } else if (url1.includes("mid=best2")) {
    var addcookie = url1.replace(
      "https://www.fmkorea.com/index.php?mid=best2&sort_index=pop&order_type=desc&document_srl=",
      ""
    );
  } else {
    var addcookie = url1.replace("https://www.fmkorea.com/", "");
  }
  var nowcookie = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)")[2];
  //console.log(`nowcookie ${nowcookie}`);
  if (!value[2].includes(`${addcookie}`)) {
    setCookie("readed_documents", `${nowcookie}.${addcookie}`, 30);
  } else {
    //console.log("이미 본,,");
  }

  //document.querySelector(".content_dummy").reload();
  //$(".content_dummy").load(document.URL + " .content_dummy");
  // return value ? value[2] : null;
};

function changediv() {
  var nowpagediv = document.querySelector("#bd_capture").innerHTML;
  document.body.innerHTML = "expage";
  document.querySelector(".content_widget").append(nowpagediv);
}

function getrep(link, reppagenum2) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        //console.log(xmlHttp.status);
        var qw = document.createElement("html");
        qw.innerHTML = xmlHttp.responseText;
        //console.log(`${link}?cpage=${reppagenum2}`);
        //console.log("asd", qw.querySelector("#cmtPosition > ul"));
        var retrep = qw.querySelector("#cmtPosition > ul").innerHTML;
        return retrep;
      } //document.querySelector("#getarticle")
    } // document.querySelector("#cmtPosition > ul")
  }; //http://api.allorigins.win/raw?url=
  //xmlHttp.open("GET", `${link}&cpage=${reppagenum2}`);
  xmlHttp.open("GET", `${link}?&cpage=${reppagenum2}`);
  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xmlHttp.send(null);
}
//[4].dataset.original
function getdiv(link) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        //console.log(xmlHttp.status);
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
        189, 189, 189;
        var votediv = document.createElement("div");
        var voteup = document.createElement("div");
        var votedown = document.createElement("div");
        var brbr = document.createElement("div");

        var stateObj = { foo: "bar" };
        var gotitle = el.querySelector("head > title").innerText;
        history.pushState(stateObj, `${gotitle}`, `${link}`);
        document.querySelector("head > title").innerText =
          el.querySelector("head > title").innerText;

        brbr.innerHTML = "<br><br><br>";
        let readNum = el
          .querySelector("#bd_capture > div.rd_body.clear > div > a")
          .innerText.replace("https://www.fmkorea.com/", "");
        if (readNum.includes("best")) {
          readNum = readNum.replace("best/", "");
        }

        votediv.innerHTML = `<a id="voteup" style="display: inline-block; position: static; cursor: pointer; width: 100px; border-style: solid; border-radius: 15px; color: #7ca2db; border-color: rgb(231, 231, 231); background-color: rgb(231, 231, 231); font-size: 20px; font-weight: bold;"onclick="fm_vote(${readNum});">추천</a>
        <a id="votedown" style="display: inline-block; position: static; cursor: pointer; width: 100px; border-style: solid; border-radius: 15px; color: #ff8888; border-color: rgb(231, 231, 231); background-color: rgb(231, 231, 231); font-size: 20px; font-weight: bold;"onclick="fm_vote3(${readNum});">비추천</a>`;

        votediv.style.textAlign = "center";

        document.body.style.overflow = "hidden";
        var bestrepTF = false;
        try {
          var reppagenum = parseInt(el.querySelector(".this"));
          var bestrep = el.querySelectorAll(
            ".fdb_itm.clear.comment_best .comment-2"
          );
          if (bestrep[0] != null) {
            var bestrepTF = true;
            var repbr = document.createElement("div");
            repbr.innerHTML = "<br><br><br>";
            replDiv.append(repbr);
            replDiv.append(bestrep[0]);
          }
          if (bestrep[1] != null) {
            replDiv.append(bestrep[1]);
          }
          if (bestrep[2] != null) {
            replDiv.append(bestrep[2]);
          }
          if (bestrep[3] != null) {
            replDiv.append(bestrep[3]);
          }
          // for (i = 1; i <= reppagenum; i++) {
          //   //console.log(getrep(link, i));
          //   replDiv.append(getrep(link, i));
          // }
          //replDiv.append(getrep(link, 1)); 아이 싯팔 왜 오류나
        } catch (e) {
          //console.log("몬가몬가 잘못된2");
        }
        //fetch(`${link}?cpage=7`)
        // #cmtPosition > div.fdb_tag.bg_f_f9.css3pie > div

        try {
          repPg.innerHTML = el.querySelector(
            "#cmtPosition > div.fdb_tag.bg_f_f9.css3pie > div"
          ).innerHTML;
        } catch (e) {}
        try {
          looknum.innerHTML = `${
            el.querySelector(".side.fr > span:nth-child(1)").innerHTML
          }`;
        } catch (e) {}
        looknum.style.textAlign = "right";
        try {
          uploadDate.innerHTML = `${el.querySelector(".date.m_no").innerHTML}`;
        } catch (e) {}
        uploadDate.style.textAlign = "right";
        //choo.append(el.querySelector(".vote_label"));
        try {
          username.innerHTML = `<br>${el.querySelector(".side").innerHTML}`;
        } catch {}
        username.id = "username";
        looknum.style.marginRight = "40px";
        uploadDate.style.marginRight = "40px";
        try {
          choobanresult.innerHTML = `추천수: ${
            el.querySelector(".btn_img.new_voted_count").innerText
          } <br><br>`;
        } catch (e) {}
        choobanresult.style.fontFamily = `"Noto Sans CJK KR", sans-serif`;
        choobanresult.style.fontSize = "24px";
        choobanresult.style.fontWeight = "bold";
        //ban.append(el.querySelector(".vote3"));
        try {
          atcTitle.innerHTML = `<br><br>${
            el.querySelector(
              "#bd_capture > div.rd_hd.clear > div.board.clear > div.top_area.ngeb > h1 > span.np_18px_span"
            ).innerText
          }`;
        } catch {}

        var 댓글 = document.createElement("div");

        try {
          // 일반 댓글
          //console.log(bestrepTF);
          if (bestrepTF === true) {
            댓글.innerHTML = `${
              el.querySelector("#cmtPosition > ul").innerHTML
            }<br><br>`;
          } else {
            댓글.innerHTML = `<br><br>${
              el.querySelector("#cmtPosition > ul").innerHTML
            }<br><br>`;
          }
          replDiv.append(댓글);
        } catch {
          replDiv.innerHTML = "<br><br>댓글이 없어용 ;ㅅ;";
          replDiv.style.textAlign = "center";
          replDiv.style.fontFamily = `"Noto Sans CJK KR", sans-serif`;
          replDiv.style.fontSize = "24px";
          replDiv.style.fontWeight = "bold";
        }
        var bestrepTF = false;
        replDiv.style.listStyle = "none";
        replDiv.style.marginLeft = "20px";
        //choo.style.display = "inline-block";
        choobanresult.style.textAlign = "center";
        choobanresult.style.fontWeight = "bold";
        choobanresult.id = "choobanresult";
        //ban.style.display = "inline-block";
        username.style.marginLeft = "40px";
        //chooban.append("<br><br><br>");
        //votediv.append(voteup);
        //votediv.append(votedown);
        chooban.append(choobanresult);
        //votediv.append(voteup);
        //votediv.append(votedown);
        votediv.append(brbr);
        votediv.append(brbr);
        //chooban.append(choo);
        //chooban.append(ban);

        articleFrame.appendChild(atcTitle);
        articleFrame.appendChild(username);
        articleFrame.appendChild(uploadDate);
        articleFrame.appendChild(looknum);
        articleFrame.appendChild(articleDiv);
        articleFrame.appendChild(chooban);
        articleFrame.appendChild(votediv);
        replFrame.appendChild(repPg);
        replFrame.appendChild(replDiv);
        frame.appendChild(articleFrame);
        frame.appendChild(replFrame);
        frame.style.overflow = "scroll";
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
        articleFrame.style.opacity = "1";
        articleFrame.style.transition = "1s";
        articleFrame.style.animation = "fadein 3s";

        articleFrame.style.zIndex = "102";
        articleFrame.style.marginTop = "100px";
        articleFrame.style.borderRadius = "10px";

        replFrame.style.width = "900px";
        replFrame.style.maxWidth = "900px";
        replFrame.style.backgroundColor = "rgba( 255, 255, 255, 0.9 )";
        replFrame.style.minHeight = "150px";
        replFrame.style.zIndex = "102";
        replFrame.style.marginTop = "20px";
        replFrame.style.borderRadius = "10px";

        replDiv.style.width = "860px";
        replDiv.style.maxWidth = "860px";
        replDiv.style.zIndex = "103";

        frame.style.width = "900px";
        frame.style.top = `${winY - 80}px`;
        frame.style.position = "absolute";
        frame.style.marginLeft = "21%";
        frame.style.marginRight = "auto";
        replFrame.style.marginBottom = "200px";
        frame.id = "getarticle";
        frame.style.zIndex = "101";

        //frame.style.backgroundColor = "rgba(109, 109, 109, 0.5)";

        document.querySelector("#header").append(frame);
        $("#getarticle").fadeOut(0);
        $("#getarticle").fadeIn(200);
        articlecheck = true;
        document.querySelector(
          "#arcTitle"
        ).style.fontFamily = `"Noto Sans CJK KR", 'NanumGothic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

        document.querySelector("#username > a").style.color = "black";
        document.querySelector("#username > a").style.textDecoration = "none";
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
        }
        var vdttt = true;

        if (document.querySelector("#scrollst") == null) {
          var style1 = document.createElement("style");
          style1.id = "scrollst";
          style1.innerHTML = `#getarticle::-webkit-scrollbar {display: none;}`;
          document.head.appendChild(style1);
        }
        try {
          var hhh = document.querySelector(".rd_body.clear").offsetHeight;
        } catch (e) {
          var hhh =
            document.getElementsByClassName("rd_body.clear").offsetHeight;
        } // .use_new_voted_count > span
        //console.log("asdasdasd", hhh);
        var strhhh = "" + hhh;
        hhh = strhhh.toString().replace("px", "");
        //articleFrame.style.height = `${500 + Number(hhh)}px`;
        frame.style.height = `1200px`;
        var imgtag = document.querySelectorAll("#articlediv");
        try {
          document.getElementById("bvideojs_muted1").innerHTML = document
            .getElementById("bvideojs_muted1")
            .innerHTML.replace(">", "autoplay >");
          document.getElementById("bvideojs_muted1").id = "videojs1";
        } catch (e) {}
        //console.log(1 + imgtag);
        for (i in imgtag) {
          try {
            var imgtag1 = imgtag[i].querySelector("img");
            imgtag1.style.maxWidth = "820px";
          } catch (e) {
            //
          }
        } // document.querySelector("#videojs1_html5_api > source")
        for (i in imgtag) {
          for (z = 1; z <= 10; z++) {
            try {
              let vdw = document.getElementById(`#videojs${z}`);
              vdw.style.width = "820px";
            } catch (e) {}
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
              imgtag1.parentElement.innerHTML = `${vd}`;
              imgtag1.innerHTML = vd1;
              //console.log("123123", imgtag1.parentElement.innerHTML);
              imgtag1.parentElement.style.maxWidth = "820px";
              document.querySelector(".vjs-sound.video-js").style.width =
                "auto";
            }
            imgtag1.parentElement.style.maxWidth = "820px";
          } catch (e) {}
          try {
            var aTag = document.getElementsByClassName("re_comment");
          } catch (e) {}
          var tttt = true;
          try {
            while (tttt) {
              document.querySelector(".fdb_nav.img_tx > a").remove();
              //console.log("지우기", i);
            }
          } catch (e) {
            tttt = false;
          }
          if (
            document
              .querySelector(
                "#header > div > div.logged_info > span:nth-child(7) > a"
              )
              .innerText.includes("다크ON")
          ) {
            replFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
            articleFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
            frame.style.boxShadow = "";
            document.querySelector("#username > a").style.color = "white";
            document.querySelector("#username > a").style.textDecoration =
              "none";
          } else if (
            document
              .querySelector(
                "#header > div > div.logged_info > span:nth-child(4) > a"
              )
              .innerText.includes("다크ON")
          ) {
            // #username > a
            frame.style.boxShadow = "";
            replFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
            articleFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
            document.querySelector("#username > a").style.color = "white";
            document.querySelector("#username > a").style.textDecoration =
              "none";
          } else {
            frame.style.boxShadow = "rgba(109, 109, 109, 0.5) 0 0 0 9999px";
            frame.style.backgroundColor = "rgba(109, 109, 109, 0.5)";
            document.querySelector("#username > a").style.textDecoration =
              "none";
          }
        }
        //document.querySelector("#bd_capture > div.rd_body.clear > article > div")
        //document.querySelector("#bd_capture > div.rd_body.clear > article")
        var imgtag = $("#articlediv").find("img");
        var imgtt = $("#articlediv").find("img");
        let imgs1 = $(`#articlediv`).find(`img`);
        var imgtaglen = imgtag.length;
        // console.log(imgtaglen);
        // console.log(imgtag.innerHTML);
        var imgttlen = imgtt.length;

        for (i = 0; i < imgtaglen; i++) {
          if (`${imgtag[i].src}`.includes("transparent.gif")) {
            //console.log(imgtag[i].dataset.dataOriginal);
            // var iti = imgtag[i].parentElement.innerHTML;
            // var iti1 = iti.split('data-original="');
            // var iti2 = iti1[1].split('" alt="');
            if (imgtag[i].dataset.original != null) {
              imgtag[i].src = imgtag[i].dataset.original;
            }
          }
          // console.log(imgtag[i].src);
        }

        //video
        var videos = $("video");
        for (i = 0; i < videos.length; i++) {
          var videohtml = document.createElement("video");
          var videosrc = document.createElement("source");
          var getvideohtml = `${videos[i].outerHTML}`;
          videohtml.style.maxWidth = "820px";
          videohtml.style.height = "auto";
          let vdsp = getvideohtml.split('src="');
          let vdsp1 = vdsp[1].split('" type=');
          let vdsp2 = vdsp1[0];
          videosrc.src = vdsp2;
          videosrc.type = "video/mp4";
          videohtml.loop = true;
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
          } else {
            videohtml.autoplay = false;
          }
          videohtml.appendChild(videosrc);
          videos[i].id = "delete";
          videos[i].parentElement.append(videohtml);
          $("#delete").remove();
        }
        $("#addjquery").remove();

        let writerReps = document.getElementsByClassName("document_writer");
        //console.log(writerReps);
        for (const writerRep of writerReps) {
          writerRep.querySelector("div").style.color = "#045cdf";
        }
        // 아래처럼 하면 사진이 3장 이상일때 3장만 나옴

        // //document.querySelector("#bd_capture > div.rd_body.clear > article")
        // articleFrame.appendChild(
        //   el.querySelector("#bd_capture > div.rd_body.clear > article")
        // );
        try {
          var beforeLoad = document.querySelectorAll(".beforeLoad");
          var beforeLoad_num = beforeLoad.length;
          // console.log(beforeLoad_num);
          for (i = 0; i < beforeLoad_num; i++) {
            // console.log(beforeLoad[i]);
            // console.log(beforeLoad[i].className);
            beforeLoad[i].className = beforeLoad[i].className.replace(
              "beforeLoad",
              ""
            );
          }
          // while (beforeLoad_bool) {
          //   console.log(beforeLoad[beforeLoad_num]);
          //   beforeLoad_num++;
          // }
        } catch {}
      } // end
      //document.querySelector("#getarticle")
    }
  }; //http://api.allorigins.win/raw?url=
  xmlHttp.open("GET", `${link}`);
  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xmlHttp.send(null);
}

for (const title12 of clicktitle) {
  title12.addEventListener(
    "contextmenu",
    function () {
      if (document.querySelector("#getarticle") == null) {
        if (articlecheck == false) {
          articlecheck = true;
          // var sc = document.createElement("script");
          // sc.id = "addjquery";
          // sc.type = "text/javascript";
          // sc.src = "https://code.jquery.com/jquery-3.6.0.min.js";
          // sc.integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=";
          // sc.crossOrigin = "anonymous";
          // document.getElementsByTagName("head")[0].appendChild(sc);
          getdiv(title12.querySelector("a").href);
          //console.log(title12.querySelector("a").href);
          getCookie(title12.querySelector("a").href);
          title12.querySelector("a").className = "visited";
        }
      }
    },
    false
  );
}

for (const title2 of clicktitle2) {
  title2.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
      if (document.querySelector("#getarticle") == null) {
        if (articlecheck == false) {
          articlecheck = true;
          if (title2.parentElement.className === "notice notice_pop0") {
            // 공지 게시글
            //console.log(title2.parentElement.className);
            //console.log(title2.querySelector("a").href);
            getCookie(title2.querySelector("a").href);
            getdiv(title2.querySelector("a").href);
          } else if (title2.parentElement.className === "li") {
            //포텐 게시글
            //console.log(title2.parentElement.className);
            title2.parentElement.parentElement.className = `${title2.parentElement.parentElement.className} li_visited`;
            getdiv(title2.querySelector("a").href);
            getCookie(title2.querySelector("a").href);
            //console.log(title2.querySelector("a").href);
          } else {
            getdiv(title2.href);
            getCookie(title2.href);
            //console.log(title2.href);
          }
          //console.log(title2.href);
        }
      }
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
    // esc키 눌렀을때
    if (articlecheck == true) {
      $("#getarticle").fadeOut(300);
      setTimeout(function () {
        document.querySelector("#getarticle").remove();
      }, 300);
      document.body.style.overflowY = "scroll";

      articlecheck = false;
      history.back();
    }
  }
};

document.addEventListener("click", function (e) {
  if (articlecheck == true) {
    if (e.target.id == "container") {
      //미리보기 페이지 외부 클릭했을때
      $("#getarticle").fadeOut(300);
      setTimeout(function () {
        document.querySelector("#getarticle").remove();
      }, 300);
      document.body.style.overflowY = "scroll";
      articlecheck = false;
      history.back();
    } else if (e.target == "html") {
      //console.log("html");
    }
  }
});

document.querySelector("#container").addEventListener("wheel", function (e) {
  if (document.querySelector("#getarticle") != null) {
    if (e.wheelDelta === -120) {
      ////console.log("wheel down");
      document.querySelector("#getarticle").scrollTop += 200;
    } else {
      ////console.log("wheel up");
      document.querySelector("#getarticle").scrollTop -= 200;
    }
  }

  //var currentScrollValue = document.querySelector("#getarticle").scrollTop;
  ////console.log("currentScrollValue is " + currentScrollValue);
});

$(window).on("beforeunload", function () {
  articlecheck = false;
});
