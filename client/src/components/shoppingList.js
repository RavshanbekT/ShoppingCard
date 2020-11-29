import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from './../actions/itemAction';
import itemModal from './itemModal';

class ShoppingList extends Component {

    

    componentDidMount(){
        this.props.getItems();
    }

   render(){
    const {items}= this.props.item;
       return(
          <Container>
           
           <ListGroup>
               <TransitionGroup className = "shopping-List">
                   {items.map(({_id,name})=>(
                       <CSSTransition key={_id} timeout = {500} classNames = "fade">
                           <ListGroupItem>
                            
                               <Button 
                               className = "remove-btn"
                               color="danger"
                               size = 'sm'
                               onClick = {()=>{
                                   this.props.deleteItem(_id);
                               }}
                               >
                                   &times;
                               </Button>
                               {name}
                           </ListGroupItem>
                       </CSSTransition>
       ))}
               </TransitionGroup>
           </ListGroup>

          </Container>
       );
   };

}



const mapStateToProps = (state)=>({
    item:state.item
})

export default connect (mapStateToProps,{getItems,deleteItem})(ShoppingList);