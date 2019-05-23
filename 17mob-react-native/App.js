import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Seasons from "./components/Seasons/index";

export default class App extends React.Component {
  getData(season) {
    fetch(`http://ergast.com/api/f1/${season}.json`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resp => console.log(resp)
      
      <FlatList
  data={[{key: 'a'}, {key: 'b'}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>);
  }

  render() {
    return <Seasons handleClick={this.getData} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
