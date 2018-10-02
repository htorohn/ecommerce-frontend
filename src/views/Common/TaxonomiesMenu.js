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


// const menuItem = (item) => {
//     return (
//         <div>
//             Welcome to level 2
//             <Accordion.Accordion panels={level2Panels} />
//         </div>
//     )
// }
// const subMenu = (menu) => {
//     const items = [
//       { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
//       { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' },
//     ]

//     return (  
//         <div>
//             <Accordion.Accordion panels={level2Panels} />
//         </div>
//     )
// }

class TaxonomiesMenu extends Component {
    
    state = { }
    
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    componentWillMount() {
        this.setState({ activeItem: this.props.activePermalink })
    }
    
    _renderMenuItem(item, key) {
        //console.log("item", item)
        const { activeItem } = this.state
        if (item.taxons.length === 0){
            return (
                <Menu.Item
                  name={item.permalink}
                  as='a'
                  href={'/shop/' + item.permalink}
                  active={activeItem === item.permalink}
                  onClick={this.handleItemClick}
                >
                {'- ' + item.name}
                </Menu.Item>
            )
        }
        
        return(
            <Menu.Item>
                <Menu.Header>{item.name}</Menu.Header>
                <Menu.Menu>
                {
                    item.taxons.map((taxon, key) => {
                        //console.log("taxon", taxon)
                        return(this._renderMenuItem(taxon, item.id))
                    })
                }
                </Menu.Menu>
            </Menu.Item>
        )
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
        var taxons = taxonomies.taxonomies.taxons.filter(taxon => {
          return taxon.parent_id === null
        })
        //console.log("taxon menu", taxons)
        
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
