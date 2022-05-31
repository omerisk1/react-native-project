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
import React, { useState, useEffect } from "react";

const PostList = ({ route }) => {
  const [postDetail, setPostDetail] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postDetailAPI();
    userDetailAPI();
  }, []);
  const postDetailAPI = () => {
    if (route.params.post) {
      fetch(route.params.post)
        .then((res) => res.json())
        .then((data) => setPostDetail(data));
      setLoading(false);
    }
  };
  const userDetailAPI = () => {
    if (route.params.userId) {
      fetch(route.params.userId)
        .then((res) => res.json())
        .then((data) => setUserDetail(data));
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ flex: 2 }}>
      {loading ? (
        <>
          <ActivityIndicator size="small" color="#0000ff" />
        </>
      ) : (
        <>
          <View style={styles.container}>
            <View style={styles.user}>
              <View
                style={{
                  backgroundColor: "#C0F6BA",
                  width: 110,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "100%",
                  flex: 2,
                }}
              >
                {userDetail.id == 1 ? (
                  <>
                    <Image
                      style={styles.tinyLogo}
                      source={require("../../assets/woman.png")}
                    />
                  </>
                ) : (
                  <>
                    <Image
                      style={styles.tinyLogo}
                      source={require("../../assets/woman2.png")}
                    />
                  </>
                )}
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{ fontWeight: "800", fontSize: 17, marginTop: 15 }}
                >
                  {userDetail.name}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: "500", fontSize: 14 }}>
                  {userDetail.email}
                </Text>
              </View>
            </View>

            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              Post
            </Text>

            <View style={styles.post}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white'}}>Title</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{color: 'white'}}>{postDetail.title}</Text>
              </View>
              <View style={{ flex: 1, marginTop: 5,}}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: 'white' }}>Body</Text>
              </View>
              <Text style={{color: 'white'}}>{postDetail.body}</Text>
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#C0F6BA",
    padding: 30,
  },
  user: {
    flex: 1,
    backgroundColor: "#2DE919",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  post: {
    flex: 1,
    backgroundColor: "#0A2078",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
});
export default PostList;
