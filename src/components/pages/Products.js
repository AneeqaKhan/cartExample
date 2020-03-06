import React, { Component } from 'react';
import {  
    View, 
    StyleSheet, 
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import  Product  from '../cart/product';
import { addToCart } from '../../redux/actions/cartActions';
import { fetchProducts } from '../../redux/actions/productAction';
import Logo from '../cart/logo';
import Cart from '../cart/cart';

class Products extends Component {
  static navigationOptions = ({navigation}) => {
    debugger
    return {
      headerTitle: 'Cart',
      headerLeft: <Logo navigation={navigation}/>,
      headerRight: <Cart navigation={navigation}/>
    }
  }
  constructor(props) {
      super(props);
  }

  componentWillMount = () => {
    this.props.fetchProducts();
  }

  addItemsToCart = (product) => {
    debugger
      this.props.addToCart(product);
  }

  render() {
    debugger
    const { products, navigation } = this.props
    return (
        <View style={styles.container}>
          
        <View style={styles.body}>
          <FlatList 
          data={products} 
          renderItem={({item}) => <Product item={item} addItemsToCart={this.addItemsToCart} product={item}/>}
          keyExtractor ={(item) => item.id}
          ItemSeparatorComponent= {()=> <View style={{height:0.5, backgroundColor:'#34495e90'}}/> }/>
        </View>
      </View>
 
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
      flex: 1,
      justifyContent: 'center'
    }
});
const mapStateToProps = (state) => ({
    products: state.products.items
})

export default connect(mapStateToProps, {addToCart,fetchProducts})(Products);
