!(function (e, s, t, a, d, n, r) {
  e.smrtvds ||
    ((d = e.smrtvds =
      function () {
        d.callMethod
          ? d.callMethod.apply(d, arguments)
          : d.queue.push(arguments);
      }),
    e._smrtvds || (e._smrtvds = d),
    (d.push = d),
    (d.loaded = !0),
    (d.version = "1.1"),
    (d.queue = []),
    ((n = s.createElement("script")).async = !0),
    (n.src = "assets/js/produtor-video.js"),
    s.getElementsByTagName("head")[0].appendChild(n));
})(window, document);
document.getElementById("vid_61e802526ccfca00093eb603") ||
  (function (w, d, s, c) {
    s = d.getElementById("scr_61e802526ccfca00093eb603");
    c = d.createElement("DIV");
    c.id = "vid_61e802526ccfca00093eb603";
    s.parentElement.insertBefore(c, s);
  })(window, document);
window.smrtvds(
  "vid_61e802526ccfca00093eb603",
  "90517eec-200e-4ae8-87cc-1fc497c144da",
  "61e7f8b06ccfca00093eb601",
  {
    autoplay: "smartplay",
    theme: "#D0021B",
    foreground_color: "#FFFFFF",
    video: {
      pic_finish:
        "../images/everything-download.png",
    },
    cdn: "cdn.converteai.net",
    domains: [],
    displays: {
      big_play: true,
      play_pause: true,
      backward: false,
      forward: false,
      volume: false,
      volume_bar: false,
      time: false,
      fullscreen: false,
      seekbar: false,
      seekbar_time: false,
      speed: true,
    },
    callAction: [
      {
        id: "callaction_61e802526ccfca00093eb603_0",
        type: "below_button",
        btnText: "QUERO SECAR EM 21 DIAS",
        position: "bc",
        link: "https://pay.kiwify.com.br/i6SnAZM",
        range: { start: 775, finish: 1056 },
        color: "#FF6600",
        show_visit_returns: false,
        colors: {
          text: "#FFFFFF",
          background: "#FF6600",
          text_hover: "#FFFFFF",
          background_hover: "#D35600",
        },
        size: "sm",
      },
    ],
    resume: false,
    fake_bar: true,
    smartplay_options: {
      top_text: "Seu video já começou",
      bottom_text: "Clique para ouvir",
      foreground_color: "#FFFFFF",
      background_color: "#D0021B",
    },
    fake_bar_options: { height: 2 },
  }
);
