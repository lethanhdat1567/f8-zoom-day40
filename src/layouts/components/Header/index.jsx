import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useNavigate } from "react-router";

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    return (
        <header className={cx("header")}>
            <h1 className={cx("title")} onClick={() => navigate("/")}>
                DatLee Website
            </h1>
            <nav className={cx("nav")}>
                <a
                    href="https://lethanhdat1567.github.io/f8-zoom-day40/redux.html"
                    className={cx("nav-item")}
                    target="_blank"
                >
                    Redux
                </a>
                <Link to={"/"} className={cx("nav-item")}>
                    Redux React
                </Link>
            </nav>
        </header>
    );
}

export default Header;
