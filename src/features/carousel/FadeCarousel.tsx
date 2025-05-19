import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import "./FadeCarousel.css";

export default function FadeCarousel() {
  const allSlides = [
    { path: "/slides/lg/1.mp4", orientation: "horizontal" },
    { path: "/slides/lg/2.mp4", orientation: "horizontal" },
    { path: "/slides/lg/3.mp4", orientation: "horizontal" },
    { path: "/slides/lg/4.mp4", orientation: "horizontal" },
    { path: "/slides/lg/5.mp4", orientation: "horizontal" },

    { path: "/slides/sm/1.mp4", orientation: "vertical" },
    { path: "/slides/sm/2.mp4", orientation: "vertical" },
    { path: "/slides/sm/3.mp4", orientation: "vertical" },
    { path: "/slides/sm/4.mp4", orientation: "vertical" },
    { path: "/slides/sm/5.mp4", orientation: "vertical" },
  ];

  const [slides, setSlides] = useState<typeof allSlides>([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      const filtered = allSlides.filter((slide) =>
        isMobile
          ? slide.orientation === "vertical"
          : slide.orientation === "horizontal"
      );

      setSlides(filtered);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel interval={3000} className="carousel">
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="slide-wrapper">
            <video
              src={slide.path}
              className={`carousel-slide ${slide.orientation}`}
              loop
              muted
              playsInline
              autoPlay
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
