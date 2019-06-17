import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView,ActivityIndicator } from "react-native";
import { FlatList } from "react-navigation";
import SeasonItem from "../../components/SeasonItem/index";
import styles from "./style";

class HomeScreen extends React.Component {
  state = {
    seasons: [],
    clickSeason: null
  };
  static navigationOptions = {
    title: "Temporadas",
    headerStyle: {
      backgroundColor: "red"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    },
    // headerRight: (
    //   <Button onPress={teste => this.alert(teste)} title="Info" color="#fff" />
    // )
  };
  componentDidMount() {
    this.renderSeasons();
  }

  renderSeasons() {
    fetch("http://ergast.com/api/f1/seasons.json?limit=1000", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(resp => {
        console.log('entrou aqui')
        const seasons = resp.MRData.SeasonTable.Seasons;
        this.setState({
          seasons: seasons
        });
      });
  }
  onCallBack = itemClicado => {
    this.props.navigation.navigate("SeasonScreen", { season: itemClicado });
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.seasons}
          keyExtractor={item => item.season}
          renderItem={({ item }) => {
            return <SeasonItem click={this.onCallBack} item={item} />;
          }}
        />
        <ActivityIndicator size="large" color="red" />
      </SafeAreaView>
    );
  }
}
export default HomeScreen;
