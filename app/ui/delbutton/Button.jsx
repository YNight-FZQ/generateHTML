"use client";

export default function Button({ id }) {
    const delArticle = () => {
        const userConfirm = confirm("你确定要删除这个文章吗");
        if (userConfirm) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res);
                    alert("删除成功");
                    location.reload();
                })
                .catch((err) => {
                    console.log(err);
                    alert("删除失败");
                });
        }
    };
    return (
        <div
            onClick={delArticle}
            style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#0000e4",
            }}
        >
            删除
        </div>
    );
}
