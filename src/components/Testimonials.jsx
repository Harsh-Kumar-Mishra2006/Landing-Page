import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ananya Sharma",
    img: "/user1.jpg",           // replace with your photo
    quote:
      "Acheive Heights turned my weak areas in Physics into strengths—now I'm excited for JEE!",
  },
  {
    name: "Rohit Kumar",
    img: "/user2.jpg",
    quote:
      "The NEET Foundation Course’s daily practice sheets helped me crack tough problems with ease.",
  },
  {
    name: "Priya Chaudhary",
    img: "/user3.jpg",
    quote:
      "Amazing mentors! Their 10th Board Master Course boosted my confidence and scores alike.",
  },
  {
    name: "Lakshay Singh",
    img: "/user4.jpg",
    quote:
      "Interactive videos and regular tests in Class‑12 Master Course kept me on track for boards.",
  },
  {
    name: "Sakshi Verma",
    img: "/user5.jpg",
    quote:
      "CUET Extra‑Edge strategies were spot‑on—I walked into the exam hall fully prepared.",
  },
  {
    name: "Aditya Narayan",
    img: "/user6.jpg",
    quote:
      "Dropped a year for JEE & NEET Super Course—best decision ever. Personal mentoring is gold!",
  },
  {
    name: "Nisha Patel",
    img: "/user7.jpg",
    quote:
      "From Darbhanga to dream college—Acheive Heights made distance learning truly possible.",
  },
  {
    name: "Mohit Ranjan",
    img: "/user8.jpg",
    quote:
      "The platform’s doubt‑solving sessions are lightning‑fast. Saved me hours every week.",
  },
  {
    name: "Shruti Das",
    img: "/user9.jpg",
    quote:
      "Love the community vibe—study groups kept me motivated through tough chapters.",
  },
  {
    name: "Vivek Gupta",
    img: "/user10.jpg",
    quote:
      "Gamified quizzes and leaderboards turned studying into a fun challenge!",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto‑slide every 5 s
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-heading">What Our Students Say</h2>

      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map(({ name, img, quote }) => (
            <div className="testimonial-card" key={name}>
              <p className="testimonial-quote">“{quote}”</p>
              <div className="student-info">
                <img src={img} alt={name} className="student-img" />
                <h4>{name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* navigation dots */}
      <div className="dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
export default Testimonials
