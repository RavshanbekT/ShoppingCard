import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/appNavbar';
import ShoppingList from './components/shoppingList';
import './app.css';
import ItemModal from './components/itemModal';
import {Container} from 'reactstrap';
const  App = ()=> {
  return (
    <div>
      <AppNavbar/>
      <Container>
      <ItemModal/>
      <ShoppingList/>
      </Container>
      
    
      
    </div>
  );
}

export default App;
