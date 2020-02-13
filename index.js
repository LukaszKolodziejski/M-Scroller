document.addEventListener("DOMContentLoaded", () => {
  console.log("działa");
  const rootElement = document.querySelector("#root");
  const sections = document.querySelectorAll("section");
  console.log(sections);
  document.addEventListener("mousewheel", e => {
    console.log(e.wheelDelta);
  });
});
