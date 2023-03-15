import Link from "next/link"
import { Button, Segment, Container, Grid, Header, Icon } from "semantic-ui-react"

const Logo = ({ logo }) => (
    <Link href="/" passHref>
        <Header size="small" inverted>
            {logo}
        </Header>
    </Link>
)

const Hamburger = ({ onClick }) => (
    <Header size="tiny" textAlign="right">
        <Icon name="bars" link size="big" inverted onClick={onClick} />
    </Header>
)

export const NavLinks = ({ list, verticalNavLinks }) => (
    <Button.Group as="ul" vertical={verticalNavLinks}>
        {/* <Button.Group as="ul"> */}
        {list &&
            list.map(({ href, text }, index) => (
                <li key={index}>
                    <Link href={href} passHref>
                        <Button primary >{text}</Button>
                    </Link>
                </li>
            ))}

    </Button.Group>
)

export const Navbar = ({ setVisible, visible, list, verticalNavLinks, logo }) => (
    <>
        <Segment inverted color="blue" size="large" as="nav" attached>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="5" floated="left" verticalAlign="middle">
                            <Logo logo={logo} />
                        </Grid.Column>
                        <Grid.Column widescreen="6" only="computer tablet" floated="right">
                            <NavLinks list={list} />
                            {/* <NavLinks list={list} verticalNavLinks={verticalNavLinks} /> */}

                        </Grid.Column>
                        <Grid.Column width="10" only="mobile" floated="right">
                            <Hamburger onClick={() => setVisible(!visible)} />
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
        {/* <Segment color="white" size="large" as="nav" attached>
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width="5" floated="left" verticalAlign="middle">
                            About
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment> */}
    </>
)