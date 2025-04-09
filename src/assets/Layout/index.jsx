import Navbar from "../Common/Navbar";
const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};
export default Layout;
