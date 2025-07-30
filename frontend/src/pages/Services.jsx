
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const servicesData = [
  {
    id: 'website-design-development',
    title: 'Website Design & Development',
    description: 'Crafting visually stunning and highly functional websites from concept to launch.',
    fullDescription: 'Our Website Design & Development service focuses on creating visually stunning and highly functional websites from concept to launch. We prioritize user-centric design, ensuring an intuitive and engaging experience for your visitors. Our development process is robust, building scalable and secure platforms that meet your business objectives and stand out in the digital landscape.',
    features: [
      'Custom, responsive design',
      'Intuitive user experience (UX)',
      'Scalable architecture',
      'SEO-friendly structure',
      'Cross-browser compatibility',
      'Performance optimization',
    ],
    price: 2000,
    image: 'https://via.placeholder.com/400x250/007bff/ffffff?text=Web+Design',
    icon: 'fas fa-laptop-code',
  },
  {
    id: 'custom-web-app-development',
    title: 'Custom Web Applications',
    description: 'Building bespoke web applications tailored precisely to your unique business processes and goals.',
    fullDescription: 'We specialize in building bespoke web applications tailored precisely to your unique business processes and goals. From complex internal tools to customer-facing platforms, our solutions are engineered to streamline operations, enhance productivity, and provide a significant competitive edge. We follow an agile development methodology, ensuring flexibility and collaborative progress throughout the project lifecycle.',
    features: [
      'Tailored to specific business needs',
      'Scalable and secure architecture',
      'Integration with existing systems',
      'Automated workflows',
      'Data management and reporting',
      'User role management',
    ],
    price: 3500,
    image: 'https://via.placeholder.com/400x250/28a745/ffffff?text=Custom+Web+App',
    icon: 'fas fa-cogs',
  },
  {
    id: 'e-commerce-website-development',
    title: 'E-commerce Development',
    description: 'Creating secure, scalable online stores designed to maximize sales and enhance the shopping experience.',
    fullDescription: 'Our E-commerce Development service focuses on creating secure, scalable online stores designed to maximize sales and enhance the shopping experience. We build platforms that are not only easy to manage but also provide seamless customer journeys. Equipped with essential features like comprehensive product catalogs, secure shopping carts, and robust payment gateways, your online store will be set for success.',
    features: [
      'Custom online store design',
      'Secure payment gateway integration',
      'Product management & catalog',
      'Shopping cart & checkout functionality',
      'Order tracking & management',
      'Mobile-responsive design',
    ],
    price: 4000,
    image: 'https://via.placeholder.com/400x250/ffc107/ffffff?text=E-commerce',
    icon: 'fas fa-shopping-cart',
  },
  {
    id: 'full-stack-web-development',
    title: 'Full-Stack Expertise',
    description: 'Seamlessly integrating robust backend systems with intuitive frontend interfaces for comprehensive solutions.',
    fullDescription: 'With our Full-Stack Expertise, we seamlessly integrate robust backend systems with intuitive frontend interfaces to deliver comprehensive web solutions. Our developers are proficient in a wide array of technologies (e.g., MERN, LAMP), enabling us to provide end-to-end solutions that are efficient, secure, and easily maintainable. We manage everything from intricate database designs to engaging user interface developments.',
    features: [
      'Comprehensive front-end & back-end development',
      'Scalable architecture design',
      'Database integration & management',
      'API development & integration',
      'Secure and high-performance solutions',
      'Continuous integration & deployment (CI/CD)',
    ],
    price: 5000,
    image: 'https://via.placeholder.com/400x250/17a2b8/ffffff?text=Full-Stack',
    icon: 'fas fa-layer-group',
  },
  {
    id: 'frontend-development',
    title: 'Engaging Frontend',
    description: 'Designing and developing captivating user interfaces that ensure exceptional user experiences.',
    fullDescription: 'Our Engaging Frontend service is dedicated to designing and developing captivating user interfaces that guarantee exceptional user experiences. We focus on creating visually appealing, highly responsive, and interactive interfaces that not only engage your audience but also provide a smooth and enjoyable browsing experience. Our expertise spans modern frameworks and libraries, enabling us to build dynamic and cutting-edge web pages.',
    features: [
      'Interactive UI/UX',
      'Responsive across devices',
      'Modern JavaScript frameworks',
      'Optimized for speed',
      'Accessibility standards',
      'Cross-browser compatibility',
    ],
    price: 1800,
    image: 'https://via.placeholder.com/400x250/6f42c1/ffffff?text=Frontend',
    icon: 'fas fa-code',
  },
  {
    id: 'backend-development',
    title: 'Powerful Backend & APIs',
    description: 'Building secure, high-performance server-side logic and APIs to power your applications.',
    fullDescription: 'We excel at building secure, high-performance server-side logic and APIs that form the backbone of your applications. Our backend solutions are designed to ensure data integrity, efficient processing, and seamless communication across all components of your system. Working with diverse databases and server technologies, we establish a robust and reliable foundation for your entire web presence.',
    features: [
      'Robust server-side logic',
      'Secure API development',
      'Database integration',
      'Scalable architecture',
      'Third-party integrations',
      'Data security & encryption',
    ],
    price: 2200,
    image: 'https://via.placeholder.com/400x250/fd7e14/ffffff?text=Backend',
    icon: 'fas fa-database',
  },
  {
    id: 'cms-development',
    title: 'CMS Development',
    description: 'Empowering you with flexible content management systems for easy updates and scalable content delivery.',
    fullDescription: `Our CMS Development service empowers you with flexible content management systems for easy updates and scalable content delivery. Whether it\'s WordPress, Strapi, or a custom headless CMS, we provide solutions that give you full control over your content without requiring technical expertise. Manage your website content effortlessly and efficiently, ensuring your message is always current and impactful.`,
    features: [
      'Custom CMS solutions',
      'Easy content management',
      'User-friendly interface',
      'Scalable content delivery',
      'Integration with existing tools',
      'Training and support',
    ],
    price: 3000,
    image: 'https://via.placeholder.com/400x250/00bcd4/ffffff?text=CMS',
    icon: 'fas fa-file-alt',
  },
  {
    id: 'website-optimization',
    title: 'Performance Optimization',
    description: `Enhancing your site\'s speed and efficiency for better user engagement and search engine rankings.`,
    fullDescription: `Our Performance Optimization service is dedicated to enhancing your site\'s speed and efficiency for better user engagement and search engine rankings. We meticulously analyze every aspect of your website, from code efficiency to server response times, implementing industry best practices to ensure lightning-fast loading and smooth interactions. A faster website translates directly to happier users and improved conversion rates.`,
    features: [
      'Speed optimization',
      'Code minification',
      'Image optimization',
      'Browser caching',
      'Server response time improvement',
      'Core Web Vitals optimization',
    ],
    price: 1200,
    image: 'https://via.placeholder.com/400x250/8bc34a/ffffff?text=Optimization',
    icon: 'fas fa-tachometer-alt',
  },
  {
    id: 'cloud-devops-integration',
    title: 'Cloud & DevOps',
    description: 'Streamlining development workflows and deploying scalable solutions on leading cloud platforms.',
    fullDescription: 'Our Cloud & DevOps service focuses on streamlining development workflows and deploying scalable solutions on leading cloud platforms. We assist you in leveraging the full potential of AWS, Azure, Google Cloud, and other cloud services to efficiently build, deploy, and manage your applications. Our robust DevOps practices ensure continuous integration and continuous delivery (CI/CD), leading to rapid and reliable software releases.',
    features: [
      'Cloud infrastructure setup',
      'CI/CD pipeline implementation',
      'Automated deployments',
      'Scalability and reliability',
      'Cost optimization',
      'Security best practices',
    ],
    price: 3200,
    image: 'https://via.placeholder.com/400x250/ff9800/ffffff?text=DevOps',
    icon: 'fas fa-cloud',
  },
  {
    id: 'website-maintenance-support',
    title: 'Ongoing Maintenance',
    description: 'Ensuring your website remains secure, up-to-date, and performs optimally with continuous support.',
    fullDescription: 'Our comprehensive Ongoing Maintenance service ensures your website remains secure, up-to-date, and performs optimally with continuous support. We provide regular software updates, vigilant security monitoring, prompt bug fixes, and thorough performance checks to keep your digital asset healthy and thriving. You can focus on your core business while we expertly handle all the technical upkeep.',
    features: [
      'Regular software updates',
      'Security monitoring & patches',
      'Bug fixing & troubleshooting',
      'Performance checks',
      'Backup and recovery',
      '24/7 technical support',
    ],
    price: 800,
    image: 'https://via.placeholder.com/400x250/9c27b0/ffffff?text=Maintenance',
    icon: 'fas fa-tools',
  },
  {
    id: 'seo-digital-strategy',
    title: 'SEO & Digital Strategy',
    description: 'Boosting your online visibility and driving organic traffic with effective search engine optimization.',
    fullDescription: 'Our SEO & Digital Strategy service is designed to boost your online visibility and drive organic traffic through effective search engine optimization. We implement proven SEO strategies, from in-depth keyword research to meticulous technical optimization, ensuring your website ranks higher in search results. Our comprehensive digital strategy services help you connect meaningfully with your target audience and achieve your overarching online marketing goals.',
    features: [
      'Keyword research & analysis',
      'On-page SEO optimization',
      'Technical SEO audit',
      'Content strategy guidance',
      'Link building strategies',
      'Performance tracking & reporting',
    ],
    price: 1500,
    image: 'https://via.placeholder.com/400x250/795548/ffffff?text=SEO',
    icon: 'fas fa-chart-line',
  },
  {
    id: 'ui-ux-design',
    title: 'Intuitive UI/UX Design',
    description: 'Crafting user-centric designs that are not only beautiful but also highly intuitive and accessible.',
    fullDescription: 'Our Intuitive UI/UX Design service focuses on crafting user-centric designs that are not only visually beautiful but also highly intuitive and accessible. Our meticulous UI/UX process involves extensive research, detailed wireframing, interactive prototyping, and rigorous user testing. This comprehensive approach ensures we create interfaces that provide seamless and enjoyable interactions, making your digital product a true delight for every visitor.',
    features: [
      'User research & analysis',
      'Wireframing & prototyping',
      'Interactive design',
      'Usability testing',
      'Accessibility compliance',
      'Visual design & branding',
    ],
    price: 1700,
    image: 'https://via.placeholder.com/400x250/607d8b/ffffff?text=UI/UX',
    icon: 'fas fa-palette',
  },
];

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const handleViewDetails = (service) => {
    setSelectedService(service);
  };

  const handleBackToServices = () => {
    setSelectedService(null);
  };

  const handleGetThisService = (service) => {
    navigate(`/place-order/${service.id}`, { state: service });
  };

  return (
    <div className="services-page">
      <section className="hero-section section-padding">
        <div className="container hero-content">
          <h1 className="hero-title">
            Comprehensive Web Development Solutions
          </h1>
          <p className="hero-subtitle">
            We are your trusted partner in building powerful, scalable, and user-friendly web experiences.
            From concept to deployment, we deliver excellence at every stage.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>
        </div >
      </section >

      {!selectedService ? (
        <section className="section-padding light-background">
          <div className="container">
            <h1 className="section-title text-center">Our Web Development Services</h1>
            <p className="section-subtitle text-center">
              As a dedicated team of web development experts, we offer a comprehensive suite of services
              designed to bring your digital vision to life and drive your business forward.
            </p>
            <div className="services-grid">
              {servicesData.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon"><i className={service.icon}></i></div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-price">${service.price}</div>
                  <button
                    className="btn-primary"
                    onClick={() => handleViewDetails(service)}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="single-service-detail section-padding light-background">
          <div className="container">
            <h1 className="service-detail-title text-center">{selectedService.title}</h1>
            <img src={selectedService.image} alt={selectedService.title} className="service-detail-image" />

            <div className="service-detail-content">
              <p className="service-detail-description">{selectedService.fullDescription}</p>

              <h2 className="service-features-title">Key Features:</h2>
              <ul className="service-features-list">
                {selectedService.features.map((feature, index) => (
                  <li key={index}><i className="fas fa-check-circle"></i> {feature}</li>
                ))}
              </ul>

              <div className="service-detail-price">
                Starting from: <span>${selectedService.price}</span>
              </div>

              <button
                className="btn-primary service-get-button"
                onClick={() => handleGetThisService(selectedService)}
              >
                Get This Service
              </button>
              <button
                className="btn-secondary back-to-services"
                onClick={handleBackToServices}
              >
                Back to Services
              </button>
            </div>
          </div>
        </section>
      )}
    </div >
  );
};

export default Services;
