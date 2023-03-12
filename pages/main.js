import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
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
  Select,
  Label,
} from "semantic-ui-react";
import commonStyles from "/src/component/css/Common.module.css";
import * as backendAPI from "/src/component/BackendAPI";
import * as commonUtil from "/src/component/Common";
import { PageTitle } from "/src/component/PageTitle";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export const setOpenSideBarAction = () => {
  setOpenSideBar(true);
};

export default function Main() {
  const router = useRouter();
  const focusRef = useRef();

  const editor = useEditor({
    extensions: [StarterKit],
  });

  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr"],
    ["ul", "ol", "task"],
    ["table", "link"],
    ["image"],
    ["code"],
    ["scrollSync"],
  ];

  const blogContentsTemplate =
    "---\n" +
    "layout: single\n" +
    'title: "BLOG_TAG_TITLE"\n' +
    "categories: blog\n" +
    "tag: [blog]\n" +
    "toc: true\n" +
    "toc_sticky: true\n" +
    "toc_label: index\n" +
    "---\n" +
    "\n";

  const chatGPTPrompt1 =
    "markdown 형식으로 블로그글을 작성합니다\n" +
    "주제는 '{{0}}'이고 카테고리는 '{{1}}'입니다.\n" +
    "중요한 문구는 굵은 글씨체로 작성해주세요 \n" +
    "블로그 글 첫 부분에 요약글을 넣어주세요\n";

  const chatGPTPrompt2 =
    "Write blog posts in markdown format.\n" +
    "Write the theme of your blog as '{{0}}' and its category is '{{1}}'.\n" +
    "Highlight, bold, or italicize important words or sentences.\n" +
    "Create several hashtags and add them only at the end of the line.\n" +
    "Add a summary of the entire article at the beginning of the blog post.";

  const defaultStatePromptTypeList = [
    {
      key: 0,
      value: 0,
      text: "직접 입력",
    },
    {
      key: 1,
      value: 1,
      text: "마크다운 포맷 한글 템플릿",
    },
    {
      key: 2,
      value: 2,
      text: "마크다운 포맷 영어 템플릿",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [statePromptTypeList, setStatePromptTypeList] = useState(
    defaultStatePromptTypeList
  );
  const [defaultPromptType, setDefaultPromptType] = useState(0);
  const [chatGptPrompt, setChatGptPrompt] = useState("");
  const [chatGPTResult, setChatGPTResult] = useState();
  const [blogCategory, setBlogCategory] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContents, setBlogContents] = useState("");

  const handleRunGPTAPI = async () => {
    console.log("handleRunGPTAPI");

    if (commonUtil.isEmpty(chatGptPrompt)) {
      alert("ChatGPT prompt(질의문)를 입력해주세요");
      document.getElementById("form_prompt").focus();
      return;
    }

    setIsLoading(true);

    const prompt_val = chatGptPrompt.replace(/(?:\r\n|\r|\n)/g, " "); // 개행 공백 처리

    /// test
    const inputContents = "test 결과입니다.";
    setBlogContents(inputContents);
    document.getElementById("form_blog_contents").value = inputContents;
    setIsLoading(false);
    return;

    try {
      const response = await backendAPI.runGPTAPICall(prompt_val);

      setIsLoading(false);
      await commonUtil.sleep(100);

      if (response.status === 401) {
        alert("chatGPT API KEY가 잘못되었습니다. 인증키를 재등록해주세요");
        router.push("/setting");
      } else {
        let result_data = response.data.choices[0].text;
        result_data = result_data.replace(/(?:\r\n|\r|\n)/g, " ");

        const responseData = response.data.choices[0].text;
        setChatGPTResult(responseData);

        const inputTitle =
          chatGptPrompt.length > 20
            ? chatGptPrompt.substring(0, 20).concat("...")
            : chatGptPrompt;
        const inputContents = generateBlogContents(inputTitle, responseData);

        setBlogTitle(inputTitle);
        setBlogContents(inputContents);

        // console.log("----------------")
        // console.log(response.status)
        // console.log(inputTitle)
        // console.log(inputContents)
        // console.log("----------------")

        document.getElementById("form_blog_title").value = inputTitle;
        document.getElementById("form_blog_contents").value = inputContents;
      }
    } catch (error) {
      console.log(error);

      alert(error);
      return;
    }
  };

  const handleDownloadChatGPT = async () => {
    console.log("handleDownloadChatGPT");

    const fimeNameFooter = blogTitle.replace(/ /g, "_");
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

    if (commonUtil.isEmpty(blogTitle)) {
      alert("등록할 블로그 제목이 없습니다");
      return;
    }

    if (commonUtil.isEmpty(chatGPTResult)) {
      alert("등록할 블로그 컨텐츠가 없습니다");
      return;
    }

    setIsLoading(true);

    const reqGithubData = {
      title: blogTitle,
      blog_body: blogContents,
    };

    console.log(reqGithubData);

    const response = await backendAPI.githubAPICall(reqGithubData);

    if (response.status === 200) {
      alert(
        "블로그 배포 완료되었습니다.\n잠시(약 30초) 후 배포 상태 확인할 수 있습니다"
      );
    } else if (response.status === 404) {
      alert(
        "github 정보가 없습니다. github 설정 메뉴에서 정보를 입력해 주세요"
      );
      router.push("/setting");
    } else if (response.status === 401) {
      alert("github token이 맞지 않습니다. 다시 설정해 주세요");
      router.push("/setting");
    } else {
      alert(`${response.status}\n오류가 발생했습니다[${response.data}]`);
    }

    setIsLoading(false);
  };

  const generateBlogContents = (inputTitle, inputContents) => {
    return (
      blogContentsTemplate.replace("BLOG_TAG_TITLE", inputTitle) + inputContents
    );
  };

  const handlePromptTypeSelect = async (e, data) => {
    if (commonUtil.isEmpty(blogCategory)) {
      alert("Blog 카테고리를 입력해주세요");
      //   document.getElementById("form_blog_category").focus();
      focusRef.current.focus();
      setDefaultPromptType(0);
      return;
    }

    if (commonUtil.isEmpty(blogTitle)) {
      alert("Blog 제목을 입력해주세요");
      document.getElementById("form_blog_title").focus();

      alert(">>>" + document.getElementById("form_blog_title").value);
      setDefaultPromptType(0);
      return;
    }

    const promptType = data.value;
    console.log(`promptType : ${promptType}`);

    // 직접 입력
    if (promptType === 0) {
      setChatGptPrompt("");
      document.getElementById("form_prompt").focus();
    } else if (promptType === 1) {
      setChatGptPrompt(
        chatGPTPrompt1
          .replace("{{0}}", blogTitle)
          .replace("{{1}}", blogCategory)
      );
    } else if (promptType === 2) {
      setChatGptPrompt(
        chatGPTPrompt2
          .replace("{{0}}", blogTitle)
          .replace("{{1}}", blogCategory)
      );
    }
  };

  useEffect(() => {
    setIsLoading(false);

    setChatGPTResult("");
  }, []);

  return (
    <div className={commonStyles.body_layout}>
      <PageTitle title="Blog 페이지 생성기" />
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
            <Form.Field widths="equal">
              <label>Blog 카테고리 </label>

              <Input
                autoFocus
                id="form_blog_category"
                ref={focusRef}
                placeholder="카테고리명 입력.."
                maxLength="50"
                // onKeyPress={(e) => setBlogCategory(e.target.value)}
                onClick={(e) => {
                  setChatGptPrompt("");
                  setDefaultPromptType(0);
                }}
                onBlur={(e) => setBlogCategory(e.target.value)}
              />
              <div className={commonStyles.input_bottom_comment}>
                예시 : "health", "다이어트" 등등
              </div>
            </Form.Field>

            <Form.Field widths="equal">
              <label>Blog 제목 </label>
              <Input
                id="form_blog_title"
                placeholder="블로그 제목 입력.."
                maxLength="100"
                // onKeyPress={(e) => setBlogTitle(e.target.value)}
                onClick={(e) => {
                  setChatGptPrompt("");
                  setDefaultPromptType(0);
                }}
                onBlur={(e) => setBlogTitle(e.target.value)}
              />
              <div className={commonStyles.input_bottom_comment}>
                예시 : "부산에서 사진찍기 좋은 3곳 추천", "3 recommended places
                to take pictures in Busan" 등등
              </div>
            </Form.Field>

            <Form.Field widths="equal">
              <label>질의 유형 선택</label>
              <Select
                id="form_promptType"
                options={statePromptTypeList}
                placeholder="유형 선택"
                defaultValue={defaultPromptType}
                onChange={(e, data) => handlePromptTypeSelect(e, data)}
                // style={{ zIndex: 13 }}
              />
            </Form.Field>

            <Form.Field
              id="form_prompt"
              control={TextArea}
              label="ChatGPT 질의(Prompt) 입력"
              placeholder="ChatGPT 질의(Prompt) 입력"
              style={{ minHeight: 100 }}
              onChange={(e) => setChatGptPrompt(e.currentTarget.value)}
              value={chatGptPrompt}
              widths="equal"
            />

            <Form.Field widths="equal">
              <Button color="blue" onClick={handleRunGPTAPI}>
                {" "}
                chatGPT 질의
              </Button>
            </Form.Field>

            <Form.Field widths="equal">
              <label>chatGPT 질의 결과 </label>
              <TextArea style={{ minHeight: 150 }} value={chatGPTResult} />
            </Form.Field>

            <Form.Field widths="equal">
              <label>Blog 본문 </label>
              <TextArea
                id="form_blog_contents"
                style={{ minHeight: 300 }}
                placeholder="블로그 본문 입력"
                // value={blogContents}
              />
            </Form.Field>
            <Form.Field widths="equal">
              <EditorContent editor={editor} />
            </Form.Field>
          </Form>

          <Divider />

          <Segment>
            <Button onClick={() => handleDownloadChatGPT()}>
              {" "}
              파일 다운로드{" "}
            </Button>

            {/* https://docs.github.com/ko/rest/repos/contents?apiVersion=2022-11-28#create-a-file */}
            <Button onClick={() => handleDeployBlog()}>
              {" "}
              블로그 실시간 배포
            </Button>
            <Button
              onClick={() =>
                window.open("https://chkwak-devops.github.io", "_blank")
              }
            >
              {" "}
              블로그 바로가기{" "}
            </Button>

            {/* <Button> 자동 블로그 배포 시간 설정 </Button>
                        <Button> 배포 현황 조회 </Button> */}
          </Segment>
        </div>
      )}
    </div>
  );
}
