import Editor from "@/app/ui/editor/Editor";
import { sql } from "@vercel/postgres";

async function Edit({ params: { id } }) {
    const data = await sql`SELECT * FROM articles WHERE id = ${id}`;
    const { content, title, id: articleId } = data?.rows?.[0] || {};

    return (
        <Editor
            content={content}
            title={title}
            articleId={articleId}
            btnText="更新文章"
        />
    );
}

export default Edit;
