import React, { PureComponent } from "react";
import { View, Text, Button } from "react-native";

class SeasonScreen extends React.Component {
  state = {
    selectedSeason: "1"
  };
  static navigationOptions = props => {
    return {
      title: props.navigation.state.params.season,
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerRight: (
        <Button
          onPress={teste => this.alert(teste)}
          title="Info"
          color="#fff"
        />
      )
    };
  };

  static navigationOptions = props => {};
  

  componentDidMount() {
    console.log('test', this.props.navigation)
    this.setState({
      selectedSeason: this.props.navigation.getParam("season")
    });
  }

  goToDrivers = () => {
    this.props.navigation.navigate("Drivers", { season: this.state.selectedSeason });
  }
  
  goToResults = () =>{
    this.props.navigation.navigate("Results", { season: this.state.selectedSeason });  
  }

  render() {
    return (
      <View>
        <Text>Teste aqui{this.state.selectedSeason.season}</Text>

        <Button onPress={this.goToDrivers} title="Pilotos"/>
        <Button onPress={this.goToResults} title="Resultado das Corridas"/>
      </View>
    );
  }
}

export default SeasonScreen;
