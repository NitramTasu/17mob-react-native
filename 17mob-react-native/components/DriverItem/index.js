import React from "react";
import {View, Text, Button} from "react-native";

class DriverItem extends React.Component{

    render(){
        return <View><Text>{this.props.item.driverId}</Text></View>
    }
}

export default DriverItem;