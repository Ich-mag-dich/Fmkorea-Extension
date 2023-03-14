function timewait(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
function videoVolume() {
  let addedVideos = document.querySelectorAll(".addedVideo");
  console.log(addedVideos);
  console.log(addedVideos.length);
  console.log(localStorage.getItem("fmvolume-volume"));
  for (var vi = 0; vi <= addedVideos.length; vi++) {
    addedVideos[vi].volume = localStorage.getItem("fmvolume-volume");
  }
}
function toAutoLink(container) {
  var doc = container.innerHTML;
  var regURL = new RegExp(
    "(http|https|ftp|telnet|news|irc)://([-/.a-zA-Z0-9_~#%$?&=:200-377()]+)",
    "gi"
  );
  container.innerHTML = doc.replace(
    regURL,
    "<a href='$1://$2' target='_blank'>$1://$2</a>"
  );
}
function elFadeIn(elem, ms) {
  if (!elem) {
    return;
  }
  elem.style.opacity = 0;
  elem.style.filter = "alpha(opacity=0)";
  elem.style.display = "inline-block";
  elem.style.visibility = "visible";
  if (ms) {
    var opacity = 0;
    var timer = setInterval(function() {
      opacity += 5 / ms;
      if (opacity >= 1) {
        clearInterval(timer);
        opacity = 1;
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 1;
    elem.style.filter = "alpha(opacity=1)";
  }
}

function elFadeOut(elem, ms) {
  if (!elem) return;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function() {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}

var clicktitle = document.querySelectorAll(".title.hotdeal_var8");
var clicktitle2 = document.querySelectorAll(".title");

let articlecheck = false;

function changediv() {
  var nowpagediv = document.querySelector("#bd_capture").innerHTML;
  document.body.innerHTML = "expage";
  document.querySelector(".content_widget").append(nowpagediv);
}

function getrep(link, reppagenum2) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        var qw = document.createElement("html");
        qw.innerHTML = xmlHttp.responseText;
        var retrep = qw.querySelector("#cmtPosition > ul").innerHTML;
        return retrep;
      }
    }
  };
  xmlHttp.open("GET", `${link}?&cpage=${reppagenum2}`);
  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xmlHttp.send(null);
}

function getdiv(link) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === xmlHttp.DONE) {
      if (xmlHttp.status === 200) {
        var el = document.createElement("html");
        var winY = window.pageYOffset;
        el.innerHTML = xmlHttp.responseText;
        if (el.innerHTML.includes("beforeLoad")) {
          el.innerHTML = el.innerHTML.replace(/beforeLoad/gi, "");
        }
        let frame = document.createElement("div");
        let articleFrame = document.createElement("div");
        let articleDiv = document.createElement("div");
        let replFrame = document.createElement("div");
        let replDiv = document.createElement("div");
        let atcTitle = document.createElement("div");
        let chooban = document.createElement("div");
        let choobanresult = document.createElement("div");
        let username = document.createElement("div");
        let looknum = document.createElement("div");
        let uploadDate = document.createElement("div");
        let repPg = document.createElement("div");
        189, 189, 189;
        let votediv = document.createElement("div");
        let brbr = document.createElement("div");
        let stateObj = { foo: "bar" };
        let gotitle = el.querySelector("head > title").innerText;
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

        votediv.innerHTML = `<a id="voteup" style="display: inline-block; position: static; cursor: pointer; width: 100px; border-style: solid; border-radius: 15px; color: #7ca2db; border-color: rgb(231, 231, 231); background-color: rgb(231, 231, 231); font-size: 20px; font-weight: bold;"onclick="fm_vote(${readNum}, jQuery('#fm_vote${readNum}')[0]);" >추천</a>
        <a id="votedown" style="display: inline-block; position: static; cursor: pointer; width: 100px; border-style: solid; border-radius: 15px; color: #ff8888; border-color: rgb(231, 231, 231); background-color: rgb(231, 231, 231); font-size: 20px; font-weight: bold;"onclick="fm_vote3(${readNum});" >비추천</a>`;

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
        } catch (e) {
        }

        try {
          repPg.innerHTML = el.querySelector(
            "#cmtPosition > div.fdb_tag.bg_f_f9.css3pie > div"
          ).innerHTML;
        } catch (e) { }
        try {
          looknum.innerHTML = `${el.querySelector(".side.fr > span:nth-child(1)").innerHTML
            }`;
        } catch (e) { }
        looknum.style.textAlign = "right";
        try {
          uploadDate.innerHTML = `${el.querySelector(".date.m_no").innerHTML}`;
        } catch (e) { }
        uploadDate.style.textAlign = "right";
        try {
          username.innerHTML = `<br>${el.querySelector(".side").innerHTML}`;
        } catch { }
        username.id = "username";
        looknum.style.marginRight = "40px";
        uploadDate.style.marginRight = "40px";
        try {
          choobanresult.innerHTML = `추천수: ${el.querySelector(".btn_img.new_voted_count").innerText
            } <br><br>`;
        } catch (e) { }
        choobanresult.style.fontFamily = `"Noto Sans CJK KR", sans-serif`;
        choobanresult.style.fontSize = "24px";
        choobanresult.style.fontWeight = "bold";
        try {
          if (el.querySelector(".btn_img.new_voted_count").innerText > 0) {
            choobanresult.style.color = "#7ca2db";
          } else if (
            el.querySelector(".btn_img.new_voted_count").innerText < 0
          ) {
            choobanresult.style.color = "#ff8888";
          } else {
            choobanresult.style.color = "gray";
          }
        } catch { }
        try {
          atcTitle.innerHTML = `<br><br>${el.querySelector(
            "#bd_capture > div.rd_hd.clear > div.board.clear > div.top_area.ngeb > h1 > span.np_18px_span"
          ).innerText
            }`;
        } catch { }

        var 댓글 = document.createElement("div");

        try {
          // 일반 댓글
          if (bestrepTF === true) {
            댓글.innerHTML = `${el.querySelector("#cmtPosition > ul").innerHTML
              }<br><br>`;
          } else {
            댓글.innerHTML = `<br><br>${el.querySelector("#cmtPosition > ul").innerHTML
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
        choobanresult.style.textAlign = "center";
        choobanresult.style.fontWeight = "bold";
        choobanresult.id = "choobanresult";
        username.style.marginLeft = "40px";
        chooban.append(choobanresult);
        votediv.append(brbr);
        votediv.append(brbr);

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
        atcTitle.style.textAlign = "left";
        atcTitle.style.marginTop = "25px";
        atcTitle.style.marginLeft = "40px";
        atcTitle.style.fontSize = "24px";
        atcTitle.style.fontWeight = "bold";
        atcTitle.style.letterSpacing = "-1.66px";
        atcTitle.id = "arcTitle";
        atcTitle.style.fontFamily = "Noto Sans CJK KR, sans-serif;";
        articleDiv.style.width = "80%";
        articleDiv.style.maxWidth = "80%";
        articleDiv.style.minWidth = "900px";
        articleDiv.style.marginTop = "80px";
        articleDiv.style.zIndex = "103";
        articleDiv.style.marginLeft = "40px";
        articleDiv.id = "articlediv";
        articleDiv.innerHTML = `${el.querySelector("#bd_capture > div.rd_body.clear > article > div")
          .innerHTML
          }<br><br><br><br>`;
        articleDiv.style.fontSize = "medium";

        articleFrame.style.backgroundColor = "rgba( 255, 255, 255, 1 )";
        articleFrame.style.opacity = "1";
        articleFrame.style.transition = "1s";
        articleFrame.style.animation = "fadein 3s";

        articleFrame.style.zIndex = "102";
        articleFrame.style.marginTop = "100px";
        articleFrame.style.borderRadius = "10px";
        articleFrame.style.width = "auto";

        replFrame.style.backgroundColor = "rgba( 255, 255, 255, 1 )";
        replFrame.style.minHeight = "150px";
        replFrame.style.zIndex = "102";
        replFrame.style.marginTop = "20px";
        replFrame.style.borderRadius = "10px";
        replFrame.style.width = "auto";

        replDiv.style.width = "96%";
        replDiv.style.maxWidth = "96%";
        replDiv.style.zIndex = "103";

        frame.style.width = "auto";
        frame.style.maxWidth = "1200px";
        frame.style.top = `${winY - 80}px`;
        frame.style.position = "absolute";
        frame.style.marginLeft = "21%";
        frame.style.marginRight = "21%";
        replFrame.style.marginBottom = "200px";
        frame.id = "getarticle";
        frame.style.zIndex = "101";
        frame.style.visibility = "visible";
        frame.style.display = "block";
        frame.style.opacity = 0;
        frame.style.transition = "0.3s";

        document.querySelector("#header").append(frame);
        document.querySelector("#getarticle").style.display = "block";
        document.querySelector("#getarticle").style.visibility = "visible";
        frame.style.opacity = 1;
        articlecheck = true;
        document.querySelector(
          "#arcTitle"
        ).style.fontFamily = `"Noto Sans CJK KR", 'NanumGothic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`;

        document.querySelector("#username > a").style.color = "black";
        document.querySelector("#username > a").style.textDecoration = "none";
        for (i = 0; i < document.querySelectorAll("img").length; i++) {
          if (
            document.querySelectorAll("img")[i].className.includes("icon") ||
            document.querySelectorAll("img")[i].className.includes("thumb") ||
            document.querySelectorAll("img")[i].src.includes("logos")
          ) {
            //
          } else {
            document.querySelectorAll("img")[i].style.maxWidth = "820px";
            document.querySelectorAll("img")[i].style.height = "auto";
            document.querySelectorAll("img")[i].className = "imgs";
          }
        }
        // 게시글 작성자 댓글
        let writerReps = document.getElementsByClassName("document_writer");
        for (const writerRep of writerReps) {
          writerRep.querySelector("div").style.color = "#045cdf";
        }

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
        }
        var strhhh = "" + hhh;
        hhh = strhhh.toString().replace("px", "");
        frame.style.height = `1200px`;
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
          document.querySelector("#username > a").style.textDecoration = "none";
        } else if (
          document
            .querySelector(
              "#header > div > div.logged_info > span:nth-child(4) > a"
            )
            .innerText.includes("다크ON")
        ) {
          frame.style.boxShadow = "";
          replFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
          articleFrame.style.backgroundColor = "rgba( 50, 50, 50, 0.95 )";
          document.querySelector("#username > a").style.color = "white";
          document.querySelector("#username > a").style.textDecoration = "none";
        } else {
          frame.style.boxShadow = "rgba(109, 109, 109, 0.5) 0 0 0 9999px";
          frame.style.backgroundColor = "rgba(109, 109, 109, 0.5)";
          document.querySelector("#username > a").style.textDecoration = "none";
        }
        var imgtag = document.querySelectorAll("#articlediv");
        try {
          document.getElementById("bvideojs_muted1").innerHTML = document
            .getElementById("bvideojs_muted1")
            .innerHTML.replace(">", "autoplay >");
          document.getElementById("bvideojs_muted1").id = "videojs1";
        } catch (e) { }

        for (i in imgtag) {
          try {
            var imgtag1 = imgtag[i].querySelector("img");
            imgtag1.style.maxWidth = "820px";
            imgtag1.style.height = "auto";
          } catch (e) {
          }
        }
        img_idk();
        img_dataset_origin();
        video_control_func();
        try {
          if (document.querySelector("#addjquery") != null) {
            document.querySelector("#addjquery").remove();
          }
        } catch (e) {
          console.log(e);
        }
        // 아래처럼 하면 사진이 3장 이상일때 3장만 나옴

        // //document.querySelector("#bd_capture > div.rd_body.clear > article")
        // articleFrame.appendChild(
        //   el.querySelector("#bd_capture > div.rd_body.clear > article")
        // );
        try {
          var beforeLoad = document.querySelectorAll(".beforeLoad");
          var beforeLoad_num = beforeLoad.length;
          for (i = 0; i < beforeLoad_num; i++) {
            beforeLoad[i].className = beforeLoad[i].className.replace(
              "beforeLoad",
              ""
            );
          }
        } catch { }
        let rerepls = document.querySelectorAll(".re_comment");
        try {
          for (let rereplNum = 0; i < rerepls.length; rereplNum++) {
            rerepls[rereplNum].remove();
          }
        } catch { }

        let testAutoLinkEls = document.querySelectorAll(".xe_content");
        testAutoLinkEls.forEach(function(item, index) {
          toAutoLink(item);
        });

        let getAtcForAutoLink = document.querySelector("#articlediv");
        toAutoLink(getAtcForAutoLink);

        let bestRerepls = document.querySelectorAll(".fa-location-arrow");
        bestRerepls.forEach(function(item, index) {
          try {
            item.parentElement.remove();
          } catch { }
        });
        videoVolume();
      }
    }
  };
  xmlHttp.open("GET", `${link}`);
  xmlHttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xmlHttp.send(null);
}

//일반 게시글
for (const title12 of clicktitle) {
  title12.addEventListener(
    "contextmenu",
    function() {
      if (document.querySelector("#getarticle") == null) {
        if (articlecheck == false) {
          articlecheck = true;
          let getUrl = title12.querySelector("a").href;
          title12.querySelector("a").className = "visited";
          getdiv(title12.querySelector("a").href);
        }
      }
    },
    false
  );
}

//특수 게시글 ex)공지, 포텐 등등
for (const title2 of clicktitle2) {
  title2.addEventListener(
    "contextmenu",
    function(e) {
      e.preventDefault();
      if (document.querySelector("#getarticle") == null) {
        if (articlecheck == false) {
          articlecheck = true;
          if (title2.parentElement.className === "notice notice_pop0 ") {
            // 공지 게시글
            getdiv(title2.querySelector("a").href);
          } else if (title2.parentElement.className === "li") {
            //포텐 게시글
            title2.parentElement.parentElement.className = `${title2.parentElement.parentElement.className} li_visited`;
            getdiv(title2.querySelector("a").href);
          } else if (
            title2.parentElement.className === "notice notice_pop0 fold "
          ) {
            getdiv(title2.querySelector("a").href);
            let getUrl = console.log(title2.querySelector("a").href);
          } else {
            getdiv(title2.href);
          }
        }
      }
    },
    false
  );
}
window.onkeydown = event => {
  if (event.keyCode == 27) {
    // esc키 눌렀을때
    if (articlecheck == true) {
      document.querySelector("#getarticle").style.opacity = 0;
      setTimeout(function() {
        document.querySelector("#getarticle").remove();
      }, 300);
      document.body.style.overflowY = "scroll";

      articlecheck = false;
      history.back();
    }
  }
};
document.addEventListener("click", function(e) {
  if (articlecheck == true) {
    let el = e.target;
    let r1 = el.closest("#getarticle");
    // console.log(Boolean(r1)); // <- 클릭한 부분 부모 중 #getarticle 포함하면 true 반환
    if (!Boolean(r1)) {
      document.querySelector("#getarticle").style.opacity = 0;
      setTimeout(function() {
        document.querySelector("#getarticle").remove();
      }, 300);
      document.body.style.overflowY = "scroll";
      articlecheck = false;
      history.back();
    }
  }
});

document.querySelector("#container").addEventListener("wheel", function(e) {
  if (document.querySelector("#getarticle") != null) {
    if (e.wheelDelta === -120) {
      document.querySelector("#getarticle").scrollTop += 200;
    } else {
      document.querySelector("#getarticle").scrollTop -= 200;
    }
  }

});

window.onbeforeunload = function() {
  articlecheck = false;
};
// // TODO 이미지 클릭시 원본이미지 보여주는 기능 만들고 있는 중
// // 이미지 클릭시 <- 이 부분을 만드는 중
// // 아마 위에 이미지 후처리 다 하고 후처리 한 이미지들을 셀렉 해놓는게 맞는느낌 듦.
// // 나중에 이거 보면 다시 해보기.
//
//
// 위에 무슨 말인지 모르겠음,,
