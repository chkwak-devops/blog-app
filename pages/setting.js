import { useEffect, useState } from "react";
import styles from '@/styles/Home.module.css'
import { Form, Button, Segment, Container, Grid, Header, Icon, Divider, Input } from "semantic-ui-react"
import { create } from 'seed-fingerprint';
import commonStyles from "/src/component/css/Common.module.css";

import { PageTitle } from "/src/component/PageTitle"

export default function Setting() {

    const [fingerPrint, setfingerPrint] = useState();
    let apiKey = typeof window !== 'undefined' ? localStorage.getItem("CHATGPT_API_KEY") : "";


    const getFingerPrint = async () => {

        const seed = 'seed_valeue';
        const fingerprint = create(seed);

        const fingerPrint = await fingerprint.get();
        console.log(`fingerfPrint: ${fingerPrint}`);
        setfingerPrint(fingerPrint);
    }



    const handleInputApiKey = (e, value) => {

        if (e.code === "Enter") {
            console.log(`CHATGPT_API_KEY : ${value}`);
            alert(value)
            localStorage.setItem("CHATGPT_API_KEY", value);
        }
    }


    useEffect(() => {

        getFingerPrint();

    }, []);



    return (
        <div className={commonStyles.body_layout}>
            <PageTitle title="Setting" />

            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        id='form-chatgpt-api-key'
                        control={Input}
                        label='ChatGPT API Key'
                        placeholder={apiKey}
                        // onKeyPress={}
                        onKeyPress={(e) => handleInputApiKey(e, e.target.value)}
                    />
                </Form.Group>


                <Form.Field>
                    <Form.Field
                        id='form-fingerprint'
                        control={Input}
                        label='FingerPrint'
                        placeholder={fingerPrint}
                    />

                </Form.Field>

            </Form>

        </div>
    )
} 