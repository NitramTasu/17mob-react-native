import React, { PureComponent } from "react";
import { View } from "react-native";
import { Button, Text } from "native-base";

class Seasons extends PureComponent {
  renderSeasons() {
    let items = [];

    /* fetch("http://ergast.com/api/f1.json", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resp => console.log(resp.MRData.RaceTable)); */

    for (let i = 0; i < 20; i++) {
      const year = "20" + (i > 9 ? i : `0${i}`);
      items.push(
        <Button onPress={() => this.props.handleClick(year)} key={i}>
          <Text>{year}</Text>
        </Button>
      );
    }

    return items;
  }

  render() {
    return <View>{this.renderSeasons()}</View>;
  }
}

export default Seasons;
