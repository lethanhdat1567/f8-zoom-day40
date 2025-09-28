import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx("wrap")}>
            <Header />
            <div className={cx("content")}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
