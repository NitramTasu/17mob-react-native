import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

class SeasonItem extends React.Component {
  clickEvent = () => {
    this.props.click(this.props.item);
  };

  render() {
    return <Button onPress={this.clickEvent} title={this.props.item.season} />;
  }
}

export default SeasonItem;
