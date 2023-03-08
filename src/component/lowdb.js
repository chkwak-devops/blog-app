// import low from 'lowdb';
// import FileSync from 'lowdb/adapters/FileSync';

// const adapter = new FileSync('db.json');
// const db = low(adapter);

// // Write Todos as default
// db.defaults({ todos: [] }).write();


// ---- 
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

// const __dirname = dirname(fileURLToPath(import.meta.url));
// const file = join(__dirname, 'db.json')
// const file = join("tmp", 'db.json')
const file = "/tmp/db.json";

// const file = 'db.json';




// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const db = new Low(adapter)

db.data ||= { posts: [] }
db.write();

// // await db.read()
// db.read()
// db.data ||= { posts: [] }

// // // // Create and query items using native JS API
// // db.data.posts.push('hello world')
// // const firstPost = db.data.posts[0]

// // // Alternatively, you can also use this syntax if you prefer
// // const { posts } = db.data
// // posts.push('hello world')

// // // // Finally write db.data content to file
// // //await db.write()
// db.write()




export default db;