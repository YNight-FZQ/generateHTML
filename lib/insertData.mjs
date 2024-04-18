import { sql } from '@vercel/postgres';

// 读取 JSON 文件


console.log(process.env);

async function createTable() {
    try {
        // 连接到数据库
        const client = await sql.connect();

        // 创建表
        await client.sql`
      CREATE TABLE IF NOT EXISTS articles (
        id VARCHAR(16) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        auth VARCHAR(50) NOT NULL,
        content TEXT NOT NULL,
        create_date TEXT NOT NULL,
        update_date TEXT NOT NULL,
        not_delete BOOLEAN NOT NULL
      )
    `;

        console.log('Table created successfully!');
    } catch (err) {
        console.error('Error creating table:', err);
    }
}

async function insertData() {
    try {
        // 连接到数据库
        const client = await sql.connect();
        // 遍历 JSON 数据并将其插入数据库
        for (const data of jsonData) {
            const { id, title, auth, content, create, update, notDelete } = data;

            // 执行插入数据的 SQL 语句
            await client.sql`
        INSERT INTO articles (id, title, auth, content, create_date, update_date, not_delete)
        VALUES (${id}, ${title}, ${auth}, ${content}, ${create}, ${update}, ${notDelete})
      `
        }

        console.log('Data inserted successfully!');
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        // 断开与数据库的连接
        await client.end();
    }
}

// 创建表
createTable()
    .then(() => insertData())
    .catch(err => console.error('Error:', err));
