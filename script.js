gsap.from(".img-thumbnail", { duration: 2, rotationX: 360 });
gsap.from(".navbar", { duration: 1.5, opacity: 0, y: "-100%", ease: "bounce" });
gsap.from(".display-4", { delay: 1, duration: 1, opacity: 0, x: "-10%" });
gsap.from("nav", { duration: 1, opacity: 0, ease: "bounce", y: "-100%" });
gsap.from(".jumbotron img", { duration: 1, ease: "circ", y: "-100%" });
gsap.from(".jumbotron .name", {
  duration: 1,
  opacity: 0,
  ease: "back",
  x: "-50%",
  delay: 0.5,
});

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { delay: 1.5, duration: 2, text: "Student | Junior Web Developer" });

const projects = document.querySelectorAll("#projects .project");

projects.forEach((img, i) => {
  img.dataset.aos = "flip-right";
  img.dataset.aosDelay = i * 100 + 300 + "";
  // console.log((i * 100+300) + '');
  img.dataset.aosDuration = "1000";
  // img.dataset.aosAnchorPlacement = 'bottom-bottom'
});

const dailyDriverImg = document.querySelectorAll("#daily-driver img,#daily-driver i,#daily-driver h5,#daily-driver p");

dailyDriverImg.forEach((img, i) => {
  img.dataset.aos = "zoom-in";
  img.dataset.aosDelay = i * 100 + "";
  img.dataset.aosDuration = "600";
  img.dataset.aosAnchorPlacement = "bottom-bottom";
});

// const contact = document.querySelectorAll("#contact a:not(.exclude), #contact i:not(.exclude)");
const contact = document.querySelectorAll("#contact a, #contact i");

contact.forEach((img, i) => {
  if (img.classList.contains("exclude")) {
    return;
  }
  img.dataset.aos = "fade-up";
  img.dataset.aosDelay = i * 100 + "";
  img.dataset.aosDuration = "600";
  img.dataset.aosAnchorPlacement = "bottom-bottom";
});
