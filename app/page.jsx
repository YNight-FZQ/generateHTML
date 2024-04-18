import React from "react";
import Link from "next/link";
import Button from "./ui/delbutton/Button";

const Home = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/article/`)
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((err) => []);

    return (
        <div className="wrap">
            <h1>
                文章列表
                <Link href="/add">
                    <div
                        style={{ fontSize: "16px", top: "50px" }}
                        className="special-btn"
                        data-title="新增文章"
                    />
                </Link>
            </h1>
            <table>
                <tbody>
                    <tr>
                        <th>文章标题</th>
                        <th>创建时间</th>
                        <th>文章作者</th>
                        <th>文章内容</th>
                        <th>操作</th>
                    </tr>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td width={90}>{item.title}</td>
                            <td width={80}>{item.create}</td>
                            <td width={60}>{item.auth}</td>
                            <td>
                                <div className="spec-div">{item.content}</div>
                            </td>
                            <td width={100}>
                                <div>
                                    <Link href={`/edit/${item.id}`}>编辑</Link>
                                    <Link href={`/preview/${item.id}`}>
                                        预览
                                    </Link>
                                    <Button id={item.id} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
