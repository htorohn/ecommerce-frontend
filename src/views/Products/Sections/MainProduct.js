import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import {
    Container,
    Button,
    Icon,
    Grid,
    Dropdown,
    Segment,
    Label,
    List,
    ListItem,
    Accordion,
    Header
} from 'semantic-ui-react'
import NumericInput from 'react-numeric-input'

import { setMainImage } from '../../../redux/actions'
import ProductImages from './ProductImages'


class MainProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
          current_variant: 0,
          qty: 1,
          activeIndex: -1
          //addToCart: true
        };
    }
    
    onVariantChange(e, data) {
        //console.log("data",data)
        this.setState({
            current_variant: data.value
        });
    }
    
    //Handle accordion click
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index
        
        this.setState({ activeIndex: newIndex })
    }

    
    addToCart(variant, quantity) {
        console.log("variant", variant)
    }
  
    render(){
        const { productImage, current_product } = this.props
        //console.log("current product", current_product)
        
        //UNA VEZ QUE YA SE CARGO EL PRODUCTO ACTUAL
        //Tomamos deciciones basados en si el Producto tiene Variants o no y creamos la lista de imagenes
        var selected_variant = {}
        var variant_picker = null
        var thumbnailImages = current_product.master.images
        if (current_product.has_variants){
            selected_variant = current_product.variants[this.state.current_variant]
            selected_variant.images.map((image) => {
                    thumbnailImages = [...thumbnailImages, image]
                    return null
                }
            )
            
            //Construimos el selector de variante
            const variants = current_product.variants
            //console.log("variants", variants)
            const variantTexts = variants.map((variant, id) => {
                return ({
                    text: variant.options_text,
                    value: id
                })
            })
            //console.log("texts", variantTexts)
            variant_picker =
                <div>
                <h4>Opciones:</h4>
                <Dropdown
                    //selection
                    options={variantTexts}
                    defaultValue={0}
                    onChange={this.onVariantChange.bind(this)}
                />
                </div>
            //
        }else {
            selected_variant = current_product.master
        }
        
        //Poblamos el arreglo de taxons para mostrar
        const taxons = _.map(current_product.classifications, 'taxon')
        var taxonLabels = null
        if (taxons.length > 0){
            taxonLabels = taxons.map ((taxon) => {
                return (
                    <Label as='a' href={'/shop/' + taxon.permalink} color='teal' tag>
                        {taxon.name}
                    </Label>
                )
            })
        }
        
        //Si hay descripcion del producto, la mostramos
        let description_string = null
        if (selected_variant.description !== '') {
            description_string = 
                
                    <p>
                        {selected_variant.description}
                    </p>
                
        }
        
        //Obtenemos las propiedades del producto
        const properties = current_product.product_properties
        var properties_string = null
        if (properties.length > 0) {
            properties_string = 
                // <Grid columns={2}>
                <List celled>
                    {properties.map((property) => 
                    <ListItem>
                        <Grid columns={2}>
                        <Grid.Column style={{textAlign: 'left'}}>
                        <h3 style={{fontWeight: "bold"}}>{property.property_name}</h3>
                        </Grid.Column>
                        <Grid.Column>
                        <h4>{ property.value }</h4>
                        </Grid.Column>
                        </Grid>
                    </ListItem>
                    )}
                </List>
                //</Grid>
        }
        //Obtenemos la imagen principal, qeu cambiara de acuerdo al thumbnail seleccionado
        let image = {}
        if (productImage.current_image.product_url === undefined ){
            image=current_product.master.images[0]
        } else {
            image = productImage.current_image
        }
        //console.log("Thumbnails", thumbnailImages)
        
        //Cantidad de items disponibles
        let qty_picker
        let disabled
        if (selected_variant.total_on_hand === 0){
            disabled = true
            qty_picker = 
                    <Label style={{ color: 'red' }}>
                        No Disponible
                    </Label>
        }else{
            disabled = false
            qty_picker = 
                <NumericInput 
                    value={this.state.qty} 
                    onChange={(num)=>{this.setState({qty: num})}} 
                    step={1}
                    min={1}
                    max={selected_variant.total_on_hand}
                />
        }
        
        return (
            <div>
                <Grid container columns={2} stackable>
                    <Grid.Column width={6}>
                        <ProductImages 
                            mainImage={image}
                            thumbnails={thumbnailImages} 
                        />
                    </Grid.Column>
                    <Grid.Column width={10}>
                            <Grid.Row>
                                <Grid.Column>
                                    <Grid columns={2} stackable> 
                                        <Grid.Column style={{textAlign: 'left'}}>
                                            {taxonLabels}
                                        </Grid.Column>
                                        <Grid.Column style={{textAlign: 'right'}}>
                                            <Container>
                                                <Icon name='facebook' size='large' />
                                                <Icon name='twitter' size='large' />
                                                <Icon name='instagram' size='large' />
                                            </Container>
                                        </Grid.Column>
                                    </Grid>
                                    <Grid style={{textAlign: 'left'}}>
                                        <Grid.Column>
                                            {/*<h2>{current_product.name}</h2>*/}
                                            <h3>{current_product.display_price}</h3>
                                        </Grid.Column>
                                    </Grid>
                                    <Grid columns={2} stackable>
                                        <Grid.Column style={{textAlign: 'left'}}>
                                            <h4>Cantidad:</h4>
                                            {qty_picker}
                                        </Grid.Column>
                                        <Grid.Column style={{textAlign: 'left'}}>
                                            {variant_picker}
                                        </Grid.Column>
                                    </Grid>
                                    <Grid style={{textAlign: 'left'}}>
                                        <Grid.Column>
                                            <Button 
                                                icon='shop'
                                                content='Agregar al Carrito'
                                                primary
                                                disabled={disabled}
                                                onClick={() => this.addToCart(selected_variant, this.state.qty)}
                                            />
                                        </Grid.Column>
                                    </Grid>
                                    <Grid style={{textAlign: 'left'}}>
                                        
                                        <Grid.Column>
                                            <Accordion>
                                                <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick}>
                                                    
                                                        <Icon name='dropdown' />
                                                        Propiedades
                                                   
                                                </Accordion.Title>
                                                <Accordion.Content active={this.state.activeIndex === 0}>
                                                    {properties_string}
                                                </Accordion.Content>
                                            </Accordion>
                                        </Grid.Column>
                                    </Grid>
                                </Grid.Column>
                            </Grid.Row>
                    </Grid.Column>
                </Grid>
            </div>
        )   
    }
}

const mapStateToProps = state => {
    const { productImage } = state
    return { productImage }
}

export default connect(mapStateToProps, { setMainImage })(MainProduct)