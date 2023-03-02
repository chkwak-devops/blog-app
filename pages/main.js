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

import { PageTitle } from "/src/component/PageTitle"


export const setOpenSideBarAction = () => {
    setOpenSideBar(true);
}



export default function Main() {

    const DEFAULT_API_KEY = "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";

    // const gpt_api_key = "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";
    // let gpt_api_key = typeof window !== 'undefined' ? localStorage.getItem("CHATGPT_API_KEY") : "";

    const [isLoading, setIsLoading] = useState(true);
    const [chatGPTResult, setChatGPTResult] = useState();
    const [valueReqQuery, setValueReqQuery] = useState('');
    const [chatfGPTAPI, setChatfGPTAPI] = useState('');

    const [imgBase64, setImgBase64] = useState([]); // 파일 base64
    const [imgFile, setImgFile] = useState(null);



    const handleRunGPTAPI = async () => {

        alert(chatfGPTAPI);

        return;

        setIsLoading(true);

        const prompt_val = valueReqQuery.replace(/(?:\r\n|\r|\n)/g, ' '); // 공백 개행 처리     
        const response = await backendAPI.runGPTAPICall(prompt_val, gpt_api_key);
        if (response.status === 401) {
            alert('인증키가 잘못되었습니다. 인증키를 재등록해주세요')
            // TODO 인증키 등록용 모달 폼 생성     
        } else {
            setChatGPTResult(response.data.choices[0].text);
        }

        setIsLoading(false);

    };

    const handleDownloadChatGPT = async () => {

        const fimeNameFooter = valueTopic.replace(/ /g, "_");
        const today_str = commonUtil.getToday();

        let fileName = `${today_str}_${fimeNameFooter}.md`;
        let output = chatGPTResult;
        const element = document.createElement('a');
        const file = new Blob([output], {
            type: 'text/plain',
        });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element); // FireFox
        element.click();
    }


    const handleDeployBlog = async () => {

        console.log("handleDeployBlog");

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

    }






    useEffect(() => {
        setIsLoading(false);

        setChatfGPTAPI(localStorage.getItem("CHATGPT_API_KEY") === "" ? DEFAULT_API_KEY : localStorage.getItem("CHATGPT_API_KEY"));

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
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-prompt'
                                control={TextArea}
                                label='ChatGPT Prompt'
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
                        <Button onClick={() => handleDownloadChatGPT()}> 파일 다운로드 </Button>

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
