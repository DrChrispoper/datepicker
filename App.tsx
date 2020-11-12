import React, { Component } from "react";
import { SafeAreaView } from "react-navigation";
import { Provider } from "react-redux";
import AppContainer from "./src/navigation/AppNavigation";
import configureStore from "./src/redux/store";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store}>
            <AppContainer />
        </Provider>
      </SafeAreaView>
    );
  }
}

