import fs from 'fs'
import axios from "axios";
// import { decode as base64_decode, encode as base64_encode } from 'base-64';
import base64 from 'base-64';

export default function handler(req, res) {



    let file = fs.readFileSync("test.md").toString();
    console.log(file);

    const content = base64.encode(file);

    console.log(content);

    // uploadFileApi(token, content)


    const github_token = "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";

    // const data = JSON.stringify({
    //     "message": "txt file",
    //     "content": `${content}`
    // });

    const data = {
        "message": "my commit message",
        "committer": { "name": "chkwak", "email": "chkwak@emart.com" },
        "content": `${content}`
    };




    const config = {
        method: 'put',
        url: 'https://api.github.com/repos/chkwak-devops/chkwak-devops.github.io/contents/_posts/test.md',
        headers: {
            'Authorization': `Bearer ${github_token}`,
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
            res.status(200).json(response.data)
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).json(error)
        });







    //     res.status(200).json({ name: 'John Doe' })
}
