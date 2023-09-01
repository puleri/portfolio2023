import React from 'react';
import './ServicesElevator.css'; // Make sure to import your CSS file

const ServicesElevator = () => {

    const services = [
        "Pixel Pushing",
        "Full-stack Engineering",
        "Cybersecurity",
        "QA Automation",
        "Front-end Engineering",
        "UI Engineering",
        "Hugo Programming",
        "Software Architecture",
        "React Development",
        "DevOps Engineering",
        "Technical Translation",
        "Software Consultation",
        "Demand Generation",
        "SEO Implementation"
      ];

  return (
    <div className="services-elevator">
      <div className="elevator-inner">
        {Array.from({ length: 48 }, (_, index) => (
          <div className="text-line" key={index}>
            {services[((index % 12) + 1)]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesElevator;
