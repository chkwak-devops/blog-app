import { Header, Icon, Divider } from "semantic-ui-react"

export const PageTitle = ({ title }) => {
    return (
        <>
            <Header as="h3">
                <div>
                    <Icon name='angle right' />
                    {title}
                </div>
            </Header>
            <Divider />
        </>
    );
}