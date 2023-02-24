import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

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
import baseStyles from "/src/component/css/Base.module.css";
import * as backendAPI from "/src/component/BackendAPI";
import * as commonUtil from "/src/component/Common";

import Top from "../src/component/Top";



export const setOpenSideBarAction = () => {
    setOpenSideBar(true);
}



export default function Main() {

    const gpt_api_key = "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";

    const [isLoading, setIsLoading] = useState(true);
    const [chatGPTResult, setChatGPTResult] = useState();
    const [chatGPTQuery, setchatGPTQuery] = useState();
    const [valueCategory, setValueCategory] = useState('travel');
    const [valueTopic, setValueTopic] = useState('Top 1 Restaurants you must visit when traveling to Tokyo');
    const [valueReqQuery, setValueReqQuery] = useState('');

    const [openSideBar, setOpenSideBar] = useState(false);

    // const [valueKorQuestion, setValueKorQuestion] = useState('');
    // const [valueEngQuestion, setValueEngQuestion] = useState('');







    const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));



    /**
     * https://velog.io/@acwell94/next.js-open-ai-Api%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-chatBot-%EB%A7%8C%EB%93%A4%EA%B8%B0
     */
    const handleRunGPTAPI = async () => {

        setIsLoading(true);
        geteneratePrompt();

        const prompt_val = valueReqQuery.replace(/(?:\r\n|\r|\n)/g, ' ');

        const response = await backendAPI.runGPTAPICall(prompt_val, gpt_api_key);

        if (response.status === 401) {
            alert('인증키가 잘못되었습니다.')
            // 인증키 등록용 모달 폼 생성     
        }

        setChatGPTResult(response.data.choices[0].text);

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


    const geteneratePrompt = () => {

        const prompt =
            `Write blog posts in markdown format.
Write the theme of your blog as ${valueTopic}.
Highlight, bold, or italicize important words or sentences.
Please include the restaurant's address, menu recommendations and other helpful information(opening and closing hours) as a list style.
Please make the entire blog less than 10 minutes long.
The audience of this article is 20-40 years old.
Create several hashtags and add them only at the end of the line.
Add a summary of the entire article at the beginning of the blog post.`;


        setValueReqQuery(prompt);

        return prompt;


    }


    const handletranslateEng = async () => {

        // if (!commonUtil.isEmpty(valueKorQuestion)) return;

        // try {
        //     const response = await axios.post(
        //         // "https://openapi.naver.com/v1/papago/n2mt",
        //         "/v1/papago/n2mt",
        //         {
        //             source: "ko",
        //             target: "en",
        //             text: valueKorQuestion
        //         },
        //         {
        //             headers: {

        //                 // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        //                 "Content-Type": "application/json",
        //                 "X-Naver-Client-Id": "JWUPX5FM2NNPafV8hONr",
        //                 "X-Naver-Client-Secret": "LnJapCVcZn",
        //             },
        //         }
        //     );

        //     console.log("----------------");
        //     console.log(response);
        //     console.log("----------------");


        //     // setValueEngQuestion(req.data.message.result.translatedText);


        // } catch (error) {
        //     console.log(error);
        //     alert("오류가 발생하였습니다." + error);
        // }


    }

    useEffect(() => {
        setIsLoading(false);



    }, []);


    return (
        <>
            <Top />
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


                <Sidebar.Pushable>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        direction='right'
                        icon='labeled'
                        inverted
                        onHide={() => setOpenSideBar(false)}
                        vertical
                        visible={openSideBar}
                        width='wide'
                    >
                        <Menu.Item as='a' header>
                            File Permissions
                        </Menu.Item>
                        <Menu.Item as='a'>Share on Social</Menu.Item>
                        <Menu.Item as='a'>Share by E-mail</Menu.Item>
                        <Menu.Item as='a'>Edit Permissions</Menu.Item>
                        <Menu.Item as='a'>Delete Permanently</Menu.Item>
                    </Sidebar>


                    <Sidebar.Pusher>
                        <div
                            style={{
                                padding: 20,
                            }}
                        >
                            {/* 
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-kor-question'
                                width="100%"
                                control={TextArea}
                                label='한글 질문'
                                placeholder='한글 질문 입력'
                                onChange={(e) => setValueKorQuestion(e.currentTarget.value)}
                                value={valueKorQuestion}
                            />
                        </Form.Group>
                        <Button onClick={handletranslateEng()}> 영문 번역(파파고)</Button>

                        {valueEngQuestion === "" ? "" : (<Message>
                            {valueEngQuestion}
                        </Message>)}

                    </Form> */}

                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-category'
                                        width="100%"
                                        control={Input}
                                        label="카테고리"
                                        placeholder='카테고리 유형 입력(ex : travel)'
                                        onChange={(e) => setValueCategory(e.currentTarget.value)}
                                        value={valueCategory}
                                    />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-topic'
                                        control={TextArea}
                                        label='블로그 토픽'
                                        placeholder='블로그 토픽을 입력(ex : Top 5 Restaurants you must visit when traveling to Tokyo)'
                                        onChange={(e) => setValueTopic(e.currentTarget.value)}
                                        onBlur={geteneratePrompt}
                                        value={valueTopic}
                                    />
                                </Form.Group>
                            </Form>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        id='form-prompt'
                                        control={TextArea}
                                        label='전송용 쿼리 생성'
                                        placeholder="..."
                                        style={{ minHeight: 200 }}
                                        onBlur={(e) => setValueReqQuery(e.currentTarget.value)}
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
                                <Button> 블로그 배포 ${top.openSideBar}</Button>
                                <Button> 자동 블로그 배포 시간 설정 </Button>
                                <Button> 배포 현황 조회 </Button>
                            </Segment>
                        </div>


                    </Sidebar.Pusher>
                </Sidebar.Pushable>






            )}
        </>
    );
}
