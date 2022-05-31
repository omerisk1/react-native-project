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
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Axios from "axios";

const UserPage = ({ navigation }) => {
  const [filterData, setFilterData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [search, setSearch] = useState("");
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userAPI();
  }, []);

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.username
          ? item.username.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(masterData);
      setSearch(text);
    }
  };

  const userAPI = async () => {
    const Url = "https://jsonplaceholder.typicode.com/users";
    await fetch(Url)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson);
        setMasterData(responseJson);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Users = ({ item }) => {
    return (
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#e4eee6",
          marginBottom: 15,
          padding: 20,
          marginTop: 20,
          borderRadius: 6,
          borderWidth: 0.3,
          borderColor: "#1075a9",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 3 },
          shadowOpacity: 0.3,
          shadowRadius: 5,
        }}
      >
        <Text style={styles.users}>{item.username}</Text>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => {
            navigation.navigate("User Detail", {
              user: "https://jsonplaceholder.typicode.com/users/" + item.id,
            });
          }}
        >
          <Text style={{ color: "white" }}>Go Profile</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" color="#0000ff" />
      ) : (
        <>
          <View style={{ padding: 10 }}>
            <Image
              source={require("../../assets/search.png")}
              style={styles.searchIcon}
            ></Image>
            <TextInput
              style={styles.textInputStyle}
              value={search}
              placeholder="Search Username"
              underlineColorAndroid="transparent"
              onChangeText={(text) => searchFilter(text)}
            />
            <FlatList
              data={filterData}
              keyExtractor={(item) => item.id}
              renderItem={Users}
              contentContainerStyle={{ paddingBottom: 50 }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c8ebed",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  users: {
    padding: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  textInputStyle: {
    height: 40,
    borderWidth: 0.3,
    borderColor: "#eee",
    paddingLeft: 35,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#eee",
    borderRadius: 12,
  },
  searchIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    zIndex: 1,
    marginTop: 25,
    marginLeft: 25,
    opacity: 0.5,
  },
  profile: {
    backgroundColor: "#4068E5",
    padding: 10,
    borderRadius: 12,
  },
});

export default UserPage;
