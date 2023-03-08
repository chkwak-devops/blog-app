// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



// import cors from 'cors';
// import bodyParser from 'body-parser';
import dayjs from 'dayjs';
import shortId from 'shortid';
import db from '/src/component/lowdb';



export default function handler(req, res) {

  // const __dirname = dirname(fileURLToPath(import.meta.url));
  // const file = join(__dirname, 'db.json')

  // // Configure lowdb to write to JSONFile
  // const adapter = new JSONFile(file)
  // const db = new Low(adapter)

  console.log("---------------");
  // console.log(
  //   db.get('todos')
  //     .filter({ date: day })
  //     .value());

  const { posts } = db.data
  posts.push({
    id: shortId.generate(),
    date: dayjs().format('DD.MM.YYYY'),
    done: false,
  })
  db.write();



  res.status(200).json({ name: 'John Doe' })
}
