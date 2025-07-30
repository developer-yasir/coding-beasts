import React from 'react';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'CEO & Lead Architect',
      description: 'Visionary leader passionate about scalable solutions and cutting-edge technologies.',
      image: 'https://via.placeholder.com/150/007bff/ffffff?text=Alice',
    },
    {
      id: 2,
      name: 'Bob Williams',
      role: 'Chief Technology Officer',
      description: 'Expert in backend systems, cloud infrastructure, and database management.',
      image: 'https://via.placeholder.com/150/28a745/ffffff?text=Bob',
    },
    {
      id: 3,
      name: 'Charlie Brown',
      role: 'Lead UI/UX Designer',
      description: 'Crafting intuitive, accessible, and beautiful user experiences that delight.',
      image: 'https://via.placeholder.com/150/ffc107/ffffff?text=Charlie',
    },
    {
      id: 4,
      name: 'Diana Prince',
      role: 'Senior Project Manager',
      description: 'Ensuring seamless project delivery, client satisfaction, and team collaboration.',
      image: 'https://via.placeholder.com/150/17a2b8/ffffff?text=Diana',
    },
  ];

  return (
    <div className="about-page">
      <div className="container">
        <h1>About Us</h1>
        <p>We are a team of passionate developers who love building amazing things. Our mission is to provide high-quality web development services to our clients and help them achieve their goals.</p>
        <p>At Coding Beasts, we believe in innovation, collaboration, and excellence. We work closely with our clients to understand their needs and deliver solutions that exceed their expectations.</p>

        <section className="team-section section-padding">
          <h2 className="section-title text-center">Meet Our Talented Team</h2>
          <p className="section-subtitle text-center">Behind every successful project is a team of dedicated and passionate individuals. Get to know the experts who make it happen.</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
