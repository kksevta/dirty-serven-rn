import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, tab } from 'react-native';
import { store } from './redux-store/root-store';
import { setAuthTokenAction, setLiveDataAction } from './redux-store/actions/app-actions'
export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      section: 'enterName',
      token: '',
      txtInputPlayerName: ''
    }
    var self = this;
    store.subscribe(() => {
      const storeState = store.getState();
      console.log(storeState);
      self.setState({
        token: storeState ? storeState.app.authToken : 'NAHI MILA'
      })
    })
  }


  sendRequest(url, body) {
    return fetch('http://localhost:3000' + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  }


  continueWithPlayerName() {
    const self = this;
    if (this.state.txtInputPlayerName) {
      this.sendRequest('/api/continueplaywithname/', { playerName: this.state.txtInputPlayerName }).then((response) => {
        response.headers.forEach(function (val, key) {
          if (key == 'token') {
            store.dispatch(setAuthTokenAction(val));
            self.setState({
              section: 'menu'
            })
          }
        });
      })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  render() {

    if (this.state.section === 'enterName') {
      return (
        <View style={styles.container}>
          {/* <Text>Kindly Enter Your Name</Text> */}
          <TextInput
            onChangeText={(text) => this.setState({ txtInputPlayerName: text })}
            value={this.state.txtInputPlayerName}
          />
          <Button
            onPress={() => {
              this.continueWithPlayerName()
            }}
            title="Continue"
          />
        </View>
      );
    }


    else if (this.state.section === 'menu') {
      return (
        <View style={styles.container}>
          <Text>{this.state.token}</Text>
        </View>
      );
    }

    else if (this.state.section === 'waiting') {
      return (
        <View style={styles.container}>
          <Text>{this.state.token}</Text>
        </View>
      );
    }
    else if (this.state.section === 'menu') {
      return (
        <View style={styles.container}>
          <Text>{this.state.token}</Text>
        </View>
      );
    }
    else if (this.state.section === 'play') {
      return (
        <View style={styles.container}>
          <Text>{this.state.token}</Text>
        </View>
      );
    }

    else if (this.state.section === 'finish') {
      return (
        <View style={styles.container}>
          <Text>{this.state.token}</Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
