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
    justifyContent:"center",
    marginLeft:20
  },
  icon:{
    width:50,
    height:50,
    marginRight:20,
    marginLeft:20,
    marginTop:10
  },
  label:{
    color:"red",
    marginBottom:10,
    marginTop:20,
  },
  resultsButton:{
    flex:1

  }
});

export default styles;
