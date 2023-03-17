import AOS from "aos";
import "aos/dist/aos.css";

const initAOS = () => {
  AOS.init({
    duration: 1500,
    easing: "ease",
    once: true,
  });
};

export default initAOS;
