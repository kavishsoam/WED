if (document.querySelector("#none-signin-form")) {
  document.querySelector("#none-signin-form").onclick = function (event) {
    var f = document.querySelector(".login-form-1");
    var c = document.querySelector(".forgot-password-form-1");
    f.style.display = "none";
    c.style.display = "block";
    event.preventDefault();
  };
}
if (document.querySelector("#cancle-forgot-form")) {
  document
    .querySelector("#cancle-forgot-form")
    .addEventListener("click", function (event) {
      var f = document.querySelector(".login-form-1");
      var c = document.querySelector(".forgot-password-form-1");
      f.style.display = "block";
      c.style.display = "none";
      event.preventDefault();
    });
}
if (document.querySelector("#login_form")) {
  document
    .querySelector("#login_form")
    .addEventListener("click", function (event) {
      var l = document.querySelector(".login_form");
      l.style.right = "-0%";
      if (window.innerWidth <= 460) {
        l.style.right = "0%";
      }
      event.preventDefault();
    });
}
if (document.querySelector("#close-login_form")) {
  document
    .querySelector("#close-login_form")
    .addEventListener("click", function () {
      var l = document.querySelector(".login_form");
      l.style.right = "-100%";
      if (window.innerWidth <= 460) {
        l.style.right = "-100%";
      }
    });
}
if (document.querySelector(".btn-mob")) {
  document.querySelector(".btn-mob").onclick = function () {
    document.getElementsByClassName("collapse-2")[0].style.right = "0px";
  };
}
if (document.querySelector("#hide_collapes")) {
  document.querySelector("#hide_collapes").onclick = function () {
    document.getElementsByClassName("collapse-2")[0].style.right = "-150%";
  };
}
if (document.querySelector("#other-links")) {
  document.querySelector("#other-links").onclick = function (event) {
    document.getElementsByClassName("other-link")[0].style.transition = "1s";
    document.getElementsByClassName("other-link")[0].style.left = "50%";
    document.getElementsByClassName("other-link")[0].style.opacity = "1";
    if (
      (document.getElementsByClassName("other-link")[0].style.opacity = "1")
    ) {
      document.querySelector("#close-other-link").onclick = function () {
        document.getElementsByClassName("other-link")[0].style.left = "-60%";
        document.getElementsByClassName("other-link")[0].style.opacity = "0";
      };
    }

    event.preventDefault();
  };
}
if (document.querySelector("#other_links")) {
  document.querySelector("#other_links").onclick = function (event) {
    document.getElementsByClassName("other-link")[0].style.opacity = "0";
    document.getElementsByClassName("other-link")[0].style.left = "-60%";
    document.getElementById("mobile-footer-links").style.top = "0%";
    document.getElementById("mobile-footer-links").style.transition = "1s";
    document.getElementById("mobile-footer-links").style.opacity = "1";
    if ((document.getElementById("mobile-footer-links").style.top = "0%")) {
      document
        .querySelector("#close-mobile-footer-links")
        .addEventListener("click", function () {
          document.getElementById("mobile-footer-links").style.top = "170%";
          document.getElementById("mobile-footer-links").style.opacity = "0";
        });
    }
    event.preventDefault();
  };
}
if (document.querySelector("#show-filter")) {
  document.querySelector("#show-filter").onclick = function () {
    document.getElementById("on-mobile").style.opacity = "1";
    document.getElementById("on-mobile").style.right = "-50%";
    document.getElementById("on-mobile").style.transition = "1s";
    if ((document.getElementById("on-mobile").style.opacity = "1")) {
      document.querySelector("#close-filter").onclick = function () {
        document.getElementById("on-mobile").style.opacity = "0";
        document.getElementById("on-mobile").style.right = "-170%";
      };
    }
  };
}
if (document.querySelector(".search-profile")) {
  document
    .querySelector(".search-profile")
    .addEventListener("click", function () {
      document.querySelector(".bg-search_input").style.top = "0px";
      if ((document.querySelector(".bg-search_input").style.top = "0px")) {
        document
          .querySelector("#close_search_input")
          .addEventListener("click", function () {
            document.querySelector(".bg-search_input").style.top = "-100%";
          });
      }
    });
}

if (document.querySelector("#other_links")) {
  document.querySelector("#other_links").onclick = function (event) {
    document.getElementById("mobile-footer-links").style.opacity = "1";
    document.getElementById("mobile-footer-links").style.top = "0%";
    document.getElementById("mobile-footer-links").style.transition = "1s";
    if ((document.getElementById("mobile-footer-links").style.opacity = "1")) {
      document
        .querySelector("#close-mobile-footer-links")
        .addEventListener("click", function () {
          document.getElementById("mobile-footer-links").style.opacity = "0";
          document.getElementById("mobile-footer-links").style.top = "170%";
          document.getElementById("mobile-footer-links").style.transition =
            "1s";
        });
    }
    event.preventDefault();
  };
}

if (document.querySelector("#partner_search")) {
  document
    .querySelector("#partner_search")
    .addEventListener("click", function (event) {
      document.getElementsByClassName("secrch_partner")[0].style.top = "0";
      if (
        (document.getElementsByClassName("secrch_partner")[0].style.top = "0")
      ) {
        document.getElementById("mobile-footer-links").style.zIndex = "999";
        document
          .querySelector("#hide_search_partner_form")
          .addEventListener("click", function () {
            document.getElementsByClassName("secrch_partner")[0].style.top =
              "-100%";
          });
      }
      event.preventDefault();
    });
}

if (document.querySelector(".arrow_up")) {
  document.querySelector(".arrow_up").addEventListener("click", function () {
    if (
      (document.getElementsByClassName("arrow_up")[0].style.transform =
        "scale(1)")
    ) {
      window.scroll(0, 0);
    }
  });
}
window.onscroll = function () {
  if (window.scrollY >= 550) {
    document.getElementsByClassName("arrow_up")[0].style.transform = "scale(1)";
  } else {
    document.getElementsByClassName("arrow_up")[0].style.transform = "scale(0)";
  }
};
if (document.querySelector("#user-list-profile")) {
  document
    .querySelector("#user-list-profile")
    .addEventListener("click", function () {
      document.getElementById("profile").style.transition = "1s";
      document.getElementById("profile").style.opacity = "1";
      document.getElementById("profile").style.left = "0%";
      if ((document.getElementById("profile").style.opacity = "1")) {
        document.querySelector("#close-active-2").onclick = function () {
          document.getElementById("profile").style.opacity = "0";
          document.getElementById("profile").style.left = "-120%";
        };
      }
    });
}
if (document.querySelector("#user-list")) {
  document.querySelector("#user-list").addEventListener("click", function () {
    document.getElementById("active-user").style.transition = "1s";
    document.getElementById("active-user").style.opacity = "1";
    document.getElementById("active-user").style.left = "0%";
    if ((document.getElementById("active-user").style.opacity = "1")) {
      document.querySelector("#close-active").onclick = function () {
        document.getElementById("active-user").style.opacity = "0";
        document.getElementById("active-user").style.left = "-150%";
      };
    }
  });
}
if (document.querySelector("#show-pass")) {
  document.querySelector("#show-pass").addEventListener("click", function () {
    document.getElementById("creat-pass").type = "text";
    if ((document.getElementById("creat-pass").type = "text")) {
      document.getElementById("show-pass").style.display = "none";
      document.getElementById("none-pass").style.display = "block";
    }
  });
}
if (document.querySelector("#none-pass")) {
  document.querySelector("#none-pass").addEventListener("click", function () {
    if ((document.getElementById("creat-pass").type = "text")) {
      document.getElementById("creat-pass").type = "password";
      document.getElementById("none-pass").style.display = "none";
      document.getElementById("show-pass").style.display = "block";
    }
  });
}
if (document.querySelector("#show_register_form")) {
  document.querySelector("#show_register_form").addEventListener("click", e => {
    document.getElementsByClassName("register_form")[0].style.height = "auto";
    document.getElementsByClassName("register_form")[0].style.opacity = "1";
    document.getElementsByClassName("register_form")[0].style.overflow =
      "unset";
    e.preventDefault();
  });
}
if (document.querySelector(".music")) {
  document.querySelector(".music").addEventListener("click", e => {
    // document.getElementById("autoplay").autoplay = true;
    // document.getElementById("autoplay").play();
    if (document.querySelector("#none-signin-form")) {
      document.querySelector("#none-signin-form").onclick = function (event) {
        var f = document.querySelector(".login-form-1");
        var c = document.querySelector(".forgot-password-form-1");
        f.style.display = "none";
        c.style.display = "block";
        event.preventDefault();
      };
    }
    if (document.querySelector("#cancle-forgot-form")) {
      document
        .querySelector("#cancle-forgot-form")
        .addEventListener("click", function (event) {
          var f = document.querySelector(".login-form-1");
          var c = document.querySelector(".forgot-password-form-1");
          f.style.display = "block";
          c.style.display = "none";
          event.preventDefault();
        });
    }
    if (document.querySelector("#login_form")) {
      document
        .querySelector("#login_form")
        .addEventListener("click", function (event) {
          var l = document.querySelector(".login_form");
          l.style.right = "-0%";
          if (window.innerWidth <= 460) {
            l.style.right = "0%";
          }
          event.preventDefault();
        });
    }
    if (document.querySelector("#close-login_form")) {
      document
        .querySelector("#close-login_form")
        .addEventListener("click", function () {
          var l = document.querySelector(".login_form");
          l.style.right = "-100%";
          if (window.innerWidth <= 460) {
            l.style.right = "-100%";
          }
        });
    }
    if (document.querySelector(".btn-mob")) {
      document.querySelector(".btn-mob").onclick = function () {
        document.getElementsByClassName("collapse-2")[0].style.right = "0px";
      };
    }
    if (document.querySelector("#hide_collapes")) {
      document.querySelector("#hide_collapes").onclick = function () {
        document.getElementsByClassName("collapse-2")[0].style.right = "-150%";
      };
    }
    if (document.querySelector("#other-links")) {
      document.querySelector("#other-links").onclick = function (event) {
        document.getElementsByClassName("other-link")[0].style.transition =
          "1s";
        document.getElementsByClassName("other-link")[0].style.left = "50%";
        document.getElementsByClassName("other-link")[0].style.opacity = "1";
        if (
          (document.getElementsByClassName("other-link")[0].style.opacity = "1")
        ) {
          document.querySelector("#close-other-link").onclick = function () {
            document.getElementsByClassName("other-link")[0].style.left =
              "-60%";
            document.getElementsByClassName("other-link")[0].style.opacity =
              "0";
          };
        }

        event.preventDefault();
      };
    }
    if (document.querySelector("#other_links")) {
      document.querySelector("#other_links").onclick = function (event) {
        document.getElementsByClassName("other-link")[0].style.opacity = "0";
        document.getElementsByClassName("other-link")[0].style.left = "-60%";
        document.getElementById("mobile-footer-links").style.top = "0%";
        document.getElementById("mobile-footer-links").style.transition = "1s";
        document.getElementById("mobile-footer-links").style.opacity = "1";
        if ((document.getElementById("mobile-footer-links").style.top = "0%")) {
          document
            .querySelector("#close-mobile-footer-links")
            .addEventListener("click", function () {
              document.getElementById("mobile-footer-links").style.top = "170%";
              document.getElementById("mobile-footer-links").style.opacity =
                "0";
            });
        }
        event.preventDefault();
      };
    }
    if (document.querySelector("#show-filter")) {
      document.querySelector("#show-filter").onclick = function () {
        document.getElementById("on-mobile").style.opacity = "1";
        document.getElementById("on-mobile").style.right = "-50%";
        document.getElementById("on-mobile").style.transition = "1s";
        if ((document.getElementById("on-mobile").style.opacity = "1")) {
          document.querySelector("#close-filter").onclick = function () {
            document.getElementById("on-mobile").style.opacity = "0";
            document.getElementById("on-mobile").style.right = "-170%";
          };
        }
      };
    }
    if (document.querySelector(".search-profile")) {
      document
        .querySelector(".search-profile")
        .addEventListener("click", function () {
          document.querySelector(".bg-search_input").style.top = "0px";
          if ((document.querySelector(".bg-search_input").style.top = "0px")) {
            document
              .querySelector("#close_search_input")
              .addEventListener("click", function () {
                document.querySelector(".bg-search_input").style.top = "-100%";
              });
          }
        });
    }

    if (document.querySelector("#other_links")) {
      document.querySelector("#other_links").onclick = function (event) {
        document.getElementById("mobile-footer-links").style.opacity = "1";
        document.getElementById("mobile-footer-links").style.top = "0%";
        document.getElementById("mobile-footer-links").style.transition = "1s";
        if (
          (document.getElementById("mobile-footer-links").style.opacity = "1")
        ) {
          document
            .querySelector("#close-mobile-footer-links")
            .addEventListener("click", function () {
              document.getElementById("mobile-footer-links").style.opacity =
                "0";
              document.getElementById("mobile-footer-links").style.top = "170%";
              document.getElementById("mobile-footer-links").style.transition =
                "1s";
            });
        }
        event.preventDefault();
      };
    }

    if (document.querySelector("#partner_search")) {
      document
        .querySelector("#partner_search")
        .addEventListener("click", function (event) {
          document.getElementsByClassName("secrch_partner")[0].style.top = "0";
          if (
            (document.getElementsByClassName("secrch_partner")[0].style.top =
              "0")
          ) {
            document.getElementById("mobile-footer-links").style.zIndex = "999";
            document
              .querySelector("#hide_search_partner_form")
              .addEventListener("click", function () {
                document.getElementsByClassName("secrch_partner")[0].style.top =
                  "-100%";
              });
          }
          event.preventDefault();
        });
    }

    if (document.querySelector(".arrow_up")) {
      document.querySelector(".arrow_up").addEventListener("click", function () {
        if (
          (document.getElementsByClassName("arrow_up")[0].style.transform =
            "scale(1)")
        ) {
          window.scroll(0, 0);
        }
      });
    }
    window.onscroll = function () {
      if (window.scrollY >= 550) {
        document.getElementsByClassName("arrow_up")[0].style.transform =
          "scale(1)";
      } else {
        document.getElementsByClassName("arrow_up")[0].style.transform =
          "scale(0)";
      }
    };
    if (document.querySelector("#user-list-profile")) {
      document
        .querySelector("#user-list-profile")
        .addEventListener("click", function () {
          document.getElementById("profile").style.transition = "1s";
          document.getElementById("profile").style.opacity = "1";
          document.getElementById("profile").style.left = "0%";
          if ((document.getElementById("profile").style.opacity = "1")) {
            document.querySelector("#close-active-2").onclick = function () {
              document.getElementById("profile").style.opacity = "0";
              document.getElementById("profile").style.left = "-120%";
            };
          }
        });
    }
    if (document.querySelector("#user-list")) {
      document
        .querySelector("#user-list")
        .addEventListener("click", function () {
          document.getElementById("active-user").style.transition = "1s";
          document.getElementById("active-user").style.opacity = "1";
          document.getElementById("active-user").style.left = "0%";
          if ((document.getElementById("active-user").style.opacity = "1")) {
            document.querySelector("#close-active").onclick = function () {
              document.getElementById("active-user").style.opacity = "0";
              document.getElementById("active-user").style.left = "-150%";
            };
          }
        });
    }
    if (document.querySelector("#show-pass")) {
      document
        .querySelector("#show-pass")
        .addEventListener("click", function () {
          document.getElementById("creat-pass").type = "text";
          if ((document.getElementById("creat-pass").type = "text")) {
            document.getElementById("show-pass").style.display = "none";
            document.getElementById("none-pass").style.display = "block";
          }
        });
    }
    if (document.querySelector("#none-pass")) {
      document
        .querySelector("#none-pass")
        .addEventListener("click", function () {
          if ((document.getElementById("creat-pass").type = "text")) {
            document.getElementById("creat-pass").type = "password";
            document.getElementById("none-pass").style.display = "none";
            document.getElementById("show-pass").style.display = "block";
          }
        });
    }
    if (document.querySelector("#show_register_form")) {
      document
        .querySelector("#show_register_form")
        .addEventListener("click", e => {
          document.getElementsByClassName("register_form")[0].style.height =
            "auto";
          document.getElementsByClassName("register_form")[0].style.opacity =
            "1";
          document.getElementsByClassName("register_form")[0].style.overflow =
            "unset";
          e.preventDefault();
        });
    }
    if (document.querySelector(".music")) {
      document.querySelector(".music").addEventListener("click", e => {
        document.getElementsByClassName("wedding_music_wrap")[0].style.top ="0";
        document.getElementsByClassName("wedding_music_wrap")[0].style.opacity ="1";
        document.getElementsByClassName("wedding_music_wrap")[0].style.zIndex = "999";

        // document.getElementById("autoplay").autoplay = true;
        // document.getElementById("autoplay").play();
        e.preventDefault();
        if (
          (document.getElementsByClassName("wedding_music_wrap")[0].style.top ="0")
        ) {
          document
            .querySelector(".close_songs").addEventListener("click", f => {
              document.getElementsByClassName("wedding_music_wrap")[0].style.top = "-100%";
              document.getElementsByClassName("wedding_music_wrap")[0].style.opacity = "0";
              document.getElementsByClassName("wedding_music_wrap")[0].style.zIndex = "-1";
              // document.getElementById("autoplay").autoplay = false;
              // document.getElementById("autoplay").pause();
              f.preventDefault();
            });
        }
      });
    }
    document.getElementsByClassName("wedding_music_wrap")[0].style.top = "0";
    document.getElementsByClassName("wedding_music_wrap")[0].style.opacity ="1";
    document.getElementsByClassName("wedding_music_wrap")[0].style.zIndex = "999";
    // document.getElementById("autoplay").autoplay = true;
    // document.getElementById("autoplay").play();
    e.preventDefault();
    if (
      (document.getElementsByClassName("wedding_music_wrap")[0].style.top = "0")
    ) {
      document.querySelector(".close_songs").addEventListener("click", f => {
        document.getElementsByClassName("wedding_music_wrap")[0].style.top ="-100%";
        document.getElementsByClassName("wedding_music_wrap")[0].style.opacity = "0";
              document.getElementsByClassName("wedding_music_wrap")[0].style.zIndex = "-1";
        // document.getElementById("autoplay").autoplay = false;
        // document.getElementById("autoplay").pause();
        f.preventDefault();
      });
    }
  });
}
var faq = document.querySelectorAll("._show_hide_faq");
if (faq) {
  for (var i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", checking);
  }

  function checking() {
    if (this.nextElementSibling.classList.contains("_faq_content_2")) {
      this.nextElementSibling.classList.add("_faq_content");
      this.nextElementSibling.classList.remove("_faq_content_2");
    } else {
      this.nextElementSibling.classList.remove("_faq_content");
      this.nextElementSibling.classList.add("_faq_content_2");
    }
  }
}
if (document.querySelector("#quick_view")) {
  var quick_view = document.querySelectorAll("#quick_view");
  for (var v = 0; v < quick_view.length; v++) {
    quick_view[v].addEventListener("click", function () {
      document.getElementsByClassName(
        "quick_view_matching_details_"
      )[0].style.transform = "scale(1)";
      if (
        (document.getElementsByClassName(
          "quick_view_matching_details_"
        )[0].style.transform = "scale(1)")
      ) {
        document
          .querySelector(".close_quick_view_matching_details_")
          .addEventListener("click", function () {
            document.getElementsByClassName(
              "quick_view_matching_details_"
            )[0].style.transform = "scale(0)";
          });
      }
    });
  }
}

// var songs = document.querySelectorAll("#autoplay");
// if (songs) {
//   document.querySelector(".music").addEventListener("click", function () {
//     for (var s = 0; s < songs.length; s++) {
//       songs[0].autoplay = true;
//       songs[0].play();
//     }
//   });
// }

var count = 0;
var songs = document.querySelectorAll(".autoplay");
if (songs) {
  document.querySelector(".music").addEventListener("click", function () {
    play();
    pause();
    for (var s = 0; s < songs.length; s++) {
      songs[s].addEventListener("ended", function () {
        count++;
        play();
      });
      if (songs[count].play()) {
        document.querySelector(".close_songs").addEventListener('click', function (l) {
          if (songs[count].play() != l.target) {
            songs[count].pause();
          }
        })
      }
    }

    function play() {
      songs[count].play();
    }

    function pause() {
      songs[count].pause();
    }
  });

  // document.querySelector(".close_songs").addEventListener("click", function () {
  //   pause();
  //   for (var s = 0; s < songs.length; s++) {
  //     songs[s].pause();
  //   }

  //   function pause() {
  //     songs[count].pause();
  //   }
  // });
}
document.addEventListener("play", function (e) {
    var audios = document.querySelectorAll(".autoplay");
    for (var i = 0; i < audios.length; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  },
  true
);