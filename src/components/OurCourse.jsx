import "./OurCourse.css";

const courses = [
  {
    title: "JEE Foundation Course",
    img: "/jee-foundation.webp", // replace with your image
    desc: "Build solid Physics, Chemistry & Math fundamentals in Classes 8‑10, giving you a head‑start for JEE Main & Advanced.",
  },
  {
    title: "NEET Foundation Course",
    img: "/neet-foundation.webp",
    desc: "Early introduction to Biology, Physics & Chemistry concepts plus Olympiad‑style problem‑solving for future NEET success.",
  },
  {
    title: "10th Board Master Course",
    img: "/class-tenth.webp",
    desc: "Comprehensive NCERT coverage, high‑yield notes & exam‑oriented practice to score 95%+ in Class 10 board exams.",
  },
  {
    title: "12th Board Master Course",
    img: "/class-12th.webp",
    desc: "Concept clarity, fast‑track revision & model papers for stellar performance in Class 12 boards across all major boards.",
  },
  {
    title: "CUET Extra‑Edge Course",
    img: "/cuet.webp",
    desc: "Smart shortcuts, sectional tests & strategy sessions to maximise CUET score and unlock top university admissions.",
  },
  {
    title: "JEE & NEET Dropper Super Course",
    img: "/droper.webp",
    desc: "One‑year power programme with intensive doubt support, daily tests & personalised mentoring to convert droppers into rankers.",
  },
];

function OurCourse() {
  return (
    <section className="courses-section">
      <h2 className="courses-heading">Our Courses</h2>

      <div className="courses-grid">
        {courses.map(({ title, img, desc }) => (
          <div key={title} className="course-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="card-content">
              <h3>{title}</h3>
              <p>{desc}</p>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default OurCourse
