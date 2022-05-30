import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import UserAdres from "../components/UserAdres"

const UserDetail = ({ route }) => {
  const [userDetail, setUserDetail] = useState("");

  useEffect(() => {
    userDetailAPI();
  }, []);
  const userDetailAPI = () => {
    if (route.params.user) {
      fetch(route.params.user)
        .then((res) => res.json())
        .then((data) => setUserDetail(data));
    }
  };

  return (
    <>
      {typeof userDetail.company != "undefined" ? (
        <View style={styles.mainConainer}>
          <View style={styles.Information}>
            <View style={{flex: 3, padding:20, justifyContent:'center',alignItems: 'center'}}>
              <Ionicons name="person" size={30} color="tomato" style={{flex: 1, marginBottom:10}} />
              <Text style={{flex: 1, fontSize: 18, fontWeight: 'bold', borderBottomColor: 'black', borderBottomWidth: 1,color: 'black'}}>{userDetail.name}</Text>
            <View style={{flex:1, flexDirection: 'row'}}>
              <Ionicons name="bookmark" size={18} color="green" style={{marginRight:5}}></Ionicons><Text style={{fontSize: 15,fontWeight: '200'}}>{userDetail.username}</Text>
            </View>
              
              
              
            </View>
          </View>
          <Text style={{fontSize:18,marginBottom:5, fontWeight: 'bold',color:'#393C5D'}}>Contact Information</Text>
          <View style={styles.Adress}>
            <View style={{flex:1, flexDirection: 'row'}}>
              <Ionicons name="mail" size={18} color="#B0B2D3" style={{marginRight:10}}></Ionicons><Text style={{fontSize: 15,fontWeight: '500',color: 'white'}}>{userDetail.email}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <Ionicons name="call" size={18} color="#B0B2D3" style={{marginRight:10}}></Ionicons><Text style={{fontSize: 15,fontWeight: '500',color: 'white'}}>{userDetail.phone}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <Ionicons name="globe" size={18} color="#B0B2D3" style={{marginRight:10}}></Ionicons><Text style={{fontSize: 15,fontWeight: '500',color: 'white'}}>{userDetail.website}</Text>
            </View>
            <View style={{flex:1, flexDirection: 'row'}}>
                <Ionicons name="location" size={18} color="#B0B2D3" style={{marginRight:10}}></Ionicons><Text style={{fontSize: 14,fontWeight: '500',color: 'white'}}>{userDetail.address.street},{userDetail.address.suite},{userDetail.address.city}</Text>
            </View>
          </View>
          <Text style={{fontSize:18,marginBottom:5, fontWeight: 'bold',color:'#393C5D'}}>Company</Text>
          <View style={styles.Job}>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <Ionicons name="business" size={18} color="#D1CB12" style={{marginRight:5}}></Ionicons><Text style={{fontSize: 15,fontWeight: '500',color: 'white'}}>{userDetail.company.name}</Text>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <Ionicons name="megaphone" size={18} color="#D1CB12" style={{marginRight:5}}></Ionicons><Text style={{fontSize: 14,fontWeight: '500',color: 'white'}}>{userDetail.company.catchPhrase}</Text>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>
                    <Text style={{fontSize: 14,fontWeight: '500',color: 'white'}}>{userDetail.company.bs}</Text>
                </View>
          </View>
        </View>
      ) : (
          <>
        <View style={{flex:1 , justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#00ff00" />
        </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  mainConainer: {
    flex: 3,
    backgroundColor: "#DEEEEF",
    padding: 15,
  },
  Information: {
    flex: 1,
    backgroundColor: "#85DEFB",
    borderRadius: 12,
    marginBottom: 10,
  },
  Adress: {
    flex: 1,
    backgroundColor: "#3E459B",
    borderRadius: 12,
    marginBottom: 10,
    padding: 15,
  },
  Job: {
    flex: 1,
    backgroundColor: "#AF5931",
    borderRadius: 12,
    marginBottom: 10,
    padding: 15,
  },
});

export default UserDetail;
