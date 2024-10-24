import React, { Fragment, useState } from "react";
import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import styles from './TestimonialSection.module.css';

const testimonialList = [
	{
		author: {
			fullName: "Loshan Parajuli",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
			designation: "Content Creator at whylosh",
		},
		rating: 5,
		description:
			"Suraj always brings a level of professionalism and expertise that is truly impressive.He knows his core and readily mentors our incubee as well, such a sweet guy.",
	},
	{
		author: {
			fullName: "Sudarshan Vai Subedi",
			picture:
				"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_15.png",
			designation: "IDS Media Network",
		},
		rating: 5,
		description:
			"Thank You for bringing our ideas to Life! Your hardwork and creativity has been a vital part for our channel. Anyone looking for creative designing and editing can contact him.",
	},
	
];

const Rating = ({ rating, showLabel, className, ...rest }) => (
  <p className={`mb-4 ${styles.rating} ${className || ''}`} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = "";
        if (index <= Math.floor(rating))
          content = <FontAwesomeIcon icon={faStar} className="me-1 active" />;
        else if (rating > i && rating < index + 1)
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="me-1 active" />;
        else if (index > rating)
          content = <FontAwesomeIcon icon={faStar} className="me-1" />;

        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span>{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItemMedia = ({ testimonial }) => (
  <img
    src={testimonial.author.picture}
    alt={testimonial.author.fullName}
    className="img-fluid"
  />
);

TestimonialItemMedia.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const TestimonialItemContent = ({ testimonial }) => (
  <Fragment>
    <Rating rating={testimonial.rating} showLabel={false} />
    <h4 className="mb-1">{testimonial.author.fullName}</h4>
    <p className="mb-4">{testimonial.author.designation}</p>
    <p className="opacity-75 mb-0">{testimonial.description}</p>
  </Fragment>
);

TestimonialItemContent.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const TestimonialList = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleControl = (type) => {
    if (type === "prev") {
      setIndex(index <= 0 ? testimonials.length - 1 : index - 1);
    } else {
      setIndex(index >= testimonials.length - 1 ? 0 : index + 1);
    }
  };

  return (
    <Row className="justify-content-center">
      <Col lg={10}>
        <Row className="align-items-center justify-content-between mt-5">
          <Col md={5} className="text-center order-lg-2">
            <div className={styles.imgShape}>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
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
          </Col>
          <Col md={6} className={`${styles.content} text-center text-md-start mt-4 mt-md-0`}>
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              controls={false}
              indicators={false}
            >
              {testimonials.map((testimonial, i) => (
                <Carousel.Item key={i}>
                  <TestimonialItemContent testimonial={testimonial} />
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="mt-5">
              <Button
                variant=""
                onClick={() => handleControl("prev")}
                className={styles.controlPrev}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Button
                variant=""
                onClick={() => handleControl("next")}
                className={styles.controlNext}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const TestimonialSection = () => {
  return (
    <section className={`${styles.testimonial} ${styles.light}`}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} xl={5} className="text-center mb-md-5">
            <h2 className={`${styles.heading} mb-3`}>
              Client Testimonials
            </h2>
            <p className={`${styles.subHeading} mb-0`}>
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