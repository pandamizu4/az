import { createClient } from '@libsql/client';

const client = createClient({
  url: 'file:local.db',
});

export const initDb = async () => {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS images (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      data BLOB NOT NULL,
      mime_type TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

export const saveImage = async (name: string, data: Blob, mimeType: string) => {
  const id = crypto.randomUUID();
  const buffer = await data.arrayBuffer();
  const uint8Array = new Uint8Array(buffer);
  
  await client.execute({
    sql: 'INSERT INTO images (id, name, data, mime_type) VALUES (?, ?, ?, ?)',
    args: [id, name, uint8Array, mimeType]
  });
  
  return id;
};

export const getImage = async (id: string) => {
  const result = await client.execute({
    sql: 'SELECT * FROM images WHERE id = ?',
    args: [id]
  });

  if (result.rows.length === 0) {
    return null;
  }

  const row = result.rows[0];
  return {
    id: row.id,
    name: row.name,
    data: new Blob([row.data], { type: row.mime_type }),
    mimeType: row.mime_type,
    createdAt: new Date(row.created_at)
  };
};

export const getAllImages = async () => {
  const result = await client.execute('SELECT id, name, mime_type, created_at FROM images');
  return result.rows.map(row => ({
    id: row.id,
    name: row.name,
    mimeType: row.mime_type,
    createdAt: new Date(row.created_at)
  }));
};