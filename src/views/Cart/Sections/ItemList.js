import React from 'react'
import { connect } from 'react-redux'
import { 
    Table,
    Item,
    Image,
    Dropdown,
    Icon,
    Header
} from 'semantic-ui-react'
import NumericInput from 'react-numeric-input'

import { updateProductOnCart } from '../../../redux/actions'

class ItemList extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          //current_variant: 0,
          qty: 1
          //activeIndex: 0
          //addToCart: true
        }
    }
    
    handleQtyChange(item, newQty) {
        //console.log("update item", item)
        //console.log("new qty", newQty)
        let line_item = {
            variant_id: item.variant.id,
            quantity: newQty
        }
        const item_id = item.id
        this.props.updateProductOnCart({item_id, line_item})
            .then (() => {
                //alert("Producto Agregado!")
                // Toast.show({
                //     text: "Carrito Actualizado!",
                //     buttonText: "Ok",
                //     duration: 2000
                //   })
                console.log("Carrito Actualizado")
            })
    }
    
    render() {
        const { items } = this.props
        console.log("items", items)
        
        //Seleccionamos la cantidad que queremos y actualizamos el carrito de compra
        //const handleChange = (e, { value }) => this.handleQtyChange(item, value)
        
        return(
            <Table basic>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell></Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Precio</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Cantidad</Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>Total</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
            
                <Table.Body>
                    
                    {items.map((item, key) => {
                        
                        //this.setState({qty: item.variant.quantity})
                        let cantidad = []
                        for (let i = 0; i < item.variant.total_on_hand; i++){
                            cantidad.push({
                                text: i+1, 
                                value: i+1
                            })
                        }
                        let qty_picker = null
                        //console.log("item", item)
                        //console.log("cantidad", cantidad)
                        qty_picker = 
                            <Dropdown
                                //selection
                                //name='default'
                                options={cantidad}
                                defaultValue={cantidad[item.quantity-1].value}
                                //placeholder='I change value on keyboard navigation'
                                onChange={(e, {value}) => {this.handleQtyChange(item, value)}}
                            />

                        return (
                            <Table.Row key={key}>
                                <Table.Cell>
                                    <Item.Group>
                                    <Item>
                                        <Item.Image size='tiny' src={item.variant.images[0].small_url} />
                                        <Item.Content verticalAlign='middle'>
                                            <Item.Header as='a' href={"/product/" + item.variant.slug}>{item.variant.name}</Item.Header>
                                            {
                                                item.variant.options_text !== "" 
                                                ?
                                                    <Item.Description>
                                                        {item.variant.options_text}
                                                    </Item.Description>
                                                : null
                                            }
                                            <Item.Extra>
                                              <Icon link onClick={()=>{console.log("voy a borrar")}} color='red' name='trash alternate outline' />
                                            </Item.Extra>
                                        </Item.Content>
                                        
                                    </Item>
                                    </Item.Group>
                                </Table.Cell>
                                
                                <Table.Cell textAlign='center'><h4>{item.single_display_amount}</h4></Table.Cell>
                                <Table.Cell textAlign='center'>
                                {qty_picker}
                                </Table.Cell>
                                <Table.Cell textAlign='center'><Header as='h4' color='red'>{item.display_amount}</Header></Table.Cell>
                            </Table.Row>
                        )
                    } )}
                </Table.Body>
              </Table>
        )
    }
}

export default connect(null, { updateProductOnCart })(ItemList)