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
          width: "60%",
          // border: "2px dashed red",
          backgroundColor: "#FEF9E7",
          justifyContent: "left"
        }}>


          <div className={baseStyles.container__table} >

            <Table celled selectable striped structured style={{
              borderCollapse: "collapse",
              // whiteSpace: "nowrap",
              // width: "100%",
              width: 2000,
              border: "1px solid #ddd"
            }}>
              <Table.Header style={{ position: "sticky", top: 0, zIndex: 11 }}>
                <Table.Row>

                  <Table.HeaderCell style={{ width: 100, position: "sticky", left: 0, zIndex: 8 }}></Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 500 }}>Name</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 200 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>

                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Status333</Table.HeaderCell>
                  <Table.HeaderCell style={{ width: 100 }}>Notes444</Table.HeaderCell>


                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
                  <Table.Cell style={{ position: "sticky", left: 0, zIndex: 8 }}>Unknown1</Table.Cell>
                  <Table.Cell negative style={{}}>None</Table.Cell>
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
