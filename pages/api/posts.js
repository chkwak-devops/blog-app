import dayjs from "dayjs";
import shortId from "shortid";
import lowdb from "/src/component/lowdb";
import * as commonUtil from "/src/component/Common";

export default async function handler(req, res) {
    const { method } = req;
    // const body = JSON.parse(req.body)
    const body = req.body

    if (method === "GET") {
        return res.status(200).json(lowdb.get('posts').value());
    }

    if (method === "POST") {
        if (commonUtil.isEmpty(body.blogCagtegory) ||
            commonUtil.isEmpty(body.blogTitle) ||
            commonUtil.isEmpty(body.blogContents) ||
            commonUtil.isEmpty(body.writer)
        ) {
            return res.status(404).json({
                message:
                    "No required parameters"
            });
        }

        const idx = shortId.generate();
        lowdb
            .get("posts")
            .push({
                id: idx,
                createDt: dayjs().format("YYYY-MM-DD HH:mm:ss:SSS"),
                blog_category: body.blogCagtegory,
                blog_title: body.blogTitle,
                blog_contents: body.blogContents,
                blog_writer: body.writer
            })
            .write();

        return res.status(201).json(lowdb.get('posts').find({ id: idx }).value());
    }

    if (method === "DELETE") {
        const idx = body.id;

        if (commonUtil.isEmpty(idx)) {
            return res.status(404).json({
                message:
                    "No required parameters"
            });
        }

        if (commonUtil.isEmpty(lowdb.get('posts')
            .find({ id: idx })
            .value())) {

            return res.status(404).json({
                message:
                    `Not exist id : "${idx}" to delete`
            });
        }

        // 전체 삭제할 경우 
        // lowdb.get('posts')
        //     .remove()
        //     .value();

        lowdb.get('posts')
            .remove({ id: idx })
            .value();

        return res.status(201).json({
            message:
                `Removed ${idx} successfully`
        });
    }

}
