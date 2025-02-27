import { useEffect } from "react";
import styles from "./NotificationBanner.module.css";

export default function NotificationBanner({ message, show, onClose }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000)
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div className={`${styles.banner} ${show ? styles.show : ""}`}>
            {message}
        </div>
    );
}