import * as React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import { isTemplateElement } from '@babel/types';
import { User } from '../..';

class HomeScreen extends React.Component<any, any>  {
  state = {
    data: [],
    loading: true
  }

  static navigationOptions = {
    title: 'Home',
  };

  componentDidMount = () => {
    console.log('idd', this.props.navigation.getParam('id'));
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch('https://randomuser.me/api?results=1000');
    const json = await response.json();
    this.setState({ loading: false })
    this.setState({ data: json.results });
  }


  returnData = (item: User) => {
    return `${item.name.first}`
  }

  returnExtractor = (index: any) => {
    if (index != null) {
      return index
    }
  }

  renderImage = (item: User) => {
    return item.picture.large
  }

  returnEmail = (item: User) => {
    return item.email
  }


  render() {

    if (this.state.loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size='large' color='#9C27B0' />
        </View>
      )
    }
    return (
      <FlatList
        data={this.state.data}
        keyExtractor={(x, i) => this.returnExtractor(i)}
        renderItem={({ item }) =>
          <View style={styles.Card}>
            <Image style={styles.Image} source={{ uri: this.renderImage(item) }} resizeMode="contain" />
            <Text style={styles.Name}>
              {this.returnData(item)}
            </Text>
            <Text style={styles.Email}>
              {this.returnEmail(item)}
            </Text>
          </View>}
        numColumns={2}
      />
    );
  }
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#BDBDBD',
    flex: 1,
    margin: 10,
    height: 200,
    borderRadius: 10,
    elevation: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },

  Image: {
    flex: 1,
    height: undefined,
    width: undefined,
    alignSelf: 'stretch',
    marginTop: 10,
    borderRadius: 75,
    borderWidth: 2,
  },

  Name: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },

  Email: {
    fontSize: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },

  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  }

});


export default HomeScreen;

