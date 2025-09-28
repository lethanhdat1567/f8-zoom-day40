import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx("footer")}>
            <p className={cx("text")}>
                &copy; 2025 My Website. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
