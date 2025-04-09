import Image6 from "../../../assets/Images/Image6.png";
import Image7 from "../../../assets/Images/Image7.png";
import Image8 from "../../../assets/Images/Image8.png";

const Charta_offers = () => {
    return (
        <div
            className="bg-dark position-relative py-5"
            style={{
                backgroundImage: `url(${Image8})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 position-relative ps-5">
                        <img
                            src={Image7}
                            alt=""
                            className="position-absolute"
                            style={{ top: "19%", left: "83%", transform: "translate(-50%, -50%)", width: "60px" }}
                        />
                        <p
                            className="fs-2 fw-semibold text-white"
                            style={{ maxWidth: "480px", zIndex: 2, position: "relative" }}
                        >
                            Whether you're seeking expertise, sharing knowledge, or connecting others, Charta offers a better way to exchange value.
                        </p>

                        {/* Button */}
                        <button
                            className="fs-6 fw-bold border-0 rounded-pill px-4 py-2 mt-3"
                            style={{ color: "#B88917", backgroundColor: "#ffffff" }}
                        >
                            Join The Moment
                        </button>
                    </div>

                    {/* Right Section: Phone Image */}
                    <div className="col-md-6 d-flex justify-content-end">
                        <img
                            src={Image6}
                            alt="Hand holding phone"
                            className="img-fluid"
                            style={{ maxHeight: "500px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charta_offers;
