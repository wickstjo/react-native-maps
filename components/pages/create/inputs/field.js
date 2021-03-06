import React, { Component } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';

class Field extends Component {

   // CREATE REFERENCE
   input_field = React.createRef();

   render() { return (
      <TouchableWithoutFeedback onPress={ () => { this.input_field.focus() } }>
         <View style={ styles.container }>
            <View style={ styles.left }>
               <Text>
                  { this.props.label }:
               </Text>
            </View>
            <View style={ styles.right }>
               <TextInput
                  placeholder={ `None` }
                  style={ styles.textbox }
                  ref={ component => this.input_field = component }
                  onChangeText={ this.props.func }
               />
            </View>
         </View>
      </TouchableWithoutFeedback>
   )}
}

const styles = {
   container: {
      backgroundColor: 'lightgray',
      borderBottomColor: '#BCBCBC',
      borderBottomWidth: 1,
      flex: 1,
      flexDirection: 'row',
   },
   left: {
      paddingLeft: 15,
      justifyContent: 'center',
   },
   right: {
      flex: 1,
      textAlign: 'right',
      paddingRight: 15,
      justifyContent: 'center',
   },
   textbox: {
      padding: 0,
      textAlign: 'right'
   }
}

export default Field;