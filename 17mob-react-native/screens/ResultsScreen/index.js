import React, { PureComponent } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { FlatList } from "react-navigation";
import ResultItem from "../../components/ResultItem/index";

class ResultsScreen extends React.Component {
  state = {
    selectedSeason: "1",
    loading: true
  };
  static navigationOptions = props => {
    return {
      title: "Corridas e Colocações",
      headerStyle: {
        backgroundColor: "red"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  componentWillMount() {
    this.setState({
      selectedSeason: this.props.navigation.getParam("season")
    });
  }

  componentDidMount() {
    this.renderDrivers();
  }

  renderDrivers() {
    fetch(
      `http://ergast.com/api/f1/${
        this.state.selectedSeason.season
      }/results.json`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(res => res.json())
      .then(resp => {
        const races = resp.MRData.RaceTable.Races;
        this.setState({
          races: races,
          loading: false
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
            data={this.state.races}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return <ResultItem item={item} />;
            }}
          />
        )}
      </SafeAreaView>
    );
  }
}

export default ResultsScreen;
