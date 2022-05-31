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
import Ionicons from "@expo/vector-icons/Ionicons";

const PostPage = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/?_limit=20")
      .then((res) => res.json())
      .then((data) => setPosts(data));
    setLoading(false);
  }, []);

  const Post = ({ item }) => {
    return (
      <>
        <View
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#C4F5F0",
            marginBottom: 15,
            marginTop: 20,
            borderRadius: 6,
            borderWidth: 0.3,
            borderColor: "#1075a9",
            padding: 10,
            height: 100,
            flex: 4,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.5,
            shadowRadius: 5,
          }}
        >
          <View style={{ flex: 3 }}>
            <Text style={styles.posts}>{item.title}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.profile}
              onPress={() => {
                navigation.navigate("Post Detail", {
                  post: "https://jsonplaceholder.typicode.com/posts/" + item.id,
                  userId:
                    "https://jsonplaceholder.typicode.com/users/" + item.userId,
                });
              }}
            >
              <Ionicons
                name="chevron-forward-circle-outline"
                size={40}
                color="red"
                style={{ marginLeft: 30 }}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <>
          <ActivityIndicator size="small" color="#0000ff" />
        </>
      ) : (
        <>
          <View style={{ padding: 10 }}>
            <FlatList
              data={posts}
              renderItem={Post}
              keyExtractor={(item) => item.id}
              initialNumToRender={20}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#F4F5C4"
  },

  posts: {
    padding: 5,
    fontSize: 13,
    fontWeight: "600",
  },
});

export default PostPage;
