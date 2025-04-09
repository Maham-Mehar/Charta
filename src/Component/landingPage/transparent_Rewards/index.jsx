import { useState } from "react";
import { t_Reward } from "../../../Data/TransparentReward_Data";
import { SiTicktick } from "react-icons/si";
import "../transparent_Rewards/index.css";
import "../../../globalStyles/globalStyle.css";
import Image2 from "../../../assets/Images/Image2.png";
import Image3 from "../../../assets/Images/Image3.png";

const Transparent_Reward = () => {
    const [data] = useState(Array.isArray(t_Reward) ? t_Reward : []);
    
    if (!data.length) return <div>No data available.</div>;
    
    const getItem = (id) => data.find(item => item.id === id);

    return (
        <div className="BG_2">
            <div className="container">
                <div className="row">
                    
                    {getItem(1) && (
                        <div className="col-12 Title_Content">
                            <img src={Image2} alt="" className="position-absolute end-0" />
                            <p className="firstText fs-6 mb-0 fw-semibold position-relative mt-5 pt-2">{getItem(1).firstText}</p>
                            <p className="firstHeading mb-2 lh-sm">{getItem(1).firstHeading}</p>
                            <p className="fs-5 mb-0 fw-medium lh-sm secondText mb-5">{getItem(1).secondText}</p>
                        </div>
                    )}

                    <div className="col-md-6 d-flex align-items-center">
                        {getItem(2) && (
                            <div className="p-3">
                                <p className="HeadingText text-white mt-4">{getItem(2).HeadingText}</p>
                                {getItem(2).bold.map((boldText, idx) => (
                                    <div key={idx} className="d-flex mt-1">
                                        <SiTicktick className="me-2 icon_Color mt-1" />
                                        <p className="fw-bold fs-6 text-white mb-3">
                                            {boldText} <span className="fw-normal fs-6 body_Text">{getItem(2).text[idx]}</span>
                                        </p>
                                    </div>
                                ))}
                                <button className="btn btn_Content px-4 py-2 rounded-pill text-white mt-3">{getItem(2).btntext}</button>
                            </div>
                        )}
                    </div>

                    <div className="col-md-6 text-center">
                        {getItem(3) && <img src={getItem(3).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>

                    <div className="col-md-6 text-center">
                        {getItem(7) && <img src={getItem(7).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>

                    <div className="col-md-6 d-flex align-items-center lh-md">
                        {getItem(4) && (
                            <div className="p-3">
                                <p className="HeadingText text-white mt-4">{getItem(4).HeadingText}</p>
                                {getItem(4).bold.map((boldText, idx) => (
                                    <div key={idx} className="d-flex mt-1">
                                        <SiTicktick className="icon_Color mt-1" />
                                        <p className="fw-bold ms-2 fs-6 text-white mb-3">
                                            {boldText} <span className="fw-normal fs-6 body_Text">{getItem(4).text[idx]}</span>
                                        </p>
                                    </div>
                                ))}
                                <button className="btn btn_Content px-4 py-2 rounded-pill text-white mt-3">{getItem(4).btntext}</button>
                            </div>
                        )}
                    </div>

                    <div className="col-md-6 position-relative d-flex align-items-center">
                        <div className="position-absolute" style={{ bottom: "0", left: "0", zIndex: "-1" }}>
                            <img src={Image3} alt="" className="w-100" />
                        </div>

                        {getItem(6) && (
                            <div className="p-3 position-relative">
                                <p className="HeadingText text-white mt-4">{getItem(6).HeadingText}</p>
                                {getItem(6).bold.map((boldText, idx) => (
                                    <div key={idx} className="d-flex mt-1">
                                        <SiTicktick className="me-2 icon_Color mt-1" />
                                        <p className="fw-bold fs-6 text-white mb-3">
                                            {boldText} <span className="fw-normal fs-6 body_Text">{getItem(6).text[idx]}</span>
                                        </p>
                                    </div>
                                ))}
                                <button className="btn btn_Content px-4 py-2 rounded-pill text-white mt-3">
                                    {getItem(6).btntext}
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="col-md-6 text-center">
                        {getItem(5) && <img src={getItem(5).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Transparent_Reward;
