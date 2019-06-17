import React, { PureComponent } from "react";
import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import styles from "./style";

class SeasonScreen extends React.Component {
  state = {
    selectedSeason: "1"
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Temporada`,
      headerStyle: {
        backgroundColor: "red"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
      // headerRight: (
      //   <Button
      //     onPress={teste => this.alert(teste)}
      //     title="Info"
      //     color="#fff"
      //   />
      // )
    };
  };

  componentDidMount() {
    console.log("test", this.props.navigation);
    this.setState({
      selectedSeason: this.props.navigation.getParam("season")
    });
  }

  goToDrivers = () => {
    this.props.navigation.navigate("Drivers", {
      season: this.state.selectedSeason
    });
  };

  goToResults = () => {
    this.props.navigation.navigate("Results", {
      season: this.state.selectedSeason
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.selectedSeason.season}</Text>
        <TouchableOpacity
          style={styles.driverButton}
          onPress={this.goToDrivers}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/f1-helmet.png")}
          />
          <Text style={styles.label}> Pilotos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.driverButton}
          onPress={this.goToResults}
        >
          <Image
            style={styles.icon}
            source={require("../../assets/f1-track.png")}
          />
          <Text style={styles.label}>Resultado das Corridas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SeasonScreen;
