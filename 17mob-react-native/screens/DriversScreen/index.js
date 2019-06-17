import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView,ActivityIndicator } from "react-native";
import { FlatList } from "react-navigation";
import DriverItem from "../../components/DriverItem/index"
import {getDrivers} from '../../services/ApiServices';

class DriversScreen extends React.Component {
  state = {
    selectedSeason: "1",
    loading: true
  };
  static navigationOptions = props => {
    return {
      title: "Lista de Pilotos",
      headerStyle: {
        backgroundColor: "red"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      },
    };
  };
  
  componentWillMount(){
    this.setState({
        selectedSeason: this.props.navigation.getParam("season")
      });
  }

  componentDidMount() {
    this.renderDrivers();
  }

  renderDrivers() {
    getDrivers(this.state.selectedSeason.season)
      .then(res => res.json())
      .then(resp => {
        const drivers = resp.MRData.DriverTable.Drivers;
        console.log('drivers', drivers)
        this.setState({
            drivers: drivers,
            loading:false
        });
      });
  }


  render() {
    return (
      <SafeAreaView>
        {this.state.loading ? (
          <ActivityIndicator size="large" color="red" />
        ) : (
        <FlatList
          data={this.state.drivers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            return <DriverItem click={this.onCallBack} item={item} />;
          }}
        />
        )}
        
      </SafeAreaView>
    );
  }
}

export default DriversScreen;
