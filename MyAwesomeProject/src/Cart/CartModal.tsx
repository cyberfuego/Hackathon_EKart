import React from 'react';
import {Component} from 'react';
import {Modal, Image, Text, View, StyleSheet} from 'react-native';

const DisplayCart = (props:any) => {
    return(
    <Modal visible={ props.display } animationType = "slide"  onRequestClose = { () => console.log('closed') } >
        <View style = {{ alignContent: "center", justifyContent: "center", marginTop: 20,
            marginLeft: 75,
            height: 400, backgroundColor: "lightyellow",
            width: 200 }}>
            <Text style = {{alignContent: "center", marginLeft: 40}}>
                {props.data}
            </Text>
        </View>
    </Modal>
    )
}

export default DisplayCart;