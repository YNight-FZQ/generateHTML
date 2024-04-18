import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const result =
            await sql`CREATE TABLE IF NOT EXISTS articles (
                id VARCHAR(16) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                auth VARCHAR(50) NOT NULL,
                content TEXT NOT NULL,
                create_date TEXT NOT NULL,
                update_date TEXT NOT NULL,
                not_delete BOOLEAN NOT NULL
              )`;
        return NextResponse.json({ result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}