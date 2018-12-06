/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import CounterValue from './src/reducers/CounterValue';

const initialState ={
  counter:0
}
const reducer = (state = initialState,action) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
      return{counter:state.counter+1}
    case 'DECREASE_COUNTER':
      return{counter:state.counter-1}
   
  }
    return state
}
const store = createStore(reducer)

export default class App extends Component{
  render() {
    return (
       <Provider style={styles.container} store={store}>
           <CounterValue />
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
  }
})
