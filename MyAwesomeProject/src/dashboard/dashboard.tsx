import * as React from 'react';
import { View, Text, Button, Alert, StyleSheet, ImageBackground ,TouchableOpacity} from 'react-native';




class Dashboard extends React.Component<any, any>  {

  static navigationOptions = {
    header: null,
  }

  _onPress=()=> {
   console.log('navigation',this.props.navigation);
   this.props.navigation.navigate('Home',{id:1})
  }

  

  public render() {
    console.log('inside dashboard');
    return (
      <View>

        <View >
          <ImageBackground style={imageStyle.imgStyle} source={require('../app/assets/img_background.jpg')} >
            <Text style={{ textAlign: 'right', fontFamily: 'Midtown', marginTop: 50, marginEnd: 50, fontSize: 60, color: "#841584" }}>
              FashionMania
             </Text>
            <TouchableOpacity onPress={()=>this._onPress()} style={styles.btnStyle} activeOpacity = {0.8}>
              <Text style={{color:"#FFFFFF",fontSize: 30}}>
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
    width: "40%",
    height: 60,
    marginBottom: 36,
    flexDirection:"row",
    backgroundColor:"#841584",
     justifyContent: 'center',
     alignItems:'center',
    bottom:0,
    position:"absolute",
    alignSelf: 'center',
    },


});





const imageStyle = StyleSheet.create({
  imgStyle: {
    width: '100%', height: '100%',
  },


});



export default Dashboard;
