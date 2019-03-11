import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import {
    Container,
    Dimmer,
    Loader,
    Accordion,
    Menu,
    Dropdown,
    Icon
} from 'semantic-ui-react'



class TaxonomiesMenu extends Component {
    
    state = { }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentWillMount() {
        this.setState({ activeItem: this.props.activePermalink })
    }
    
    _renderMenuItem(item, key) {
        console.log("item", item)
        const { activeItem } = this.state
        //if (item.relationships.children.data.length === 0){
            return (
                <Menu.Item
                  name={item.attributes.permalink}
                  as='a'
                  href={'/shop/' + item.attributes.permalink}
                  active={activeItem === item.attributes.permalink}
                  onClick={this.handleItemClick}
                >
                {'- ' + item.attributes.name}
                </Menu.Item>
            )
        //}
        
        // return(
        //     <Menu.Item>
        //         <Menu.Header>{item.attributes.name}</Menu.Header>
        //         <Menu.Menu>
        //         {
        //             item.relationships.children.data.map((taxon, key) => {
        //                 //console.log("taxon", taxon)
        //                 return(this._renderMenuItem(taxon, item.id))
        //             })
        //         }
        //         </Menu.Menu>
        //     </Menu.Item>
        // )
    }
    
    
    
    render(){
        const { taxonomies } = this.props
        //console.log("taxonomies", taxonomies)
        if (taxonomies.isFetching){
            return (
                <Container>
                    <Dimmer active inverted>
                        <Loader size='big' inverted>Loading</Loader>
                    </Dimmer>
                </Container>
            )
        }
        var taxons = taxonomies.taxonomies.data.filter(taxon => {
          return taxon.attributes.is_child == false
        })
        console.log("taxon menu", taxons)
        
        const { activeIndex } = this.state
        return(
            <div>
                <Menu secondary pointing fluid vertical style={{textAlign: 'left'}}>
                    {taxons.map((taxon, key) =>
                        this._renderMenuItem(taxon,key)
                    )}
                </Menu>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { taxonomies } = state
    return { taxonomies }
}

export default connect(mapStateToProps, {})(TaxonomiesMenu)
