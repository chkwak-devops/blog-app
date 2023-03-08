// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



// import cors from 'cors';
// import bodyParser from 'body-parser';
import dayjs from 'dayjs';
import shortId from 'shortid';
import db from '/src/component/lowdb';



export default async function handler(req, res) {

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
  await db.write();

  await db.read();


  // const { posts } = db.data();


  res.status(200).json(posts)
}
