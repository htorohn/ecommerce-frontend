import React from 'react'
import { 
    Table,
    Item,
    Image,
    Dropdown,
    Icon,
    Header
} from 'semantic-ui-react'

class Adjustments extends React.Component {
    render() {
        console.log("order", this.props.order)
        const { order } = this.props
        if (order.order === undefined) {
            return null
        }
        return (
            <Table>
                Hola Mundo
            </Table>
        )
    }
}

export default Adjustments