/* eslint-disable @next/next/no-img-element */
// import Gnb from "./Gnb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import baseStyles from "/src/component/css/Base.module.css";
import { Button, Form, Divider, Input, Label, Image, Icon } from "semantic-ui-react";

export default function Top() {
    const router = useRouter();

    useEffect(() => {
    }, []);

    return (
        <div>


            <div
                style={{
                    display: "flex",
                    paddingTop: 10,
                    backgroundColor: "#EBEDEF",
                    // borderRadius: 5,
                    border: "1px solid white",
                    justifyContent: "space-between"

                }}
            >
                <div style={{ display: "flex", justifyContent: "left" }}>
                    <div style={{
                        paddingTop: 10,
                        paddingLeft: 30,
                        padding: 10,
                        // border: "2px dashed red",
                    }}>

                    </div>
                    <div style={{
                        flex: "600px 0 0",
                        padding: 24,
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "#212F3D",
                        // border: "2px dashed red",
                    }}>
                        ChatGPT Blog Page Generator
                    </div>
                </div>
                <div
                    style={{
                        padding: 20,
                        // border: "2px dashed red",
                    }}
                >
                    <>
                        <Label as='a' image>
                            <Icon name='time' /> time
                        </Label>

                        <Label as='a' image>
                            <Icon name='setting' /> Setting
                        </Label>
                    </>
                </div>
            </div>
            {/* <Gnb /> */}
        </div>
    );
}
