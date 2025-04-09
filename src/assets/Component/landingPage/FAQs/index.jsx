import { Fragment, useState } from "react";
import { VscChevronUp} from "react-icons/vsc"; 
import { FAQS_Data } from "../../../Data/FAQS_Data";

const FAQS = () => {
    const [data] = useState(FAQS_Data);
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <Fragment>
            <div className="py-5 px-2" style={{ backgroundColor: "#F5F5F5" }}>
                <div className="container">
                    <div className="row my-5">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item.id === 1
                                        ? "col-12 text-center mb-5"
                                        : "col-sm-12 col-md-12 col-lg-6 mx-auto d-flex align-items-start mb-4"
                                }
                            >
                                {item.id === 1 ? (
                                    <>
                                        <p className="px-2 fs-1 fw-bold text-uppercase mb-2 lh-sm">
                                            {item.firstHeading}
                                        </p>
                                        <p
                                            className="fw-medium fs-5 text-center text-muted mt-3 mx-auto"
                                            style={{ maxWidth: "670px" }}
                                        >
                                            {item.firstText}
                                        </p>
                                    </>
                                ) : (
                                    <div className="w-100 bg-light p-4 rounded shadow-sm">
                                        <p
                                            className="fs-5 fw-semibold mt-2 mb-0 der"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => toggleAccordion(index)}
                                        >
                                     <span className="rounded-circle border border-2 border-dark me-4"
                                                style={{
                                                    transform: activeIndex === index ? "rotate(0deg)" : "rotate(180deg)",
                                                    transition: "transform 0.3s ease",padding:"0px 1px",
                                                }}
                                            >
                                                <VscChevronUp />
                                            </span>
                                            {item.cardHeading}
                                        </p>
                                        {activeIndex === index && (
                                            <p
                                                className="fs-5 fw-medium text-muted mt-3"
                                                style={{ maxWidth: "500px" }}
                                            >
                                                {item.cardText}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default FAQS;
