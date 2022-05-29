import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Axios from "axios";
import axios from "axios";

const UserPage = () => {
  
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");
  
  useEffect(() => {
    userAPI();
  },[])

  const searchFilter = (text) => {
    if(text) {
      const newData = masterData.filter((item) => {
        const itemData = item.name 
        ? item.name.toUpperCase()
        : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    }
    else{
      setFilterData(masterData);
      setSearch(text);
    }
  }

  const userAPI = async () => {
    const Url = "https://jsonplaceholder.typicode.com/users";
    await fetch(Url)
    .then((response) => response.json())
    .then((responseJson) => {
      setFilterData(responseJson);
      setMasterData(responseJson);
    }).catch((error) => {
      console.error(error);
    })
  };

  const Users = ({item}) => {
    return(
    <View>
      <Text style={styles.users}>{item.name}</Text>
    </View>
    )
  }
  
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 10}}>
      <Image source={require('../../assets/search.png')} style={styles.searchIcon}></Image>
      <TextInput style={styles.textInputStyle}
      value={search}
      placeholder="Search"
      underlineColorAndroid="transparent"
      onChangeText={(text) => searchFilter(text)}
      />
      <FlatList 
        data={filterData}
        keyExtractor = {(item) => item.id}
        renderItem = {Users}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  
  },
  users: {
    padding: 10
  },
  textInputStyle : {
    height:40,
    borderWidth:0.3,
    borderColor: '#eee',
    paddingLeft:35,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'white',
    borderRadius: 12

  },
  searchIcon : {
    width:20,
    height:20,
    position: 'absolute',
    zIndex:1,
    marginTop: 25,
    marginLeft: 25,
    opacity: 0.5
  }
});

export default UserPage;
