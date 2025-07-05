import "./About.css";
import { useState, useEffect } from "react";

const images = [
  "/img1.avif",
  "/img2.avif",
  "/img3.jpg",
  "/img4.webp",
  "/img5.jpg",
]; // replace with actual filenames you’ll use in `public/`

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about">
      <div className="about-content">
        <h2>About Acheive Heights</h2>
        <p>
          <strong>Acheive Heights</strong> is a forward-thinking online education platform based in{" "}
          <strong>Darbhanga, Bihar</strong>. Our mission is to empower students with high-quality,
          accessible, and engaging educational experiences — regardless of where they live.
          <br /><br />
          From foundational courses to career-aligned upskilling, Acheive Heights is committed
          to transforming learning outcomes for students across India. Through live mentorship,
          interactive video content, and personalized support, we enable every learner to build
          a future of confidence and achievement.
        </p>
      </div>

      <div className="slideshow">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
      </div>
    </section>
  );
}
