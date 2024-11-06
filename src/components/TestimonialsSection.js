import React, { useState } from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";

const testimonialList = [
  {
    author: {
      fullName: "Loshan Parajuli",
      picture: "/images/LoshanParajuli.png",
      designation: "Content Creator at whylosh",
    },
    description:
      "Suraj always brings a level of professionalism and expertise that is truly impressive. He knows his core and readily mentors our incubee as well, such a sweet guy.",
  },
  {
    author: {
      fullName: "Sudarshan Vai Subedi",
      picture: "/images/SudarshanVaiSubedi.jpg",
      designation: "IDS Media Network",
    },
    description:
      "Thank You for bringing our ideas to Life! Your hardwork and creativity has been a vital part for our channel. Anyone looking for creative designing and editing can contact him.",
  },
  {
    author: {
      fullName: "Suraj Poudel",
      picture: "/images/surajpoudel.png",
      designation: "Branding Professional and Consultant (Fintech Companies)",
    },
    description:
      "First and foremost, Suraj is a very talented video editor. He has a great knack of putting things together in a very creative and imaginative way. Apart from the immense skills that he has, he is also an extremely professional person to work with.",
  },
  {
    author: {
      fullName: "Sudip Bhai Subedi",
      picture: "/images/SudipBhaiSubedi.jpeg",
      designation: "IN-Depth Story",
    },
    description:
      "Suraj Poudel is an exceptional video editor with a strong grasp of visual storytelling. His technical skill and creative insight consistently elevate InDepthStory’s content. Professional, adaptable, and highly skilled, Suraj is invaluable to our team, making our messages clear and impactful. Highly recommended.",
  },
  {
    author: {
      fullName: "Yogesh Dhungana",
      picture: "/images/YogeshDhungana.jpeg",
      designation: "Researcher, New York University Abu Dhabi",
    },
    description:
      "Suraj is a very talented and helpful person. The most impressive thing I found in Suraj is his humility that extends beyond his professional boundaries to make a real sense of attachment with the client in such a way that he prioritize client-need utmost. His dedication to work with a clear sense of purpose is noteworthy. I would recommend anyone for his help and support in any areas of his expertise.",
  },
];
const TestimonialItemMedia = ({ testimonial }) => (
  
  <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-3xl group">
    <div className="absolute inset-0 bg-blue-500 transform transition-transform group-hover:scale-95"></div>
    <img
      src={testimonial.author.picture}
      alt={testimonial.author.fullName}
      className="absolute inset-0 object-cover w-full h-full transform -translate-x-0 -translate-y-0 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
    />
  </div>
);

TestimonialItemMedia.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const TestimonialItemContent = ({ testimonial }) => (
  <div className="text-center md:text-left">
    <h4 className="text-xl font-bold mb-2">{testimonial.author.fullName}</h4>
    <p className="text-gray-600 mb-4">{testimonial.author.designation}</p>
    <p className="text-gray-700">{testimonial.description}</p>
  </div>
);

TestimonialItemContent.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const TestimonialList = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonials.length - 1 : index - 1);
    } else {
      setIndex(index >= testimonials.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <Carousel
            activeIndex={index}
            onSelect={setIndex}
            controls={false}
            indicators={false}
          >
            {testimonials.map((testimonial, i) => (
              <Carousel.Item key={i}>
                <TestimonialItemMedia testimonial={testimonial} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="w-full md:w-1/2">
          <Carousel
            activeIndex={index}
            onSelect={setIndex}
            controls={false}
            indicators={false}
          >
            {testimonials.map((testimonial, i) => (
              <Carousel.Item key={i}>
                <TestimonialItemContent testimonial={testimonial} />
              </Carousel.Item>
            ))}
          </Carousel>

          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={() => handleControl("prev")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleControl("next")}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialList.propTypes = {
  testimonials: PropTypes.array.isRequired,
};

const TestimonialSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <Row className="justify-content-center mb-12">
          <Col lg={6} className="text-center">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600">
              Delivering unique, flawless designs and visuals with creativity and insight, elevating every project beyond expectations.
            </p>
          </Col>
        </Row>

        <TestimonialList testimonials={testimonialList} />
      </Container>
    </section>
  );
};

export default TestimonialSection;