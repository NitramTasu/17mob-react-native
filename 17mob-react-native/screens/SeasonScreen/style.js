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
    flexDirection:"column",
    justifyContent:"center"
  },
  icon:{
    width:100,
    height:100,
    marginRight:20,
    marginLeft:20
  },
  driverButton:{
    backgroundColor:"black",
    borderWidth: 0.5,
    borderColor:"red",
    alignItems:"center",
    justifyContent:"center"

  },
  label:{
    color:"red",
    marginBottom:10,
  }
});

export default styles;
