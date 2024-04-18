"use client";

import dynamic from "next/dynamic";

// 使用 dynamic 异步加载 tinymce 富文本编辑器组件
const DynamicEditor = dynamic(() => import("@/app/ui/editor/Editor"), {
    ssr: false,
});

const AddPage = () => {
    const content = "";
    const setContent = (newContent) => {
        console.log(newContent);
    };
    
    return (
        <div>
            <DynamicEditor content={content} onChange={setContent} />
        </div>
    );
};

export default AddPage;
