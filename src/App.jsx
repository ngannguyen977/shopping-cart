import React from 'react';
import Header from './components/Header';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import Message from './components/Message';
import Footer from './components/Footer';

class App extends React.Component{
  render(){
    return (
		<div className="hidden-sn animated deep-purple-skin">
				<div className="App">
				<Header />
				<main id = "mainContainer">
					<ProductsContainer />
					<Message />
					<CartContainer />
				</main>
				<Footer />
			</div>
		</div>
      
    );
  } 
}

export default App;