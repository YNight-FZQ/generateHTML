async function Edit({ params: { id } }) {
    const {
        content,
        id: articleId,
        title,
    } = await fetch(`http://localhost:3000/api/article/${id}`)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => ({}));

    return (
        <>
            <h1>我是预览页面 ---- {title}</h1>
            {/* <div>{data}</div> */}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    );
}

export default Edit;
