import { NextResponse } from "next/server";
import { formatTimestamp, generateRandomId } from '@/lib';
import { sql } from "@vercel/postgres";

export async function GET() {
    const articles = await sql`SELECT * FROM articles;`;
    console.log('GET request ALL');
    return NextResponse.json({ code: 200, data: articles.rows, msg: 'success' }, { status: 200 })
}

export async function POST(request) {
    const { content, title } = await request.json()
    const create = formatTimestamp(Date.now())
    const id = generateRandomId()
    const auth = 'admin'
    await sql`
    INSERT INTO articles (id, title, auth, content, create_date, update_date, not_delete)
    VALUES (${id}, ${title}, ${auth}, ${content}, ${create}, '', ${false})
    `
    console.log('POST request');
    return NextResponse.json({ code: 200, data: { content, title, id, auth, create }, msg: 'success' })
}
