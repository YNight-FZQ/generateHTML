import Link from "next/link";
import styles from "./styles.module.css";

async function Edit({ params: { id } }) {
    const { content, title } = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}`
    )
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => ({}));

    return (
        <div className={styles.wrap}>
            <h1>我是预览页面 ---- {title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <Link href="/">
                <div data-title="回到首页" />
            </Link>
        </div>
    );
}

export default Edit;
