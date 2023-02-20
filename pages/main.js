import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from 'next/head'
import { Table, Button, Form, Divider, Input, Modal, TextArea, Icon, Header, Segment } from "semantic-ui-react";
import baseStyles from "/src/component/css/Base.module.css";


const { Configuration, OpenAIApi } = require("openai");


export default function Main() {



    const CHATGPT_API_KEY = "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";

    // 유저의 질문을 담을 state
    const [questions, setQuestions] = useState();
    // 채팅을 위한 state
    const [chat, setChat] = useState([]);


    // useEffect(async () => {

    // }, []);



    const handleRunGPTAPI = async () => {


        const configuration = new Configuration({
            apiKey: chatGPT_API_KEY,
        });
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Say this is a test",
            temperature: 0,
            max_tokens: 7,
        });

        console.log("--------------");
        console.log(response);
        console.log("--------------");
    }

    /**
     * https://velog.io/@acwell94/next.js-open-ai-Api%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-chatBot-%EB%A7%8C%EB%93%A4%EA%B8%B0
     * @param {*} data 
     */
    const chatAi = async (data) => {
        try {
            // axios를 이용해서 chatgpt와 통신
            const pos = await axios.post(
                "https://api.openai.com/v1/completions",
                // docs복사 prompt에 내가 한 질문 입력
                {
                    model: "text-davinci-003",
                    prompt: `${data}`,
                    temperature: 0.9,
                    max_tokens: 521,
                    top_p: 1,
                    frequency_penalty: 0,
                    presence_penalty: 0.6,
                    stop: [" Human:", " AI:"],
                },
                // 발급받은 api키 env로 입력
                {
                    headers: {
                        "Content-Type": "application/json",
                        // Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
                        Authorization: "Bearer " + String(CHATGPT_API_KEY),
                    },
                },
            );
            console.log(pos);
            // chat state에 기존의 값 + 대답 저장
            // id는 맵돌릴때 필요해서 입력
            setChat((prev) => [
                ...prev,
                { text: pos.data.choices[0].text, id: pos.data.id },
            ]);
            // 답변을 기다리는 동안 제어해줄 컴포넌트
            setWaitAnswer((prev) => !prev);
        } catch (error) {
            console.log(error);
            setWaitAnswer((prev) => !prev);
            alert("오류가 발생하였습니다.");
            // 에러가 발생하였을 경우 질문과 채팅 내역 모두 제거
            setQuestions("");
            setChat([]);
        }
    };




    return (
        <>

            <div style={{
                padding: 10,
            }}
            >



                <Segment placeholder>



                    <Button onClick={handleRunGPTAPI}> API 호출</Button>

                </Segment>

            </div>



        </>
    )
}
