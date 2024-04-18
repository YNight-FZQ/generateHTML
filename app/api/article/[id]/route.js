import { NextResponse } from "next/server";
import { formatTimestamp } from '@/lib'
import { sql } from '@vercel/postgres';

export async function PUT(request) {
    const { content, id } = await request.json()
    const update = formatTimestamp(Date.now())
    const obj = await sql`SELECT * FROM articles WHERE id = ${id};`

    await sql`UPDATE articles
    SET content = ${content}, update_date = ${update}
    WHERE id = ${id};`

    console.log('PUT request:', id);
    return NextResponse.json({ code: 200, data: { ...obj, content, update }, msg: 'success' })
}

export async function GET(request, { params: { id } }) {
    const obj = await sql`SELECT * FROM articles WHERE id = ${id};`
    console.log('GET request:', id);
    return NextResponse.json({ code: 200, data: obj.rows[0], msg: 'success' })
}

export async function DELETE(request, { params: { id } }) {
    const objToDelete = await sql`SELECT * FROM articles WHERE id = ${id};`
    if (!objToDelete.rowCount) {
        return NextResponse.json({ code: 404, msg: 'Article not found' }, { status: 500 });
    }
    if (objToDelete.rows[0].not_delete) {
        return NextResponse.json({ code: 404, msg: 'Article can not delete' }, { status: 500 });
    }
    await sql`DELETE FROM articles WHERE id = ${id};`
    console.log('DELETE request:', id);
    return NextResponse.json({ code: 200, data: objToDelete.rows, msg: 'Article deleted successfully' });
}

