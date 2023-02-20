import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import axios from "axios";
import {
  Table,
  Button,
  Form,
  Divider,
  Input,
  Modal,
  TextArea,
  Icon,
  Header,
  Segment,
} from "semantic-ui-react";
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
    const data =
      "Write blog posts in markdown format.\
Write the theme of your blog as Top 10 Restaurants you must visit when traveling to New York.\
Highlight, bold, or italicize important words or sentences.\
Please include the restaurant's address, menu recommendations and other helpful information(opening and closing hours) as a list style.\
Please make the entire blog less than 10 minutes long.\
The audience of this article is 20-40 years old.\
Create several hashtags and add them only at the end of the line. \
Add a summary of the entire article at the beginning of the blog post.";

    try {
      const pos = await axios.post(
        "https://api.openai.com/v1/completions",
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
        {
          headers: {
            "Content-Type": "application/json",
            //    Authorization: "Bearer " + String(process.env.NEXT_PUBLIC_OPEN_API),
            Authorization: "Bearer " + String(CHATGPT_API_KEY),
          },
        }
      );
      console.log(pos);
    } catch (error) {
      console.log(error);
      alert("오류가 발생하였습니다.");
    }
  };

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
        }
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
      <div
        style={{
          padding: 10,
        }}
      >
        <Segment placeholder>
          <Button onClick={handleRunGPTAPI}> API 호출</Button>
        </Segment>
      </div>
    </>
  );
}
