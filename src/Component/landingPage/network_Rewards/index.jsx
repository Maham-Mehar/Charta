import { Fragment, useState } from "react";
import { nReward } from "../../../Data/networkReward";
import "../../../globalStyles/globalStyle.css";
import Image4 from "../../../assets/Images/Image4.png";

const NetworkReward = () => {
    const [data] = useState(nReward);

    return (
        <Fragment>
            <div style={{ position: "relative", backgroundColor: "#fff", overflow: "hidden" }}>
                <div className="container">
                    <div className="row mt-5">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={
                                    item.id === 1
                                        ? "col-12 text-center mb-5"
                                        : "col-sm-6 col-md-6 col-lg-4 mx-auto d-flex align-items-center"
                                }
                            >
                                {item.id === 1 ? (
                                    <>
                                        <button className="bg-dark text-white rounded fs-6 fw-bold px-4 py-2 mb-4">
                                            Network Benefits
                                        </button>
                                        <p className="px-2 fs-1 fw-bold text-uppercase mb-2 lh-sm">
                                            {item.firstHeading}
                                        </p>
                                        <p
                                            className="fs-6 fw-medium text-center text-muted mt-3 mx-auto"
                                            style={{ maxWidth: "670px" }}
                                        >
                                            {item.firstText}
                                        </p>
                                    </>
                                ) : (
                                    <div className="mx-auto mt-3 text-center">
                                        <img src={item.Image} alt="" />
                                        <p className="fs-5 fw-bold mt-2 mb-0">{item.cardHeading}</p>
                                        <p
                                            className="fs-6 fw-medium text-muted mt-1 mx-auto"
                                            style={{ maxWidth: "300px" }}
                                        >
                                            {item.cardText}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5 mb-5">
                        <button
                            className="fs-6 fw-bolder text-uppercase text-white px-4 py-3 border-0 btn1 rounded-pill"
                            style={{
                                background: "linear-gradient(to right, rgba(84, 120, 183, 1), rgba(37, 53, 81, 1))"
                            }}
                        >
                            Join network now
                        </button>
                    </div>
                </div>

                {/* Image at bottom-left */}
                <img
                    src={Image4}
                    alt=""
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        zIndex: 0
                    }}
                />
            </div>
        </Fragment>
    );
};

export default NetworkReward;
