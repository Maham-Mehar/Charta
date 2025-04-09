import Image6 from "../../../assets/Images/Image6.png";
import Image7 from "../../../assets/Images/Image7.png";
import Image8 from "../../../assets/Images/Image8.png";
import "./style.css";
const Charta_offers = () => {
    return (
        <div
            className="bg-dark custom-padding"
            style={{
                backgroundImage: `url(${Image8})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-xl-6 ">
                        <div className=" px-sm-3 px-xl-4 ms-xl-2">
                            <div className="d-flex align-items-start gap-0 gap-xl-2">
                                <p className="fs-2 fw-semibold text-white m-0">
                                    Whether you're seeking expertise, sharing knowledge, or connecting others, Charta offers a better way to exchange value.  </p>
                                <div className="">
                                    <img src={Image7} alt="" className=" d-none d-lg-block"/>
                                </div>
                            </div>
                            <button
                                className="fs-6 fw-bold border-0 rounded-pill px-4 py-2 mt-3"
                                style={{ color: "#B88917", backgroundColor: "#ffffff" }}
                            >
                                Join The Moment
                            </button>
                        </div>
                    </div>

                    <div className="col-xl-6 d-none d-xl-flex justify-content-end">
                        <img
                            src={Image6}
                            alt="Hand holding phone"
                            className=""
                            style={{ marginTop: "-100px", }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Charta_offers;
