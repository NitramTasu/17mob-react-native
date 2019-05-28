import React, { PureComponent } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import { FlatList } from "react-navigation";

class HomeScreen extends React.Component {

    state = {
        races: []
    }
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: (
            <Button
                onPress={() => alert('Foi!!!')}
                title="Info"
                color="#fff"
            />
        ),
    };

    renderSeasons() {
        fetch("http://ergast.com/api/f1.json", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(resp => {
                const races = resp.MRData.RaceTable.Races
                this.setState({
                    races: races
                })
            });
    }

    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={this.state.races}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <Text style={styles.text}>{item.name}</Text>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        );
    }


}




export default HomeScreen;