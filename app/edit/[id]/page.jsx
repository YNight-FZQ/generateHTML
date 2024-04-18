import Editor from "@/app/ui/editor/Editor";

async function Edit({ params: { id } }) {
    const {
        content,
        id: articleId,
        title,
    } = await fetch(`http://localhost:3000/api/article/${id}`)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => ({}));
    return <Editor content={content} title={title} articleId={articleId} />;
}

export default Edit;
