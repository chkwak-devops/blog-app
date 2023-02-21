import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import Head from "next/head";
import axios from "axios";
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
} from "semantic-ui-react";
import baseStyles from "/src/component/css/Base.module.css";
import * as commonUtil from "/src/component/Common";

// const { Configuration, OpenAIApi } = require("openai");



export default function Main() {

    const CHATGPT_API_KEY = "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";

    const [isLoading, setIsLoading] = useState(true);
    const [chatGPTResult, setChatGPTResult] = useState();
    const [chatGPTQuery, setchatGPTQuery] = useState();
    const [valueCategory, setValueCategory] = useState('travel');
    const [valueTopic, setValueTopic] = useState('Top 10 Restaurants you must visit when traveling to New York');
    const [valueReqQuery, setValueReqQuery] = useState('');

    const [valueKorQuestion, setValueKorQuestion] = useState('');
    const [valueEngQuestion, setValueEngQuestion] = useState('');


    const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));


    const handleRunGPTAPI = async () => {

        setIsLoading(true);


        // topic = 'Top 10 Restaurants you must visit when traveling to New York';

        const data =
            `Write blog posts in markdown format.\
        Write the theme of your blog as ${valueTopic}.\
        Highlight, bold, or italicize important words or sentences.\
        Please include the restaurant's address, menu recommendations and other helpful information(opening and closing hours) as a list style.\
        Please make the entire blog less than 10 minutes long.\
        The audience of this article is 20-40 years old.\
        Create several hashtags and add them only at the end of the line. \
        Add a summary of the entire article at the beginning of the blog post.`;


        setValueReqQuery(data);

        try {
            const pos = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    model: "text-davinci-003",
                    prompt: `${data}`,
                    temperature: 0.9,
                    // temperature: 0.3,
                    max_tokens: 2048,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0.6,
                    // stop: [" Human:", " AI:"],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        //    Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
                        Authorization: "Bearer " + String(CHATGPT_API_KEY),
                    },
                }
            );
            console.log(pos);


            console.log("----------------");
            console.log(pos.data.choices[0].text);
            console.log("----------------");


            setChatGPTResult(pos.data.choices[0].text);

        } catch (error) {
            console.log(error);
            alert("오류가 발생하였습니다.");
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




    const handletranslateEng = async () => {

        try {
            const req = await axios.post(
                // "https://openapi.naver.com/v1/papago/n2mt",
                "/v1/papago/n2mt",
                {
                    source: "ko",
                    target: "en",
                    text: valueKorQuestion
                },
                {
                    headers: {
                        // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                        "X-Naver-Client-Id": "JWUPX5FM2NNPafV8hONr",
                        "X-Naver-Client-Secret": "LnJapCVcZn",
                    },
                }
            );

            console.log("----------------");
            console.log(req);
            console.log("----------------");


            setValueEngQuestion(req.data.message.result.translatedText);


        } catch (error) {
            console.log(error);
            alert("오류가 발생하였습니다.");
        }


    }



    // // 유저의 질문을 담을 state
    // const [questions, setQuestions] = useState(false);
    // // 채팅을 위한 state
    // const [chat, setChat] = useState([]);


    // /**
    //  * https://velog.io/@acwell94/next.js-open-ai-Api%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-chatBot-%EB%A7%8C%EB%93%A4%EA%B8%B0
    //  * @param {*} data
    //  */
    // const chatAi = async (data) => {
    //     try {
    //         // axios를 이용해서 chatgpt와 통신
    //         const pos = await axios.post(
    //             "https://api.openai.com/v1/completions",
    //             // docs복사 prompt에 내가 한 질문 입력
    //             {
    //                 model: "text-davinci-003",
    //                 prompt: `${data}`,
    //                 temperature: 0.9,
    //                 max_tokens: 521,
    //                 top_p: 1,
    //                 frequency_penalty: 0,
    //                 presence_penalty: 0.6,
    //                 stop: [" Human:", " AI:"],
    //             },
    //             // 발급받은 api키 env로 입력
    //             {
    //                 headers: {
    //                     "Content-Type": "application/json",
    //                     // Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
    //                     Authorization: "Bearer " + String(CHATGPT_API_KEY),
    //                 },
    //             }
    //         );
    //         console.log(pos);
    //         // chat state에 기존의 값 + 대답 저장
    //         // id는 맵돌릴때 필요해서 입력
    //         setChat((prev) => [
    //             ...prev,
    //             { text: pos.data.choices[0].text, id: pos.data.id },
    //         ]);
    //         // 답변을 기다리는 동안 제어해줄 컴포넌트
    //         setWaitAnswer((prev) => !prev);
    //     } catch (error) {
    //         console.log(error);
    //         setWaitAnswer((prev) => !prev);
    //         alert("오류가 발생하였습니다.");
    //         // 에러가 발생하였을 경우 질문과 채팅 내역 모두 제거
    //         setQuestions("");
    //         setChat([]);
    //     }
    // };


    useEffect(() => {

        setIsLoading(false);

    }, []);




    return (
        <>
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

                <div
                    style={{
                        padding: 20,
                    }}
                >

                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-kor-question'
                                width="100%"
                                control={Input}
                                label='한글 질문'
                                placeholder='한글 질문 입력'
                                onChange={(e) => setValueKorQuestion(e.currentTarget.value)}
                                value={valueKorQuestion}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-eng-question'
                                width="100%"
                                control={Input}
                                label='영문 번역'
                                placeholder='영문으로 번역됩니다'
                                value={valueEngQuestion}
                            />
                        </Form.Group>
                    </Form>

                    <Segment>
                        <Button onClick={handletranslateEng}> 영문 번역(파파고)</Button>
                    </Segment>


                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-category'
                                width="100%"
                                control={Input}
                                label='카테고리'
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
                                placeholder='블로그 토픽을 입력(ex : Top 10 Restaurants you must visit when traveling to New York)'
                                onChange={(e) => setValueTopic(e.currentTarget.value)}
                                value={valueTopic}
                            />
                        </Form.Group>
                    </Form>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-query'
                                control={TextArea}
                                label='전송용 쿼리'
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
                        <Button> 블로그 배포 </Button>
                        <Button> 자동 블로그 배포 시간 설정 </Button>
                        <Button> 배포 현황 조회 </Button>
                    </Segment>








                </div>
            )}
        </>
    );
}
