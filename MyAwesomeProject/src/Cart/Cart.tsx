import React from 'react';
import {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import DisplayCart from '../Cart/CartModal';

interface Props {}
export default class Cart extends Component<Props> {

  state = {
    display: false,
    data: "Harshit"
  }
  
  triggerModal() {
    this.setState (prevState => {
      return {
        display: true,
        data: "No items added yet"
      }
    });
  }

  render() {
    return (
      <View style = {this.styles.modalContent}>
          <Text style = {this.styles.welcome} onPress = { () => this.triggerModal() } >Click to access cart</Text>
          <DisplayCart display = {this.state.display} data = {this.state.data} ></DisplayCart>
      </View>
    );
  }


  styles = StyleSheet.create({
    welcome: {
      fontSize: 25,
      textAlign: 'center',
      marginTop: 50
    },
    modalContent: {
      //left: 0,
      backgroundColor: '#FAFAFA',
    }
  });
}