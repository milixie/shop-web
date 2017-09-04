class Unit {
  /*
    rem to px
    rem 转换成 px 单位
   */
  remToPx(rem) {
    const dpr = window.devicePixelRatio || 1;
    const client_width = window.document.documentElement.clientWidth;
    return Math.round(((rem * 100) * dpr) * Math.pow((client_width / dpr) / 375, 0.7));
  }
}

export default new Unit();