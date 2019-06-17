import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import styles from "./style"

class ResultItem extends React.Component {
  renderResult= () =>{
    
    let results = []

    for(let i = 0; i < 3; i++){
        results.push(<Text>{this.props.item.Results[i].Driver.familyName}</Text>)
    }
    return results
  }

  render() {
    return (<View>
                <Text style={styles.label}>{this.props.item.raceName}</Text>
               {this.renderResult()}
            </View>);
  }
}

export default ResultItem;
