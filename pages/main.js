import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import {
  Table,
  Button,
  Dimmer,
  Loader,
  Form,
  Divider,
  Input,
  Modal,
  TextArea,
  Icon,
  Header,
  Segment,
  Grid,
  Search,
  Message,
  Sidebar,
  Menu,
} from "semantic-ui-react";
import commonStyles from "/src/component/css/Common.module.css";
import * as backendAPI from "/src/component/BackendAPI";
import * as commonUtil from "/src/component/Common";

import { PageTitle } from "/src/component/PageTitle";

export const setOpenSideBarAction = () => {
  setOpenSideBar(true);
};

export default function Main() {
  const DEFAULT_API_KEY = "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";

  // const gpt_api_key = "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";
  let gpt_api_key =
    typeof window !== "undefined"
      ? localStorage.getItem("CHATGPT_API_KEY")
      : "";

  // const test_blog_body =
  //   "---\n" +
  //   "layout: single" +
  //   'title: "블로그 포스팅 테스트입니다"\n' +
  //   "categories: 블로그\n" +
  //   "tag: [블로그, 코딩, 지킬, 코드스테이츠]\n" +
  //   "toc: true\n" +
  //   "toc_sticky: true\n" +
  //   "toc_label: 목차\n" +
  //   "---\n" +
  //   "\n" +
  //   "## 테스트\n";

  const test_blog_body =
    "---\n" +
    "layout: single\n" +
    'title: "test title"\n' +
    "categories: blog\n" +
    "tag: [blog, coding,]\n" +
    "toc: true\n" +
    "toc_sticky: true\n" +
    "toc_label: index\n" +
    "---\n" +
    "\n" +
    "## 한글 테스트\n";

  const [isLoading, setIsLoading] = useState(true);
  const [chatGPTResult, setChatGPTResult] = useState(test_blog_body);
  const [valueReqQuery, setValueReqQuery] = useState("");
  const [chatfGPTAPI, setChatfGPTAPI] = useState();
  const [valueTopic, setValueTopic] = useState("2013 hit song");

  const handleRunGPTAPI = async () => {
    setIsLoading(true);

    const prompt_val = valueReqQuery.replace(/(?:\r\n|\r|\n)/g, " "); // 공백 개행 처리
    const response = await backendAPI.runGPTAPICall(
      prompt_val,
      DEFAULT_API_KEY
    );
    if (response.status === 401) {
      alert("인증키가 잘못되었습니다. 인증키를 재등록해주세요");
      // TODO 인증키 등록용 모달 폼 생성
    } else {
      // setChatGPTResult(response.data.choices[0].text);

      let result_data = response.data.choices[0].text;
      result_data = result_data.replace(/(?:\r\n|\r|\n)/g, " ");
      setChatGPTResult(response.data.choices[0].text);
    }

    setIsLoading(false);
  };

  const handleDownloadChatGPT = async () => {
    const fimeNameFooter = valueTopic.replace(/ /g, "_");
    const today_str = commonUtil.getToday();

    let fileName = `${today_str}_${fimeNameFooter}.md`;
    let output = chatGPTResult;
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element); // FireFox
    element.click();
  };

  const handleDeployBlog = async () => {
    console.log("handleDeployBlog");

    setIsLoading(true);

    const reqGithubData = {
      title: valueTopic,
      blog_body: chatGPTResult,
    };

    console.log(reqGithubData);

    const response = await backendAPI.githubAPICall(reqGithubData);

    if (response.status !== 200) {
      alert(`${response.status}\n오류가 발생했습니다}`);
    } else {
      alert("처리 완료되었습니다.");
    }

    setIsLoading(false);

    // console.log(objectWithData);

    // fetch("/api/github", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(objectWithData),
    // });

    //     let file = fs.readFileSync("/test.md").toString();
    //     console.log(file);

    //     var content = base64.encode(file);
    //     console.log(content);

    //     // uploadFileApi(token, content)

    //     const github_token = "1111";

    //     const data = JSON.stringify({
    //         "message": "txt file",
    //         "content": `${content}`
    //     });

    //     const config = {
    //         method: 'put',
    //         url: 'https://api.github.com/repos/chkwak-devops/chkwak-devops.github.io/_posts/2023-03-02-test.md',
    //         headers: {
    //             'Authorization': `Bearer ${github_token}`,
    //             'Content-Type': 'application/json'
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
  };

  useEffect(() => {
    setIsLoading(false);

    setChatfGPTAPI(
      localStorage.getItem("CHATGPT_API_KEY") === ""
        ? DEFAULT_API_KEY
        : localStorage.getItem("CHATGPT_API_KEY")
    );
  }, []);

  return (
    <div className={commonStyles.body_layout}>
      <PageTitle title="ChatGPT" />
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Dimmer active>
            <Loader size="huge" inline="centered" active>
              Loading
            </Loader>
          </Dimmer>
        </div>
      )}

      {!isLoading && (
        <div className={commonStyles.body_layout}>
          <Form>
            <Form.Group widths="equal">
              <Form.Field
                id="form-prompt"
                control={TextArea}
                label="ChatGPT Prompt"
                placeholder="ChatGPT 질의문 입력"
                style={{ minHeight: 200 }}
                onChange={(e) => setValueReqQuery(e.currentTarget.value)}
                value={valueReqQuery}
              />
            </Form.Group>
          </Form>
          <Segment>
            <Button onClick={handleRunGPTAPI}> chatGPT 질의</Button>
          </Segment>
          <Form>
            <TextArea style={{ minHeight: 400 }} value={chatGPTResult} />
          </Form>

          <Divider />

          <Segment>
            <Button onClick={() => handleDownloadChatGPT()}>
              {" "}
              파일 다운로드{" "}
            </Button>

            {/* https://docs.github.com/ko/rest/repos/contents?apiVersion=2022-11-28#create-a-file */}
            <Button onClick={() => handleDeployBlog()}> 블로그 배포</Button>
            <Button> 자동 블로그 배포 시간 설정 </Button>
            <Button> 배포 현황 조회 </Button>
          </Segment>
        </div>
      )}
    </div>
  );
}
