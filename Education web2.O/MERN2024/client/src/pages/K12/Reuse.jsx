import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";

const Reusecode = () => {
  const sections = [
    {
      title: "Inquiry-Based Learning",
      description: [
        "In this approach, we frame the lessons so the students can explore scientific concepts and theories through hands-on experimentation and investigation.",
        "Our content and resources help educational institutions develop curricula that will engage students and foster their critical thinking, problem-solving skills, and creativity by adding real-world scenarios and providing an interactive and collaborative environment.",
      ],
      imageSrc: "/images/boxes/inquery.jpg",
      altText: "Inquiry-based learning",
    },
    {
      title: "Project-Based Learning",
      description: [
        "With our Project-Based Learning, we help educational institutions by developing content modules and resources where students can apply STEM concepts in solving real-world problems.",
        "Project-based learning helps students develop the critical thinking and problem-solving skills necessary to solve real-life problems. Students can think out of the box and develop innovative ideas and solutions.",
      ],
      imageSrc: "/images/boxes/project.jpg",
      altText: "Project-based learning",
    },
    // Add more sections as needed
  ];

  return (
    <>
      {sections.map((section, index) => (
        <div className="container-fluid" key={index}>
          <Container className="py-5">
            <Row>
              {index % 2 === 0 ? (
                <>
                  <Col md={4}>
                    <div className="banner-dynamic-img23 rounded-3 shadow">
                      <img
                        className="rounded-3 shadow"
                        src={section.imageSrc}
                        alt={section.altText}
                      />
                    </div>
                  </Col>
                  <Col
                    md={8}
                    className="p-5 d-flex flex-column align-content-center justify-content-center"
                  >
                    <h4>{section.title}</h4>
                    {section.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </Col>
                </>
              ) : (
                <>
                  <Col
                    md={8}
                    className="p-5 d-flex flex-column align-content-center justify-content-center"
                  >
                    <h4>{section.title}</h4>
                    {section.description.map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </Col>
                  <Col md={4}>
                    <div className="banner-dynamic-img23 rounded-3 shadow">
                      <img
                        className="rounded-3 shadow"
                        src={section.imageSrc}
                        alt={section.altText}
                      />
                    </div>
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        </div>
      ))}
    </>
  );
};

export default Reusecode;
