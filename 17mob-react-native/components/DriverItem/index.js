import React from "react";
import { View, Text, Button, Image } from "react-native";
import styles from "./style";

class DriverItem extends React.Component {

formatName(name){
    return name.charAt(0).toUpperCase()+name.slice(1)
}
  render() {
    return (
      <View style={styles.driverLine}>
        <Image
          style={styles.icon}
          source={require("../../assets/f1-helmet.png")}
        />
        <Text style={styles.label}>{this.formatName(this.props.item.driverId)}</Text>
      </View>
    );
  }
}

export default DriverItem;
