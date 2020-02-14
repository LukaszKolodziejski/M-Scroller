document.addEventListener("DOMContentLoaded", () => {
  const scroller = new Scroller("#root");
  //   document.addEventListener("mousewheel", scroller.listenScroll);
  document.addEventListener("wheel", scroller.listenScroll);
  document.addEventListener("swipeUp", () => scroller.scroll(1));
  document.addEventListener("swipeDown", () => scroller.scroll(-1));
  document.addEventListener("keydown", e => {
    switch (e.keyCode) {
      case 38:
        return scroller.scroll(-1);
      case 40:
        return scroller.scroll(1);
      case 37:
        return scroller.scroll(-1);
      case 39:
        return scroller.scroll(1);
      default:
        break;
    }
  });
});
