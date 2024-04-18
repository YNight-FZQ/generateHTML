import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

const jsonData = [
    {
        "id": "uJasMkdGMTGwzG6o",
        "title": "Full featured demo: Non-Premium Plugins only",
        "auth": "admin",
        "content": "<p><img style=\"display: block; margin-left: auto; margin-right: auto;\" title=\"Tiny Logo\" src=\"https://www.tiny.cloud/docs/images/logos/android-chrome-256x256.png\" alt=\"TinyMCE Logo\" width=\"128\" height=\"128\"></p>\n<h2 style=\"text-align: center;\">Welcome to the TinyMCE Cloud demo!</h2>\n<p>Please try out the features provided in this full featured example (excluding <a href=\"https://www.tiny.cloud/tinymce/features/\">Premium Plugins</a> ).</p>\n<h2>Got questions or need help?</h2>\n<ul>\n<li>Our <a class=\"mceNonEditable\" href=\"https://www.tiny.cloud/docs/tinymce/6/\">documentation</a> is a great resource for learning how to configure TinyMCE.</li>\n<li>Have a specific question? Try the <a href=\"https://stackoverflow.com/questions/tagged/tinymce\" target=\"_blank\" rel=\"noopener\"><code>tinymce</code> tag at Stack Overflow</a>.</li>\n<li>We also offer enterprise grade support as part of <a href=\"https://www.tiny.cloud/pricing\">TinyMCE premium plans</a>.</li>\n</ul>\n<h2>A simple table to play with</h2>\n<table style=\"border-collapse: collapse; width: 100%;\" border=\"1\">\n<thead>\n<tr>\n<th>Product</th>\n<th>Cost</th>\n<th>Really?</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>TinyMCE Cloud</td>\n<td>Get started for free</td>\n<td>YES!</td>\n</tr>\n<tr>\n<td>Plupload</td>\n<td>Free</td>\n<td>YES!</td>\n</tr>\n</tbody>\n</table>\n<h2>Found a bug?</h2>\n<p>If you think you have found a bug please create an issue on the <a href=\"https://github.com/tinymce/tinymce/issues\">GitHub repo</a> to report it to the developers.</p>\n<h2>Finally ...</h2>\n<p>Don't forget to check out our other product <a href=\"http://www.plupload.com\" target=\"_blank\" rel=\"noopener\">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.</p>\n<p>Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.</p>\n<p>fangzuquan</p>\n<p>&nbsp;</p>\n<p>fangzquan</p>",
        "create": "2024-04-16 09:07:49",
        "update": "2024-04-18 09:03:14",
        "notDelete": true
    },
    {
        "content": "<p>这样看来, 随机一段废话, 发生了会如何, 不发生又会如何. 我认为, 我认为, 问题的关键究竟为何? 问题的关键究竟为何?&nbsp;<br>这是不可避免的. 一般来说, 带着这些问题, 我们来审视一下随机一段废话. 现在, 解决随机一段废话的问题, 是非常非常重要的. 所以, 随机一段废话, 发生了会如何, 不发生又会如何. 随机一段废话因何而发生?随机一段废话的发生, 到底需要如何做到, 不x的发生, 又</p>\n<p>这样看来, 随机一段废话, 发生了会如何, 不发生又会如何. 我认为, 我认为, 问题的关键究竟为何? 问题的关键究竟为何?&nbsp;<br>这是不可避免的. 一般来说, 带着这些问题, 我们来审视一下随机一段废话. 现在, 解决随机一段废话的问题, 是非常非常重要的. 所以, 随机一段废话, 发生了会如何, 不发生又会如何. 随机一段废话因何而发生?随机一段废话的发生, 到底需要如何做到, 不x的发生, 又</p>\n<p>这样看来, 随机一段废话, 发生了会如何, 不发生又会如何. 我认为, 我认为, 问题的关键究竟为何? 问题的关键究竟为何?&nbsp;<br>这是不可避免的. 一般来说, 带着这些问题, 我们来审视一下随机一段废话. 现在, 解决随机一段废话的问题, 是非常非常重要的. 所以, 随机一段废话, 发生了会如何, 不发生又会如何. 随机一段废话因何而发生?随机一段废话的发生, 到底需要如何做到, 不x的发生, 又</p>\n<p>这样看来, 随机一段废话, 发生了会如何, 不发生又会如何. 我认为, 我认为, 问题的关键究竟为何? 问题的关键究竟为何?&nbsp;<br>这是不可避免的. 一般来说, 带着这些问题, 我们来审视一下随机一段废话. 现在, 解决随机一段废话的问题, 是非常非常重要的. 所以, 随机一段废话, 发生了会如何, 不发生又会如何. 随机一段废话因何而发生?随机一段废话的发生, 到底需要如何做到, 不x的发生, 又</p>\n<p>这样看来, 随机一段废话, 发生了会如何, 不发生又会如何. 我认为, 我认为, 问题的关键究竟为何? 问题的关键究竟为何?&nbsp;<br>这是不可避免的. 一般来说, 带着这些问题, 我们来审视一下随机一段废话. 现在, 解决随机一段废话的问题, 是非常非常重要的. 所以, 随机一段废话, 发生了会如何, 不发生又会如何. 随机一段废话因何而发生?随机一段废话的发生, 到底需要如何做到, 不x的发生, 又</p>\n<p>&nbsp;</p>",
        "title": "随机废话",
        "id": "8biUP35zdigerTjg",
        "auth": "admin",
        "create": "2024-04-17 21:56:18",
        "update": "2024-04-18 09:03:14",
        "notDelete": false
    }
];

export async function GET(request) {
    try {
        for (const data of jsonData) {
            const { id, title, auth, content, create, update, notDelete } = data;
            await sql`
            INSERT INTO articles (id, title, auth, content, create_date, update_date, not_delete)
            VALUES (${id}, ${title}, ${auth}, ${content}, ${create}, ${update}, ${notDelete})
            `
        }
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
    const pets = await sql`SELECT * FROM articles;`;
    return NextResponse.json({ pets }, { status: 200 });
}