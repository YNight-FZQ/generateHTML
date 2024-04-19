import Link from "next/link";
import styles from "./styles.module.css";
import { sql } from "@vercel/postgres";

async function Edit({ params: { id } }) {
    const data = await sql`SELECT * FROM articles WHERE id = ${id}`;
    const { content, title } = data?.rows?.[0] || {};

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
