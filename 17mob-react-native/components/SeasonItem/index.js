import React, { PureComponent } from "react";
import { View, Text, Button , TouchableOpacity} from "react-native";
import styles from "./style";
class SeasonItem extends React.Component {
  
  clickEvent = () => {
    this.props.click(this.props.item);
  };
  
  componentWillMount(){
    this.setState({
      season: this.props.item.season,
    })
  }

  render() {
    return (
      <View >
        <TouchableOpacity
          onPress={this.clickEvent}
        >
        <Text style={styles.button}>{this.state.season}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SeasonItem;
