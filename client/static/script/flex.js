/*eslint-disable*/
function flex() {
  var i = window;
  var a = 200,
    n = 1,
    r = i.document,
    o = navigator.userAgent,
    d = o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
    l = o.match(/U3\/((\d+|\.){5,})/i),
    c = l && parseInt(l[1].split(".").join(""), 10) >= 80,
    p = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
    s = i.devicePixelRatio || 1;
  p || d && d[1] > 534 || c || (s = 1);
  var u = 1 / s,
    m = r.querySelector('meta[name="viewport"]');
  m || (m = r.createElement("meta"), m.setAttribute("name", "viewport"), r.head.appendChild(m)),
    m.setAttribute("content", "width=device-width,user-scalable=no,initial-scale=" + u + ",maximum-scale=" + u + ",minimum-scale=" + u),
    cw = r.documentElement.clientWidth,
    r.documentElement.style.fontSize = (a / 2 * s * n) * Math.pow((cw / s) / 375, 0.7) + "px";
}
flex();
window.onresize = flex;
