import Low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const file = "/tmp/db.json";
const adapter = new FileSync(file);

const db = new Low(adapter);
db.defaults({ posts: [], user: [] }).write();
// db.get("posts").push({ id: 1, title: "lowdb is awesome" }).write();

// import { Low } from "lowdb";
// import { JSONFile } from "lowdb/node";

// const file = "/tmp/db.json";
// const adapter = new JSONFile(file);
// const db = new Low(adapter);

// db.data ||= { posts: [] };
// db.write();

export default db;
