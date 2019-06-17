import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 24,
    textAlign:'center',
    marginBottom: 20,
    marginTop: 20
  },
  container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center"
  },
  icon:{
    width:100,
    height:100
  },
  driverButton:{
    flexDirection: 'column',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
    borderWidth: 0.5,
    borderColor:"red",
    textAlign: "center"

  },
  label:{
    color:"red",
    marginBottom:10,
  },
  resultsButton:{
    flex:1

  }
});

export default styles;
