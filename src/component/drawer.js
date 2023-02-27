import { Sidebar, Menu, Container } from "semantic-ui-react"
import Footer from "/src/component/Footer";

export const Drawer = ({
    sidebarComponent,
    main,
    nav,
    drawerOnHide,
    drawerVisible,
}) => (
    <Sidebar.Pushable>
        <Sidebar
            as={Menu}
            animation="overlay"
            color="blue"
            inverted
            onHide={drawerOnHide}
            vertical
            visible={drawerVisible}
            width="thin"
        >
            {sidebarComponent}
        </Sidebar>
        <Sidebar.Pusher dimmed={drawerVisible}>
            {nav}
            {main && <Container as="main">{main}</Container>}

            <Footer />
        </Sidebar.Pusher>
    </Sidebar.Pushable>
)
