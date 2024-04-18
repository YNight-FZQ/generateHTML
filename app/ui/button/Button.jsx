import styles from "./styles.module.css";

export default function Button({ btnText = "新增按钮", onClick, style }) {
    return (
        <div
            className={styles.submit}
            style={style}
            onClick={onClick}
            data-title={btnText}
        />
    );
}
