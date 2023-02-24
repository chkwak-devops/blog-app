/* eslint-disable @next/next/no-img-element */
// import Gnb from "./Gnb";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
    Button,
    Form,
    Divider,
    Input,
    Label,
    Image,
    Icon,
} from "semantic-ui-react";
import * as main from "/pages/main";




export default function Top() {
    const router = useRouter();

    const openSidedBarAction = () => {

        console.log("openSidedBarAction");
        main.setOpenSideBarAction(true);
    }

    useEffect(() => { }, []);

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    paddingTop: 10,
                    backgroundColor: "#566573",
                    // borderRadius: 5,
                    // border: "2px dashed red",
                    justifyContent: "space-between",
                }}
            >
                <div style={{ display: "flex", justifyContent: "left" }}>
                    <div
                        style={{
                            //   flex: "600px 0 0",
                            padding: 16,
                            fontWeight: "bold",
                            fontSize: 28,
                            color: "orange",
                            //   border: "2px dashed red",
                        }}
                    >
                        ChatGPT
                    </div>
                    <div
                        style={{
                            paddingTop: 20,
                            fontWeight: "bold",
                            fontSize: 20,
                            color: "#FFFFFF",
                        }}
                    >
                        Blog Page Generator
                    </div>
                </div>
                <div
                    style={{
                        padding: "20px 20px 10px 10px",
                        // border: "2px dashed red",
                    }}
                >
                    <>
                        <Label as="a" image>
                            <Icon name="time" /> 사용시간
                        </Label>
                        <Label as="a" image onClick={() => openSidedBarAction()} >
                            <Icon name="setting" /> Setting
                        </Label>
                    </>
                </div>
            </div>
            {/* <Gnb /> */}
        </div>

    );
}
