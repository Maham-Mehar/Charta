import { Fragment } from "react"
import { TfiEmail } from "react-icons/tfi";
import "../../../globalStyles/globalStyle.css";
const Charta_Update =()=>{
    return(
 <Fragment>
    <div className="container mt-5">
<div className="rounded text-center py-5 px-3" style={{marginTop: "100px", marginBottom:"100px", boxShadow: "0 10px 15px rgba(0, 0, 0, 0.10)",}}>
            <p className="fw-bold text-uppercase mb-0" style={{ fontSize: "60px", color:"#253551", }}>Stay Updated</p>
            <p className="fs-6 fw-medium text-muted">Subscribe to our newsletter for the latest updates.</p>

            <div className="input-group mx-auto mt-4 border border-2 border-dark rounded-pill w-100 p-2" style={{ maxWidth: "500px" }}>
                <span className="input-group-text bg-white text-mute border-0">
                    <TfiEmail />
                </span>
                <input
                    type="email"
                    placeholder="Your email"
                    className="form-control border-0 p-0 shadow-none text-mute"
                />
                <button className="btn rounded-pill fs-6 bg-dark text-white fw-semibold px-4 py-2">Subscribe</button>
            </div>
        </div>
        </div>

</Fragment>
  )
} 
export default Charta_Update