import dayjs from 'dayjs';
import shortId from 'shortid';
import db from '/src/component/lowdb';

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        await db.read();

        console.log(db.data);
        const postsList = db.data;
        return res.status(200).json(postsList);
    }


    res.status(200).json({ name: 'John Doe' })
}
