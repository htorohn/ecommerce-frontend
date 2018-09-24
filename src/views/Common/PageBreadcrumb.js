import React from 'react'
import { Breadcrumb, Container } from 'semantic-ui-react'

class PageBreadcrumb extends React.Component {
    render() {
        console.log("breadcrumb", this.props)
        const {textAlign} = this.props
        return(
            <Container
                //textAlign={textAlign}
                {...this.props}
            >
                <Breadcrumb>
                    <Breadcrumb.Section link>Home</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section link>Store</Breadcrumb.Section>
                    <Breadcrumb.Divider />
                    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
                </Breadcrumb>
            </Container>
        )
    }
}

export default PageBreadcrumb