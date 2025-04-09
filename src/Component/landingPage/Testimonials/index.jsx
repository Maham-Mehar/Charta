import Image9 from "../../../assets/Images/Image9.png";
import Image10 from "../../../assets/Images/Image10.png";
import Testimonial from "../../../assets/Images/Testimonial.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "../Testimonials/testStyle.css";
import { Fragment, useState, useEffect } from "react";

const testimonials = [
    {
        quote: "Networking made simple!",
        description: "As an agent, I’ve built a strong network and earned commissions effortlessly. Charta’s system makes it easy to connect experts with the right clients.",
        name: "Alex R.",
        role: "Business Connector"
    },
    {
        quote: "Amazing experience!",
        description: "As a freelance consultant, I’ve expanded my client base and managed projects with ease. Charta’s platform ensures a smooth and professional experience from start to finish.",
        name: "Taylor S.",
        role: "Freelance Consultant"
    },
    {
        quote: "Reliable & efficient!",
        description: "Charta has helped me build lasting relationships and grow my business. The system is intuitive, effective, and ideal for anyone serious about networking and success.",

        name: "Jordan K.",
        role: "Independent Marketer"
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);
    const nextTestimonial = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Fragment>
            <div className="main_Body my-5 mx-lg-auto" >
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <button className="bg-dark text-white rounded fs-6 fw-bold px-4 py-2">Testinomials</button>
                </div>

                <div className="position-relative">
                    <img
                        src={Testimonial}
                        alt="Testimonial Illustration"
                        className=" image_Content"
                    />
                    <button
                        onClick={nextTestimonial}
                        className="slider_Button d-none d-xl-block"
                    >
                        Next  <span className="ms-4"><MdOutlineKeyboardArrowRight size={20} /></span>
                    </button>

                    <div className="container"></div>
                    <div className="row r1">
                        <div className="Card_Body mb-3 pt-5 mx-auto">
                            <div className="text_Content">
                                <p className="fs-3 fw-bold">{testimonials[current].quote}</p>
                                <p className="mb-0 fs-3 fw-medium">{testimonials[current].description}</p>
                                <div className="d-flex justify-content-between">
                                    <div className="mt-5 pt-5">
                                        <p className="fs-3 fw-medium mb-0">{testimonials[current].name}</p>
                                        <p className="fs-6 fw-normal text-muted">{testimonials[current].role}</p>
                                    </div>
                                    <div className="d-flex flex-column mt-1">
                                        <img src={Image10} alt="Quote" className="mb-1" />
                                        <img src={Image9} alt="Avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Testimonials;
