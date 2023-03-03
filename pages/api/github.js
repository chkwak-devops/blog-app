import fs from 'fs'
import axios from "axios";
import base64 from 'base-64';
import moment from 'moment';

export default function handler(req, res) {

    const GITHUB_API_KEY = "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";


    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    const body = req.body;
    console.log(body);

    let blog_title = body.title;
    let blog_body = body.blog_body;
    blog_title = blog_title.replace(/\s/g, '_');
    const file_name = moment().subtract(1, 'day').format('YYYY-MM-DD') + "-" + blog_title;


    fs.writeFileSync(file_name, blog_body);

    let upload_file = fs.readFileSync(file_name).toString();
    console.log(upload_file);

    const content = base64.encode(upload_file);
    console.log(content);

    const data = {
        "message": `posting ${file_name}`,
        "committer": { "name": "chkwak", "email": "chkwak@emart.com" },
        "content": `${content}`
    };

    const config = {
        method: 'put',
        url: `https://api.github.com/repos/chkwak-devops/chkwak-devops.github.io/contents/_posts/${file_name}`,
        headers: {
            'Authorization': `Bearer ${GITHUB_API_KEY}`,
            'Content-Type': 'application/json',
            'X-GitHub-Api-Version': '2022-11-28'
        },
        data: data
    };

    console.log("-----------------");
    console.log(data);
    console.log("-----------------");

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            if (fs.existsSync(fine_name)) {
                fs.unlinkSync(fine_name);
            }
            res.status(200).json(response.data)


        })
        .catch(function (error) {
            console.log(error);
            res.status(500).json(error)
        });



}
