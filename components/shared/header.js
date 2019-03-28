import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
   render() { return (
      <View style={ styles.container }>
         <View style={ styles.innerbody }>
            <View style={ styles.left }>
               <Text style={ styles.font }>React Maps</Text>
            </View>
            <View style={ styles.right }>
               <Text style={{ ...styles.alignment, ...styles.font }}>
                  { this.props.label }
               </Text>
            </View>
         </View>
      </View>
   )}
}

const styles = {
   container: {
      backgroundColor: '#6A94E1',
      borderBottomWidth: 1,
      borderBottomColor: '#4A94D2',
      flex: 1,
   },
   innerbody: {
      flex: 1,
      flexDirection: 'row',
      paddingLeft: 13,
      paddingRight: 13
   },
   left: {
      flex: 1,
      justifyContent: 'center',
   },
   right: {
      flex: 2,
      justifyContent: 'center'
   },
   alignment: {
      textAlign: 'right',
   },
   font: {
      fontSize: 15,
      fontFamily: 'verdana',
      color: 'white',
      textShadowColor: '#0E375C',
      textShadowOffset: {
         width: 1,
         height: 1
      },
      textShadowRadius: 1
   }
}

export default Header;