import fs from "fs";
import axios from "axios";
import base64 from "base-64";
import moment from "moment";

export default function handler(req, res) {
  //   const GITHUB_API_KEY = "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";
  //   const GITHUB_API_KEY = "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";
  //   const GITHUB_API_KEY = "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";
  //git remote add origin https://chkwak-devops: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@github.com/chkwak-devops/blog-app.git

  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const body = req.body;
  console.log("-----------");
  console.log("body : " + JSON.stringify(body));
  console.log("-----------");

  let blog_title = body.title;
  let blog_body = body.blog_body;
  let github_token = body.github_token;
  let github_account = body.github_account;

  //   let blog_title = "test-title";
  //   let blog_body = "test-body";

  blog_title = blog_title.replace(/\s/g, "_");
  const file_name =
    moment().subtract(1, "day").format("YYYY-MM-DD") +
    "-" +
    encodeURI(blog_title) +
    "-" +
    Math.floor(Math.random() * 1000000).toString() +
    ".md";

  fs.writeFileSync(file_name, blog_body);

  let upload_file = fs.readFileSync(file_name, "utf-8").toString();
  console.log(upload_file);

  const content = Buffer.from(upload_file).toString("base64");
  //   const content = base64.encode(upload_file);
  console.log(content);

  const data = {
    message: `posting ${file_name}`,
    committer: { name: "chkwak", email: "chkwak@emart.com" },
    content: `${content}`,
  };

  const config = {
    method: "put",
    url: `https://api.github.com/repos/${github_account}/${github_account}.github.io/contents/_posts/${file_name}`,
    headers: {
      Authorization: `Bearer ${github_token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    data: data,
  };

  console.log("-----------------");
  console.log(config);
  console.log("-----------------");

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));

      if (fs.existsSync(file_name)) {
        fs.unlinkSync(file_name);
      }
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);
      res.status(error.response.status).json(error.response.data.message);
    });
}
