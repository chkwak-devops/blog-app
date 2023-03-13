import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  Label,
} from "semantic-ui-react";

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import * as commonUtil from "/src/component/Common";
import { PageTitle } from "/src/component/PageTitle";
import commonStyles from "/src/component/css/Common.module.css";




export default function Home() {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(false);

  }, []);


  return (
    <div className={commonStyles.body_layout}>
      <PageTitle title="Blog 등록 내역" />
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

          test

        </div>
      )}
    </div>
  )
}
