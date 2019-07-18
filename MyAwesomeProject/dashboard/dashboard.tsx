import * as React from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';

class Dashboard extends React.Component<any, any>  {

  _onPress() {
    Alert.alert('Start Shopping!');
  }

  public render() {
    return (
      <View>

        <View >
          <ImageBackground style={imageStyle.imgStyle} source={require('../src/app/assets/img_background.jpg')} >
            <Text style={{ textAlign: 'right', fontFamily: 'Midtown', marginTop: 50, marginEnd: 50, fontSize: 60, color: "#841584" }}>
              FashionMania
             </Text>
            <TouchableOpacity onPress={this._onPress} style={styles.btnStyle}>
              <Text style={{color:"#FFFFFF"}}>
                START SHOPPING 
               </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

      </View>
    );
  }

}
const styles = StyleSheet.create({
  btnStyle: {
    width: "90%",
    height: 40,
    marginBottom: 36,
    flexDirection:"row",
    backgroundColor:"#841584",
     justifyContent: 'center',
     alignItems:'center',
    bottom:0,
    position:"absolute",
    marginLeft:20

  },


});

const imageStyle = StyleSheet.create({
  imgStyle: {
    width: '100%', height: '100%',
  },


});

export default Dashboard;
