import React, { PureComponent } from "react";
import { View, Text, Button } from "react-native";

class SeasonScreen extends React.Component {

    state = {
        selectedSeason: "1"
    }
    static navigationOptions = (props) => {
        return {
            title: props.navigation.state.params.season,  
            headerStyle: {
                backgroundColor: '#333',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            headerRight: (
                <Button
                    onPress={(teste) => this.alert(teste)}
                    title="Info"
                    color="#fff"
                />
            ),
        }
    };

    static navigationOptions = (props) => {
        

    };

    componentDidMount() {
        this.setState(
            {
                selectedSeason: this.props.navigation.getParam('season')
            }
        )
    }


    render() {
        return (

            <View><Text>{this.state.selectedSeason.season}</Text></View>
        )
    }

}

export default SeasonScreen;