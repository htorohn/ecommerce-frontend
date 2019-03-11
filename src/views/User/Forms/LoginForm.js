import React from 'react'

import {
    Form,
    Segment,
    Button,
    Grid,
    Container
} from 'semantic-ui-react'

class LoginForm extends React.Component {
    render(){
        return (
                <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Form size='large'>
                            <Segment stacked>
                                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                />
                
                                <Button primary fluid size='large'>
                                    Login
                                </Button>
                            </Segment>
                        </Form>
                    </Grid.Column>
                </Grid>
        )
    }
}

export default LoginForm