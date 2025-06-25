import { useEffect } from "react";
import "./App.css";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Teddy's Portfolio";
  }, []);

  return (
    <div className="container dark-theme">
      <header className="header fade-in">
        <h1 className="title">Hi, I'm Teddy</h1>
        <p className="subtitle">Software Engineer • Web Developer • Fitness Enthusiast</p>
        <a href="#projects" className="cta-button">Explore My Projects ↓</a>
      </header>

      <section id="projects" className="section fade-in">
        <h2 className="section-title">🚀 Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3 className="project-title">🔌🌐 Universal Electronics</h3>
            <video 
  width="100%" 
  controls 
  autoPlay 
  muted 
  loop 
  preload="auto" 
  poster="/universalp.png"
>
  <source src="/universalv.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
            <p className="project-description">A <b>Full-stack</b> e-commerce website with an admin panel for managing products and orders. Built using <b>MongoDB</b>, <b>Node.js</b>, <b>Express</b>, and <b>React</b>, it delivers a smooth shopping experience with dynamic product management.</p>
            <a href="https://github.com/TG-16/Universal-Electronics" target="_blank" className="project-link"><i className="devicon-github-original"></i>Front-End</a>
            <a href="https://github.com/TG-16/Universal-Electronics-BackEnd" target="_blank" className="project-link next"><i className="devicon-github-original"></i>Back-End</a>
          </div>
          
          <div className="project-card">
            <h3 className="project-title">🚗 Car Rental System (JavaFX)</h3>
            <video 
  width="100%" 
  controls 
  autoPlay 
  muted 
  loop 
  preload="auto" 
  poster="/carrentalp.png"
>
  <source src="/carrentalv.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            <p className="project-description">A fully functional desktop application built in Java using <b>JavaFX</b>, designed to manage car rentals including booking, customer management, and vehicle records.</p>
            <a href="https://github.com/TG-16/car-rental" className="project-link" target="_blank"><i className="devicon-github-original"></i>Github</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">📱 Afomia's Portfolio</h3>
            <video 
  width="100%" 
  controls 
  autoPlay 
  muted 
  loop 
  preload="auto" 
  poster="/afomip.png"
>
  <source src="/afomiav.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
            <p className="project-description">Clean & modern portfolio website designed to showcase personal & professional work. Built with responsive design in mind, it highlights projects, skills, and contact information with a sleek user interface, built using <b>React</b>.</p>
            <a href="https://github.com/TG-16/afomia-protfolio" target="_blank" className="project-link"><i className="devicon-github-original"></i>Github</a>
            <a href="https://meetafomia.com" target="_blank" className="project-link next">Live</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">🏛 Architectural Landing Page</h3>
            <video 
  width="100%" 
  controls 
  autoPlay 
  muted 
  loop 
  preload="auto" 
  poster="/archp.png"
>
  <source src="/archv.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

            <p className="project-description">A sleek website for an architecture firm built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.</p>
            <a href="https://github.com/TG-16/Architectural-Landing-Page" target="_blank" className="project-link"><i className="devicon-github-original"></i>Github</a>
          </div>
          <div className="project-card">
            <h3 className="project-title">🦷 Dental clinic booking</h3>
            <video 
  width="100%" 
  controls 
  autoPlay 
  muted 
  loop 
  preload="auto" 
  poster="/dentalp.png"
>
  <source src="/dentalv.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
            <p className="project-description">I developed a backend system for a dental clinic booking platform using <b>Node.js</b>, <b>Express</b>, and <b>MongoDB</b>. The system manages appointment scheduling, patient records, and dentist availability, providing a smooth and secure booking experience for both patients and clinic staff.</p>
            <a href="https://github.com/TG-16/denital_patient_managment" target="_blank" className="project-link"><i className="devicon-github-original"></i>Github</a>
          </div>
          {/* <div className="project-card">
            <h3 className="project-title">📱 Student Marketplace</h3>
            <p className="project-description">A responsive web platform where students can buy and sell items. Built using HTML, CSS, JavaScript.</p>
            <a href="https://github.com/TG-16/Architectural-Landing-Page" className="project-link">View Details →</a>
          </div> */}
        </div>
      </section>

      <section className="section fade-in">
        <h2 className="section-title">🛠 Skills & Tools</h2>
        <ul className="skills-grid">
          <li><i className="devicon-html5-plain colored"></i> HTML</li>
          <li><i className="devicon-css3-plain colored"></i> CSS</li>
          <li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
          <li><i className="devicon-react-original colored"></i> React</li>
          <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
          <li><i className="devicon-express-original colored"></i> Express</li>
          <li><i className="devicon-mongodb-plain colored"></i> MongoDB</li>
          <li><i className="devicon-mysql-plain colored"></i> MySQL</li>
          <li><i className="devicon-java-plain colored"></i> Java</li>
          <li><i className="devicon-cplusplus-plain colored"></i> C++</li>
          <li><i className="devicon-git-plain colored"></i> Git</li>
          <li><i className="devicon-github-original colored"></i> GitHub</li>
        </ul>

      </section>

      <section className="section fade-in">
        <h2 className="section-title">📬 Contact Me</h2>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/tewodros-gebeyaw-790030345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer">🔗 LinkedIn</a>
          <a href="https://github.com/TG-16" target="_blank" rel="noreferrer">💻 GitHub</a>
          <a href="mailto:tewodrosgebeyaw00@gmail.com">✉️ Email</a>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Tewodros Gebeyaw. All rights reserved.
      </footer>
    </div>
  );
}
