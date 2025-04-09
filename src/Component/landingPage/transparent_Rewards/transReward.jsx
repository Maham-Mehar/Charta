import { useState } from "react";
import { t_Reward } from "../../../Data/TransparentReward_Data";
import { SiTicktick } from "react-icons/si";
import "../transparent_Rewards/transStyle.css";
import "../../../globalStyles/globalStyle.css";
import Image2 from "../../../assets/Images/Image2.png";
import Image3 from "../../../assets/Images/Image3.png";

const Transparent_Reward = () => {
    const [data] = useState(Array.isArray(t_Reward) ? t_Reward : []);
    const getItem = (id) => data.find(item => item.id === id);

    if (!data.length) return <div>No data available.</div>;

    const RenderContent = ({ itemId }) => {
        const item = getItem(itemId);
        if (!item) return null;
        return (
            <div className="p-3">
                <p className="HeadingText text-white mt-4">{item.HeadingText}</p>
                {item.bold.map((boldText, idx) => (
                    <div key={idx} className="d-flex mt-1 card_body">
                        <div className="me-2" style={{ width: "20px" }}>
                            <SiTicktick className="icon_Color" size={18} />
                        </div>
                        <p className="fw-bold fs-6 text-white mb-3">
                            {boldText} <span className="fw-normal fs-6 body_Text">{item.text[idx]}</span>
                        </p>
                    </div>
                ))}
                <button className="btn btn_Content px-4 py-2 rounded-pill text-white mt-3">{item.btntext}</button>
            </div>
        );
    };

    return (
        <div className="BG_2">
            <div className="container">
                <div className="row">

                    {getItem(1) && (
                        <div className="px-4 col-12 Title_Content">
                            <img src={Image2} alt="" className="position-absolute end-0" />
                            <p className="firstText fs-6 mb-0 fw-semibold position-relative mt-5 pt-2">{getItem(1).firstText}</p>
                            <p className="firstHeading mb-2 lh-sm">{getItem(1).firstHeading}</p>
                            <p className="fs-5 mb-0 fw-medium lh-sm secondText mb-5">{getItem(1).secondText}</p>
                        </div>
                    )}

                    <div className="col-12 col-xl-6 d-flex align-items-center">
                        <RenderContent itemId={2} />
                    </div>

                    <div className="col-12 col-xl-6 text-center">
                        {getItem(3) && <img src={getItem(3).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>

                    <div className="col-12 col-xl-6 text-center">
                        {getItem(7) && <img src={getItem(7).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>

                    <div className="col-12 col-xl-6 d-flex align-items-center lh-md">
                        <RenderContent itemId={4} />
                    </div>

                    <div className="col-12 col-xl-6 position-relative d-flex align-items-center">
                        <div className="position-absolute" style={{ bottom: 0, left: 0, zIndex: -1 }}>
                            <img src={Image3} alt="" className="w-100" />
                        </div>
                        <div className="p-3 position-relative">
                            <RenderContent itemId={6} />
                        </div>
                    </div>

                    <div className="col-12 col-xl-6 text-center">
                        {getItem(5) && <img src={getItem(5).Image} alt="Reward" className="img-fluid w-100" />}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Transparent_Reward;
