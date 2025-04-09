import {Routes, Route } from "react-router";
import HomeContent from "../Pages/Home";
import { Fragment } from "react";

const Navroutes = () => {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<HomeContent />} />
            </Routes>
        </Fragment>
    )
}
export default Navroutes