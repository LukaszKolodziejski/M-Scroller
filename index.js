document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");
  let currentSectionIndex = 0;

  let isThrottlet = false;

  document.addEventListener("mousewheel", e => {
    if (isThrottlet) return;
    isThrottlet = true;
    setTimeout(() => (isThrottlet = false), 1000);
    const direction = e.wheelDelta < 0 ? 1 : -1;
    scroll(direction);
  });

  const scroll = direction => {
    if (direction === 1) {
      const isLastSection = currentSectionIndex === sections.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = currentSectionIndex === 0;
      if (isFirstSection) return;
    }
    currentSectionIndex += direction;
    scrollToCurrentSection();
  };

  const scrollToCurrentSection = () => {
    sections[currentSectionIndex].scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
});
