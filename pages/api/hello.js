// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import Low from "lowdb";
import { JSONFile } from 'lowdb/node'



export default function handler(req, res) {

  // const __dirname = dirname(fileURLToPath(import.meta.url));
  // const file = join(__dirname, 'db.json')

  // // Configure lowdb to write to JSONFile
  // const adapter = new JSONFile(file)
  // const db = new Low(adapter)


  res.status(200).json({ name: 'John Doe' })
}
