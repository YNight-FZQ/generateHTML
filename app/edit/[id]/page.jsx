import Editor from "@/app/ui/editor/Editor";

async function Edit({ params: { id } }) {
    const {
        content,
        id: articleId,
        title,
    } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}`)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => {
            console.log("error:", err);
            return {};
        });
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
