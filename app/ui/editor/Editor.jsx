"use client";

import React, { useCallback, useMemo, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Button from "../button/Button";
import styles from "./styles.module.css";

export default function EditorComponent({
    btnText,
    actionType,
    title,
    content,
    articleId,
}) {
    const editorRef = useRef(null);
    const log = useCallback(() => {
        if (editorRef.current) {
            const newContent = editorRef.current.editor.getContent();
            const url = articleId
                ? `http://localhost:3000/api/article/${articleId}`
                : "http://localhost:3000/api/article";

            const newTitle = title ? title : prompt("请输入文章标题");

            fetch(url, {
                method: articleId ? "PUT" : "POST",
                body: JSON.stringify({
                    content: newContent,
                    title: newTitle,
                    id: articleId,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    alert("提交成功");
                })
                .catch((err) => {
                    alert("提交失败，请重试");
                });
        }
    }, []);
    const back = useCallback(() => {
        history.back();
    }, []);

    const initObject = useMemo(
        () => ({
            language: "zh_CN",
            height: "100vh",
            promotion: false,
            branding: false,
            license_key: "gpl",
            plugins:
                "preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion",
            menubar: "file edit view insert format table help",
            menu: {
                view: {
                    title: "View",
                    items: "code | visualblocks preview fullscreen",
                },
                insert: {
                    title: "Insert",
                    items: "image link media codesample inserttable | charmap emoticons hr insertdatetime",
                },
                tools: {
                    title: "Tools",
                    items: "spellchecker spellcheckerlanguage | a11ycheck wordcount",
                },
            },
            toolbar:
                "undo redo | blocks fontfamily fontsize forecolor backcolor | bold italic underline strikethrough | align numlist bullist | link image media table | lineheight outdent indent| code removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
            autosave_ask_before_unload: true, // 离开前提示用户保存
            autosave_interval: "30s",
            autosave_prefix: "{path}{query}-{id}-",
            autosave_restore_when_empty: true, // 初始化为空时从本地存储读取
            autosave_retention: "2m",
            image_advtab: true,
            image_caption: true,
            quickbars_selection_toolbar:
                "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
            toolbar_mode: "sliding",
            contextmenu: "link image table",
        }),
        []
    );

    return (
        <div className={styles.wrap}>
            <Editor
                ref={editorRef}
                tinymceScriptSrc="/tinymce/tinymce.min.js"
                initialValue={content}
                init={initObject}
            />
            <Button
                style={{ marginRight: "90px" }}
                onClick={log}
                btnText={btnText}
            />
            <Button onClick={back} btnText="返回" />
        </div>
    );
}
