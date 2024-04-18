// import datas from '../data.json'
// 'use server';

import fs from 'fs'
import path from 'path';
import { NextResponse } from "next/server";
import { formatTimestamp } from '@/lib'


export async function PUT(request) {
    const datas = JSON.parse(fs.readFileSync(path.join(process.cwd(), './public/data.json'), 'utf-8'))
    const { content, id } = await request.json()
    const update = formatTimestamp(Date.now())
    const orginIndex = datas.findIndex(i => i.id === id)
    const originData = datas[orginIndex]

    datas.splice(orginIndex, 1, { ...originData, content, update })
    fs.writeFileSync(path.join(process.cwd(), './public/data.json'), JSON.stringify(datas))
    console.log('PUT request:', id);
    return NextResponse.json({ code: 200, data: { ...originData, content, update }, msg: 'success' })
}

export function GET(request, { params: { id } }) {
    const datas = JSON.parse(fs.readFileSync(path.join(process.cwd(), './public/data.json'), 'utf-8'))
    console.log('GET request:', id);
    return NextResponse.json({ code: 200, data: datas.find(i => i.id == id) || {}, msg: 'success' })
}

export function DELETE(request, { params: { id } }) {
    const datas = JSON.parse(fs.readFileSync(path.join(process.cwd(), './public/data.json'), 'utf-8'))
    const index = datas.findIndex(i => i.id === id)
    const obj = datas[index]
    if (obj.notDelete) {
        return NextResponse.error()
    }
    datas.splice(index, 1)
    fs.writeFileSync(path.join(process.cwd(), './public/data.json'), JSON.stringify(datas))
    console.log('DELETE request:', id);
    return NextResponse.json({ code: 200, data: obj, msg: 'success' })
}
