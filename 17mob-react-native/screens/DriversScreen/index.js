import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { FlatList } from "react-navigation";
import DriverItem from "../../components/DriverItem/index"

class DriversScreen extends React.Component {
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
  
  componentWillMount(){
    this.setState({
        selectedSeason: this.props.navigation.getParam("season")
      });
  }

  componentDidMount() {
    this.renderDrivers();
  }

  renderDrivers() {
    fetch(`http://ergast.com/api/f1/${this.state.selectedSeason.season}/drivers.json?limit=10`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resp => {
        const drivers = resp.MRData.DriverTable.Drivers;
        console.log('drivers', drivers)
        this.setState({
            drivers: drivers
        });
      });
  }


  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.drivers}
          keyExtractor={item => item.driver}
          renderItem={({ item }) => {
            return <DriverItem click={this.onCallBack} item={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

export default DriversScreen;
