import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import{ useEffect, useState } from 'react'

const UserPage = () => {
const [users, setUsers] = useState([]);

 useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
 },[]);

 const Item = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
   
  });

export default UserPage