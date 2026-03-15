const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");

const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
const portfolioButton = document.querySelector(".portfolio");
const blogButton = document.querySelector(".blog");
const contactButton = document.querySelector(".contact");

const navHeight = document.querySelector("nav").clientHeight;

const homeHeight = document.querySelector("#home").clientHeight;
const aboutHeight = document.querySelector("#about").clientHeight;
const portfolioHeight = document.querySelector("#portfolio").clientHeight;
const blogHeight = document.querySelector("#blog").clientHeight;
const contactHeight = document.querySelector("#contact").clientHeight;

const homeOffset = document.querySelector("#home").offsetTop;
const aboutOffset = document.querySelector("#about").offsetTop;
const portfolioOffset = document.querySelector("#portfolio").offsetTop;
const blogOffset = document.querySelector("#blog").offsetTop;
const contactOffset = document.querySelector("#contact").offsetTop;

burger.addEventListener("click", function () {
  nav.classList.toggle("show");
});

// changing menu from absolute to fixed

window.addEventListener("scroll", function () {
  if (window.innerWidth > window.innerHeight === true) {
    if (screen.width >= 1024 && window.scrollY > homeHeight) {
      // nav.classList.toggle('fixed');
      nav.style.position = "fixed";
      nav.style.top = "0vh";
    } else if (screen.width >= 1024 && window.innerWidth > window.innerHeight) {
      nav.style.position = "absolute";
      nav.style.top = "100vh";
    }
  }

  // Menu colors

  if (window.scrollY < homeHeight - navHeight) {
    homeButton.classList.add("violet");
  } else homeButton.classList.remove("violet");

  if (
    window.scrollY > homeHeight - navHeight &&
    window.scrollY < portfolioOffset - navHeight
  ) {
    aboutButton.classList.add("violet");
  } else aboutButton.classList.remove("violet");

  if (
    window.scrollY > portfolioOffset - navHeight &&
    window.scrollY < blogOffset - navHeight
  ) {
    portfolioButton.classList.add("violet");
  } else portfolioButton.classList.remove("violet");

  if (
    window.scrollY > blogOffset - navHeight &&
    window.scrollY < contactOffset - navHeight
  ) {
    blogButton.classList.add("violet");
  } else blogButton.classList.remove("violet");

  if (window.scrollY > contactOffset - navHeight) {
    contactButton.classList.add("violet");
  } else contactButton.classList.remove("violet");
});

// Vievvork button move to about

$(".vievWorks").on("click", function () {
  if (screen.width >= 1024) {
    $("body, html").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    );
  } else
    $("body, html").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    );
});

// move to sections

$(".home").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("#home").offset().top + 1,
    },
    500
  );
});

$(".about").on("click", function () {
  if (screen.width >= 1024) {
    $("body, html").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      500
    );
  } else
    $("body, html").animate(
      {
        scrollTop: $("#about").offset().top - $("nav").height() + 2,
      },
      500
    );
});

$(".portfolio").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("#portfolio").offset().top - $("nav").height() + 1,
    },
    500
  );
});
$(".blog").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("#blog").offset().top - $("nav").height() + 2,
    },
    500
  );
});
$(".contact").on("click", function () {
  $("body, html").animate(
    {
      scrollTop:
        $("#contact").offset().top -
        $("nav").height() +
        2 +
        $(".triangle").outerHeight(),
    },
    500
  );
});

// Portfolio animation

$(document).ready(function () {
  $(".p1").hover(
    function () {
      $(".p1 > h2, .p1 > h3, .p1 h3 i").addClass("move");
    },
    function () {
      $(".p1 > h2, .p1 > h3, .p1 h3 i").removeClass("move");
    }
  );
  $(".p2").hover(
    function () {
      $(".p2 > h2, .p2 > h3, .p2 h3 i").addClass("move");
    },
    function () {
      $(".p2 > h2, .p2 > h3, .p2 h3 i").removeClass("move");
    }
  );
  $(".p3").hover(
    function () {
      $(".p3 > h2, .p3 > h3, .p3 h3 i").addClass("move");
    },
    function () {
      $(".p3 > h2, .p3 > h3, .p3 h3 i").removeClass("move");
    }
  );
  $(".p4").hover(
    function () {
      $(".p4 > h2, .p4 > h3, .p4 h3 i").addClass("move");
    },
    function () {
      $(".p4 > h2, .p4 > h3, .p4 h3 i").removeClass("move");
    }
  );
});

// Contact arrow

$(".arrowUp").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $("#home").offset().top - $("nav").height() + 1,
    },
    500
  );
});
