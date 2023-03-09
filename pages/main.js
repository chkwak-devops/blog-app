import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from 'next/link'

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
} from "semantic-ui-react";
import commonStyles from "/src/component/css/Common.module.css";
import * as backendAPI from "/src/component/BackendAPI";
import * as commonUtil from "/src/component/Common";

import { PageTitle } from "/src/component/PageTitle";

export const setOpenSideBarAction = () => {
    setOpenSideBar(true);
};

export default function Main() {

    const router = useRouter();

    const blogContentsTemplate =
        "---\n" +
        "layout: single\n" +
        "title: \"BLOG_TAG_TITLE\"\n" +
        "categories: blog\n" +
        "tag: [blog]\n" +
        "toc: true\n" +
        "toc_sticky: true\n" +
        "toc_label: index\n" +
        "---\n" +
        "\n";

    const defaultStatePromptTypeList = [{
        key: 0,
        value: "0",
        text: "템플릿 없음"
    }, {
        key: 1,
        value: "1",
        text: "맛집 블로그 유형"

    }
    ]

    const [isLoading, setIsLoading] = useState(true);
    const [statePromptTypeList, setStatePromptTypeList] = useState(defaultStatePromptTypeList);
    const [chatGptPrompt, setChatGptPrompt] = useState("");
    const [chatGPTResult, setChatGPTResult] = useState();
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

        const prompt_val = chatGptPrompt.replace(/(?:\r\n|\r|\n)/g, " "); // 공백 개행 처리

        try {
            const response = await backendAPI.runGPTAPICall(
                prompt_val
            );


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

                const inputTitle = chatGptPrompt.length > 20 ? chatGptPrompt.substring(0, 20).concat("...") : chatGptPrompt;
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
            alert("블로그 배포 완료되었습니다.\n잠시(약 30초) 후 배포 상태 확인할 수 있습니다");

        } else if (response.status === 404) {
            alert("github 정보가 없습니다. github 설정 메뉴에서 정보를 입력해 주세요");
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
        return blogContentsTemplate.replace("BLOG_TAG_TITLE", inputTitle) + inputContents;
    }


    useEffect(() => {
        setIsLoading(false);

        setChatGPTResult("");

    }, []);

    return (
        <div className={commonStyles.body_layout}>
            <PageTitle title="Blog Page Generator ChatGPT" />
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
                            <Form.Field>
                                <label>질의 유형 선택</label>
                                <Select
                                    id="form_promptType"
                                    options={statePromptTypeList}
                                    placeholder="유형 선택"
                                    defaultValue="0"
                                // onChange={(e, data) => handleTeamChangeSelect(e, data)}
                                // style={{ zIndex: 13 }}
                                />
                            </Form.Field>
                        </Form.Group>

                        <Form.Group widths="equal">
                            <Form.Field
                                id="form_prompt"
                                control={TextArea}
                                label="ChatGPT 잘의(Prompt) 입력"
                                placeholder="ChatGPT 잘의(Prompt) 입력"
                                style={{ minHeight: 100 }}
                                onChange={(e) => setChatGptPrompt(e.currentTarget.value)}
                                value={chatGptPrompt}
                            />
                        </Form.Group>
                        <Form.Field widths="equal">
                            <label>chatGPT 질의 결과 </label>
                            <TextArea style={{ minHeight: 150 }}
                                value={chatGPTResult} />
                        </Form.Field>

                        <Form.Field widths="equal">
                            <Button onClick={handleRunGPTAPI}> chatGPT 질의</Button>
                        </Form.Field>

                        <Form.Field widths="equal">
                            <label>블로그 제목 </label>
                            <Input id="form_blog_title"
                                placeholder="블로그 제목 입력.."
                                maxLength="100"
                            />
                        </Form.Field>
                        <Form.Field widths="equal">
                            <label>블로그 본문 </label>
                            <TextArea
                                id='form_blog_contents'
                                style={{ minHeight: 300 }}
                                placeholder="블로그 컨텐츠 입력"
                            // value={blogContents}
                            />
                        </Form.Field>
                    </Form>

                    <Divider />

                    <Segment>
                        <Button onClick={() => handleDownloadChatGPT()}>
                            {" "}
                            파일 다운로드{" "}
                        </Button>

                        {/* https://docs.github.com/ko/rest/repos/contents?apiVersion=2022-11-28#create-a-file */}
                        <Button onClick={() => handleDeployBlog()}> 블로그 실시간 배포</Button>
                        <Button onClick={() => window.open('https://chkwak-devops.github.io', '_blank')}> 블로그 바로가기 </Button>

                        {/* <Button> 자동 블로그 배포 시간 설정 </Button>
                        <Button> 배포 현황 조회 </Button> */}
                    </Segment >
                </div >
            )
            }
        </div >
    );
}
