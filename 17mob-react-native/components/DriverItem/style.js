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
    width:50,
    height:50,
    marginRight:20,
    marginLeft:20
  },
  driverLine:{
    flexDirection: 'row',
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"black",
    borderWidth: 0.5,
    height:80,
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
