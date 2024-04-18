import fs from 'fs'
import path from 'path';
import { NextResponse } from "next/server";
import { formatTimestamp, generateRandomId } from '@/lib';

export function GET() {
    const datas = JSON.parse(fs.readFileSync(path.join(process.cwd(), './app/api/article/data.json'), 'utf-8'))
    return NextResponse.json({ code: 200, data: datas, msg: 'success' })
}
export async function POST(request) {
    const { content, title } = await request.json()
    const create = formatTimestamp(Date.now())
    const id = generateRandomId()
    const auth = 'admin'
    const datas = JSON.parse(fs.readFileSync(path.join(process.cwd(), './app/api/article/data.json'), 'utf-8'))
    datas.push({ content, title, id, auth, create })
    fs.writeFileSync(path.join(process.cwd(), './app/api/article/data.json'), JSON.stringify(datas))
    return NextResponse.json({ code: 200, data: { content, title, id, auth, create }, msg: 'success' })
}