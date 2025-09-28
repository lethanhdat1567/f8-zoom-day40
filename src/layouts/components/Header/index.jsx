import classNames from "classnames/bind";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx("header")}>
            <h1 className={cx("title")}>DatLee Website</h1>
            <nav className={cx("nav")}>
                <a href="#home" className={cx("nav-item")}>
                    Home
                </a>
                <a href="#about" className={cx("nav-item")}>
                    About
                </a>
                <a href="#services" className={cx("nav-item")}>
                    Services
                </a>
                <a href="#contact" className={cx("nav-item")}>
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
