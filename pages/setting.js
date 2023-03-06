import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'
import { Form, Button, Segment, Container, Grid, Header, Icon, Divider, Message, Input, Label, List } from "semantic-ui-react"
import { create } from 'seed-fingerprint';
import commonStyles from "/src/component/css/Common.module.css";
import * as commonUtil from "/src/component/Common";
import { PageTitle } from "/src/component/PageTitle"

export default function Setting() {

    const [fingerPrint, setfingerPrint] = useState();
    const [chatGptApi, setChatGptApi] = useState();
    const [githubToken, setGithubToken] = useState();


    //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

    const getFingerPrint = async () => {

        const seed = 'seed_valeue';
        const fingerprint = create(seed);

        const fingerPrint = await fingerprint.get();
        console.log(`fingerfPrint: ${fingerPrint}`);
        setfingerPrint(fingerPrint);
    }


    const handleChatGptApiKey = (e, value) => {

        if (e.code === "Enter") {
            if (commonUtil.isEmpty(value)) {
                alert("ChatGPT API Key를 입력해주세요");
                document.getElementById("form_chatgpt_api_key").focus();
                return;
            }

            console.log(`CHATGPT_API_KEY : ${value}`);
            localStorage.setItem("CHATGPT_API_KEY", value);
            setChatGptApi(localStorage.getItem("CHATGPT_API_KEY"));

            alert("ChatGPT API Key 등록이 완료되었습니다");
        }
    }

    const handleGithub = (e, value) => {

        if (e.code === "Enter") {
            if (commonUtil.isEmpty(value)) {
                alert("GitHubToekn을 입력해주세요");
                document.getElementById("form_github_access_token").focus();
                return;
            }

            console.log(`githubToekn : ${value}`);
            localStorage.setItem("GITHUB_TOKEN", value);
            setChatGptApi(localStorage.getItem("GITHUB_TOKEN"));

            alert("GITHUB TOKEN 등록이 완료되었습니다");
        }
    }




    useEffect(() => {

        getFingerPrint();
        setChatGptApi(localStorage.getItem("CHATGPT_API_KEY"));
        setGithubToken(localStorage.getItem("GITHUB_TOKEN"));

    }, []);



    return (
        <div className={commonStyles.body_layout}>
            <PageTitle title="Setting" />

            <Message
                attached
                header='ChatGPT API KEY 등록'
                color='teal'
                list={[
                    'ChatGPT API 웹사이트( https://platform.openai.com ) 사이트 접속하여 가입/로그인 합니다.',
                    '상단 우측 "Personal > View Api Keys" 메뉴(https://platform.openai.com/account/api-keys)로 이동합니다',
                    '"Create new secret key"를 클릭하여 Secret Key를 생성합니다.',
                    '생성된 Secret Key를 복사하여 아래 입력창에 붙여넣기 한 후 등록합니다'
                ]}
            />
            <Form className='attached fluid segment'>
                <Form.Group widths='equal'>

                    <Form.Field
                        id='form_chatgpt_api_key'
                        control={Input}
                        label='ChatGPT API Key'
                        placeholder={chatGptApi}
                        // onKeyPress={}
                        onKeyPress={(e) => handleChatGptApiKey(e, e.target.value)}
                    />
                </Form.Group>
                <List divided selection>
                    <List.Item>
                        <Icon name='caret right' />{chatGptApi}
                    </List.Item>
                </List>
            </Form>

            <Divider />

            <Message
                attached
                header='GITHUB ACCESS TOKEN 등록'
                color='teal'
                list={[
                ]}
            />
            <Form className='attached fluid segment'>
                <Form.Group widths='equal'>

                    <Form.Field
                        id='form_github_access_token'
                        control={Input}
                        label='GITHUB ACCESS TOKEN'
                        placeholder={githubToken}
                        onKeyPress={(e) => handleGithub(e, e.target.value)}
                    />
                </Form.Group>
                <List divided selection>
                    <List.Item>
                        <Icon name='caret right' />{githubToken}
                    </List.Item>
                </List>

            </Form>



            <Divider />

            <Message
                attached
                header='FingerPrint'
                color='yellow'
                list={[
                    '브라우저를 구분하기 위해 자동으로 생성된 브라우저 지문입니다.',
                    '동일한 브라우저로 계속 접속할 경우 같은 값으로 유지됩니다.',
                ]}
            />
            <Form className='attached fluid segment'>
                {/* <Form.Group widths='equal'>
                    <Form.Field>
                        <Form.Field
                            id='form_fingerprint'
                            control={Input}
                            label='FingerPrint'
                            placeholder={fingerPrint}
                            readOnly
                        />
                    </Form.Field>
                </Form.Group> */}

                <List divided selection>
                    <List.Item>
                        <Icon name='caret right' />{fingerPrint}
                    </List.Item>
                </List>


            </Form>

        </div>
    )
} 