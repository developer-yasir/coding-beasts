
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const stackData = {
    "Frontend Stack": [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Framer Motion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" }
    ],
    "Backend Stack": [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Prisma", icon: "https://avatars.githubusercontent.com/u/17219288?s=200&v=4" },
      { name: "JWT", icon: "https://jwt.io/img/pic_logo.svg" },
      { name: "bcrypt.js", icon: "https://img.icons8.com/?size=512&id=V64y1aNqz04k&format=png" },
      { name: "Socket.io", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg" },
      { name: "Nodemailer", icon: "https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png" }
    ],
    "DevOps Tools": [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "CI/CD", icon: "https://img.icons8.com/?size=512&id=WhYrxQlWB3Uj&format=png" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" }
    ],
    "Deployment & Security": [
      { name: "Vercel", icon: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/180x180.png" },
      { name: "Render", icon: "https://dashboard.render.com/favicon.ico" },
      { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" },
      { name: "PM2", icon: "https://pm2.keymetrics.io/images/pm2-logo-300.png" },
      { name: "Cloudflare", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cloudflare_Logo.png/768px-Cloudflare_Logo.png" }
    ],
    "UI/UX Tools": [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" },
      { name: "Canva", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_Logo.png" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
      { name: "LottieFiles", icon: "https://assets-global.website-files.com/5e8c7fcd9e2f3b778899ab3e/6412b5f3a166df0c2aa1e205_Frame%20535%20(1).png" }
    ]
  };
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container hero-content">
          <h1 className="hero-title">Transforming Ideas into Digital Realities</h1>
          <p className="hero-subtitle">We craft cutting-edge web and mobile solutions that drive growth and redefine user experiences.</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/services" className="btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>

      <section className="value-prop-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Why Choose Coding Beasts?</h2>
          <p className="section-subtitle text-center">We are committed to delivering excellence through our core values.</p>
          <div className="value-prop-grid">
            <div className="value-prop-item">
              <div className="value-prop-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>We bring fresh ideas and cutting-edge technologies to every project.</p>
            </div>
            <div className="value-prop-item">
              <div className="value-prop-icon">🤝</div>
              <h3>Client-Centric Approach</h3>
              <p>Your vision is our priority. We collaborate closely to ensure your success.</p>
            </div>
            <div className="value-prop-item">
              <div className="value-prop-icon">🚀</div>
              <h3>Scalable & Robust</h3>
              <p>We build solutions that grow with your business and stand the test of time.</p>
            </div>
            <div className="value-prop-item">
              <div className="value-prop-icon">✨</div>
              <h3>Exceptional Quality</h3>
              <p>Our commitment to quality ensures pixel-perfect designs and bug-free code.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Seamless Development Process</h2>
          <p className="section-subtitle text-center">From concept to launch, our proven approach ensures success.</p>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>Understanding your vision, goals, and requirements to lay a solid foundation.</p>
            </div>
            <div className="process-item">
              <div className="process-step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p>Creating intuitive UI/UX designs and interactive prototypes for your approval.</p>
            </div>
            <div className="process-item">
              <div className="process-step-number">3</div>
              <h3>Development & Testing</h3>
              <p>Building robust solutions with clean code, followed by rigorous testing for quality assurance.</p>
            </div>
            <div className="process-item">
              <div className="process-step-number">4</div>
              <h3>Deployment & Support</h3>
              <p>Launching your product and providing ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Core Technologies</h2>
          <p className="section-subtitle text-center">We leverage a diverse and modern tech stack to build robust and scalable solutions.</p>
          {Object.entries(stackData).map(([category, technologies]) => (
            <div key={category} className="tech-category">
              <h3 className="tech-category-title">{category}</h3>
              <div className="tech-logo-grid">
                {technologies.map(tech => (
                  <div key={tech.name} className="tech-logo-item">
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">What Our Clients Say</h2>
          <p className="section-subtitle text-center">Hear directly from those who have experienced our commitment to excellence.</p>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p className="testimonial-quote">"Coding Beasts transformed our online presence. Their attention to detail and innovative solutions exceeded our expectations!"</p>
              <p className="testimonial-author">- Jane Doe, CEO of Tech Innovations</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-quote">"The team at Coding Beasts delivered a complex project on time and within budget. Their expertise is truly remarkable."</p>
              <p className="testimonial-author">- John Smith, Founder of Global Solutions</p>
            </div>
            <div className="testimonial-item">
              <p className="testimonial-quote">"Professional, responsive, and highly skilled. Coding Beasts is our go-to partner for all web development needs."</p>
              <p className="testimonial-author">- Emily White, Marketing Director at Creative Brands</p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-section section-padding">
        <div className="container">
          <h2 className="section-title text-center">Our Recent Work</h2>
          <p className="section-subtitle text-center">Explore some of our latest projects that showcase our expertise and passion.</p>
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x250/6a11cb/ffffff?text=Project+1" alt="Project 1" />
              <h3>E-commerce Platform</h3>
              <p>A robust and scalable e-commerce solution with seamless user experience.</p>
              <Link to="/portfolio/1" className="btn-text">View Details</Link>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x250/2575fc/ffffff?text=Project+2" alt="Project 2" />
              <h3>SaaS Dashboard</h3>
              <p>Intuitive and data-rich dashboard for a leading SaaS application.</p>
              <Link to="/portfolio/2" className="btn-text">View Details</Link>
            </div>
            <div className="portfolio-item">
              <img src="https://via.placeholder.com/400x250/6a11cb/ffffff?text=Project+3" alt="Project 3" />
              <h3>Mobile App Development</h3>
              <p>Cross-platform mobile application designed for engaging user interaction.</p>
              <Link to="/portfolio/3" className="btn-text">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      

      <section className="home-cta">
        <div className="container">
          <h2>Ready to start your project?</h2>
          <Link to="/contact" className="btn">Contact Us</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
