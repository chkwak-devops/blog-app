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

  const DATA = [
    { id: 1, text: "Editor", typeSelect: "1" },
    { id: 2, text: "Grid", typeSelect: "3" },
    { id: 3, text: "Chart" }
  ];


  const COLUMNS = [
    { name: "id", header: "ID" },
    { name: "text", header: "text edit", editor: "text" },
    {
      header: "type select",
      name: "typeSelect",
      formatter: "listItemText",
      editor: {
        type: "select",
        options: {
          listItems: [
            { text: "Type 1", value: "1" },
            { text: "Type 2", value: "2" },
            { text: "Type 3", value: "3" }
          ]
        }
      }
    }
  ];


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
        </div>
      )}
    </div>
  )
}
