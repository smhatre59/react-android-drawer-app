var theme = ({
  darkBlue:"#303F9F",
  primaryBlue:"#3F51B5",
  textColor:"#ffffff",
})
var styles = ({
  //container styles
  container: {
    flex: 10,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainContent:{
    flex: 9,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
  //header styles
  header: {
    flex:1,
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: theme.primaryBlue,
    top: 0,
    alignSelf: "stretch",
  },
  headerLeftIcon:{
    flex:0.12,
    alignItems:"center",
  },
  headerCenterView:{
    flex:0.76,
    alignItems:"center",
  },
  headerRightIcon:{
    flex:0.12,
    alignItems:"center",
  },
  headerText:{
    color:"#ffffff",
  },
  //drawer styles
  drawerMain:{
    flex: 10,
    backgroundColor: "#212121",
    alignSelf: "stretch",
    justifyContent:"center"
  },
  drawerText:{
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
    color:theme.textColor,
  },
  drawerIcon:{
    marginLeft:10,
  },
  drawerItem:{
    height:50,
    
    alignItems:"center",
    flexDirection:"row",
    borderBottomColor:"#727272",
    borderBottomWidth: 1,
  },
  profileContainer:{
    height:150,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    borderBottomColor:"#727272",
    borderBottomWidth: 1,
  },
  profileText:{
    margin: 10,
    fontSize: 15,
    textAlign: 'left',
    color:theme.textColor,
  }
});

export default styles;
