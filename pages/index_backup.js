import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Table, Button, Form, Divider, Input, Modal, TextArea, Icon, Header, Segment } from "semantic-ui-react";
import baseStyles from "/src/component/css/Base.module.css";



export default function Home() {


  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      alert("enter")
      // handleOnClick(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };



  // useEffect(async () => {


  // }, []);


  return (
    <>

      <div style={{
        display: "flex",
        height: "100%",
        // border: "1px solid red",
        justifyContent: "left"
      }}>

        <div
          style={{
            width: "200px",
            height: "100%",
            // display: "flex",
            paddingTop: 10,
            backgroundColor: "#154360",
            // border: "2px dashed red",
            // justifyContent: "left"
          }}
        >
          <div>
            <div style={{
              // flex: "600px 0 0",
              padding: 10,
              fontWeight: "bold",
              fontSize: 14,
              color: "#FFFFFF",
              // border: "2px dashed red",
              textAlign: "center",
            }}>
              API Key 발급 방법
            </div>

            <div style={{
              padding: 10,
              fontWeight: "bold",
              fontSize: 14,
              color: "#FFFFFF",
              textAlign: "center",
            }}>
              test menu 1
            </div>

            <div style={{
              padding: 10,
              fontWeight: "bold",
              fontSize: 14,
              color: "#FFFFFF",
              textAlign: "center",
            }}>
              test menu 1
            </div>

            <div style={{
              padding: 10,
              fontWeight: "bold",
              fontSize: 14,
              color: "#FFFFFF",
              textAlign: "center",
            }}>
              test menu 1
            </div>

            <div style={{
              // flex: "600px 0 0",
              padding: 20,
              fontWeight: "bold",
              fontSize: 12,
              color: "#FFFFFF",
              // border: "2px dashed red",
              textAlign: "center",
            }}>
              <Input placeholder='API Key 입력' style={{ width: "300px" }} onKeyPress={handleOnKeyPress} />
            </div>

            <div style={{
              padding: 220
            }}>
            </div>
          </div>

        </div>



        <div style={{
          padding: 50,
          width: "90%",
          // border: "2px dashed red",
          backgroundColor: "#FEF9E7",
          justifyContent: "left"
        }}>


          <div className={baseStyles.container__table} >

            <Table celled selectable striped structured style={{ borderCollapse: "collapse", width: "100%", whiteSpace: "nowrap", border: "1px solid #ddd" }}>
              <Table.Header style={{ position: "sticky", top: 0, zIndex: 10 }}>
                <Table.Row>

                  <Table.HeaderCell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 20, }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", whiteSpace: "normal", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>

                          <Table.HeaderCell style={{ width: "25%" }}>Notes</Table.HeaderCell>
                          <Table.HeaderCell style={{ width: "25%" }}>Name</Table.HeaderCell>
                          <Table.HeaderCell style={{ width: "25%" }}>Status</Table.HeaderCell>
                          <Table.HeaderCell style={{ width: "25%" }}>Notes</Table.HeaderCell>

                        </Table.Row>
                      </Table.Body>
                    </Table>

                  </Table.HeaderCell>


                  <Table.HeaderCell >Notes11111</Table.HeaderCell>
                  <Table.HeaderCell>Name22222222222</Table.HeaderCell>
                  <Table.HeaderCell>Status333</Table.HeaderCell>
                  <Table.HeaderCell>Notes444</Table.HeaderCell>

                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>

                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>

                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>

                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>

                <Table.Row>
                  <Table.Cell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 10 }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "255", whiteSpace: "nowrap", wordBreak: "break-all" }} negative>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                  </Table.Cell>
                  <Table.Cell>Unknown1</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>




                <Table.Row>
                  <Table.Cell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 10 }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "255", whiteSpace: "nowrap", wordBreak: "break-all" }} negative>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                  </Table.Cell>
                  <Table.Cell>Unknown1</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>



                <Table.Row>
                  <Table.Cell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 10 }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "255", whiteSpace: "nowrap", wordBreak: "break-all" }} negative>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                  </Table.Cell>
                  <Table.Cell>Unknown1</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>


                <Table.Row>
                  <Table.Cell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 10 }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "255", whiteSpace: "nowrap", wordBreak: "break-all" }} negative>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>

                  </Table.Cell>
                  <Table.Cell>Unknown1</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>



                <Table.Row>
                  <Table.Cell structured style={{ padding: "0px", position: "sticky", left: 0, zIndex: 10 }}>

                    <Table celled selectable striped structured style={{ border: "0px solid #ddd", width: "100%", tableㅣayout: "fixed" }}>
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "255", whiteSpace: "nowrap", wordBreak: "break-all" }} negative>1000<br />100</Table.Cell>
                          <Table.Cell style={{ width: "25%", whiteSpace: "nowrap", wordBreak: "break-all" }}>1000<br />100</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Table.Cell>
                  <Table.Cell>Unknown1</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>






                {/* <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Unknown</Table.Cell>
                  <Table.Cell negative>None</Table.Cell>
                </Table.Row> */}


              </Table.Body>
            </Table>

          </div>











        </div>

      </div>
    </>
  )
}
