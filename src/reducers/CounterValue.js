// import -npm modules
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux'

class CounterValue extends Component{
    render(){
        return(
            <View>
               <View style={styles.counter}>
                    <TouchableOpacity onPress={() =>this.props.increaseCounter()}>
                        <Text style={{color:'red'}}>INC</Text>
                    </TouchableOpacity>
                        <Text>{this.props.counter}</Text>
                    <TouchableOpacity onPress={() =>this.props.decreaseCounter()}>
                        <Text style={{color:'green'}}>DEC</Text>
                    </TouchableOpacity>
               </View>
            </View>
        )
    }
}

function mapStateToProps(state){
  return{
      counter:state.counter
  }
}

function mapDispatchToProps(dispatch){
    return{
        increaseCounter : () => dispatch({type:'INCREASE_COUNTER'}), //increment counter value
        decreaseCounter : () => dispatch({type:'DECREASE_COUNTER'}), //decrement counter value
    }
  }


export default connect(mapStateToProps,mapDispatchToProps)(CounterValue);

const styles = StyleSheet.create({
    counter:{
        flexDirection:'row',
       justifyContent:'space-around',
       width:200
    }
})