import styles from '@/styles/Home.module.css'
import { Button, Segment, Container, Grid, Header, Icon, Divider } from "semantic-ui-react"
import commonStyles from "/src/component/css/Common.module.css";

import { PageTitle } from "/src/component/PageTitle"

export default function About() {

  return (
    <div className={commonStyles.body_layout}>
      <PageTitle title="About" />
    </div>

  )



} 