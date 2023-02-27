import styles from '@/styles/Home.module.css'
import { Button, Segment, Container, Grid, Header, Icon, Divider } from "semantic-ui-react"
import commonStyles from "/src/component/css/Common.module.css";

export default function About() {

  return (
    // <main className={styles.main}>
    //   <div>
    //     <h1>About</h1>
    //     <p>This is the about page</p>
    //   </div>
    // </main>

    <div className={commonStyles.body_layout}>

      <Header as="h3">
        <div>
          <Icon name='angle right' />
          About
        </div>
      </Header>
      <Divider />


    </div>


    // <Segment color="gray" size="large">
    //   test
    //   {/* <Container>
    //     <Grid>
    //       <Grid.Row>
    //         <Grid.Column width="5" floated="left" verticalAlign="middle">
    //           test
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container> */}
    // </Segment>


  )



} 