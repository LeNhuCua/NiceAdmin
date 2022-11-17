var body = document.querySelector("body");
var menu_toggle = document.querySelector(".menu_toggle");
var sidebar = document.querySelector("#sidebar");
var main = document.querySelector("#main");
var menu = document.getElementById("menu");
menu_toggle.addEventListener("click", function () {
  sidebar.classList.toggle("close");
  main.classList.toggle("close");
  if (menu.className == "bi bi-list") {
    menu.className = "bi bi-x";
  } else {
    menu.className = "bi bi-list";
  }
});

var list = document.querySelectorAll("#sidebar .nav-sidebar .item");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "item";
    }
    list[i].className = "item active";
  };
}

var profile = document.querySelector(".profile");
var show_profile = document.querySelector(".show-profile ");
profile.addEventListener("click", function () {
  show_profile.classList.toggle("open");
});

var icon = document.querySelectorAll(
  "#sidebar .ul-sidebar  .item .dis .li_name i"
);
var uldropdown = document.querySelectorAll(".ul-dropdown");
var i = document.querySelectorAll("#sidebar .ul-sidebar  .item .dis");
for (let j = 0; j < i.length; j++) {
  i[j].addEventListener("click", function () {
    uldropdown[j].classList.toggle("open");
    icon[j].classList.toggle("open");
  });
}

var cardsubfilter = document.querySelectorAll(".card-sub-filter");
var cardfilter = document.querySelectorAll(".card-filter");
for (let j = 0; j < cardfilter.length; j++) {
  cardfilter[j].addEventListener("click", function () {
    cardsubfilter[j].classList.toggle("open");
  });
}

body.addEventListener("click", (e) => {
  if (!profile.contains(e.target)) {
    show_profile.classList.remove("open");
  }
  for (let j = 0; j < cardfilter.length; j++) {
    if (!cardfilter[j].contains(e.target)) {
      cardsubfilter[j].classList.remove("open");
    }
  }
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


// profile
var btn_pro = document.querySelectorAll(".sestion-profile .card-detail  .card-detail__tabs li button");
var pro_li  = document.querySelectorAll(".sestion-profile .card-detail  .card-detail__tabs li ");
var pro_main  = document.querySelectorAll(".sestion-profile .card-detail  .content .content__main");
console.log(pro_main)
for (let j = 0; j < btn_pro.length; j++) {
  btn_pro[j].addEventListener("click", function () {
    let s = 0;
    while (s < pro_li.length) {
      btn_pro[s].className = ""
      pro_li[s].className = "";
      pro_main[s].className = "content__main";
      s++; 
    }
    pro_li[j].classList.add("active");
    btn_pro[j].classList.add("color");
    pro_main[j].classList.add("show");
 
  });
}
