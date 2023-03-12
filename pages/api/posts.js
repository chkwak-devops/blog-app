import dayjs from "dayjs";
import shortId from "shortid";
import lowdb from "/src/component/lowdb";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    // lowdb.get("posts").remove().write();

    // lowdb.get("user").remove().write();

    lowdb
      .get("posts")
      .push({
        id: shortId.generate(),
        createDt: dayjs().format("YYYY-MM-DD HH:mm:ss:SSS"),
        blog_category: "blog_category",
        blog_title: "blog_category",
        blog_contents: "blog_contents",
        blog_writer: "blog_writer",
      })
      .write();

    // const { posts } = db;
    // posts.push({
    //   id: shortId.generate(),
    //   date: dayjs().format("YYYY-MM-DD HH:mm:ss:SSS"),
    //   done: false,
    // });
    // await db.write();
    // await db.read();
    // console.log(posts);
    return res.status(200).json(lowdb);
  }

  // res.status(200).json({ name: 'John Doe' })
}
