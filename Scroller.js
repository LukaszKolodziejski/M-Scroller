class Scroller {
  constructor(rootSelector) {
    const rootElement = document.querySelector(rootSelector);
    this.sections = document.querySelectorAll("section");
    const sectionsArr = [...this.sections];

    const currentSectionIndex = sectionsArr.findIndex(this.isScrolledIntoView);
    // this.currentSectionIndex = currentSectionIndex < 0 ? 0 : currentSectionIndex;
    this.currentSectionIndex = Math.max(currentSectionIndex, 0);
    console.log(this.currentSectionIndex);
    this.isThrottlet = false;
  }

  isScrolledIntoView = el => {
    const rect = el.getBoundingClientRect();
    const elemTop = Math.floor(rect.top);
    const elemBottom = Math.floor(rect.bottom);
    const isVissible = elemTop >= 0 && elemBottom <= window.innerHeight;
    return isVissible;
  };

  listenScroll = e => {
    if (this.isThrottlet) return;
    this.isThrottlet = true;
    setTimeout(() => (this.isThrottlet = false), 1000);
    const direction = e.wheelDelta < 0 ? 1 : -1;
    this.scroll(direction);
    console.log(e.wheelDelta);
  };
  scroll = direction => {
    if (direction === 1) {
      const isLastSection =
        this.currentSectionIndex === this.sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    this.currentSectionIndex += direction;
    this.scrollToCurrentSection();
  };
  scrollToCurrentSection = () => {
    this.sections[this.currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
}
