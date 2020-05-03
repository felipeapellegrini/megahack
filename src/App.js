import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { marketActions } from './actions/market.actions'; 



class Product extends React.Component {
  createProduct = () => {
    this.props.actions.addProduct ({
      name: 'produto-teste'
    })
  }
  render(){  
  return (
    <div>
      <div>
        {this.props.market.products.map(product => (
          <div> {product.name}</div>
        ))}
      </div>
      <button onClick = {this.createProduct}>Criar Produto</button>
    </div>
  );
        }
}

const mapStateToProps = state => ({
  market: state.market
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, marketActions), dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);
