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
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const UserAdres = (props) => {
  console.log(props);
  return (
    <>
      {typeof props.company != "undefined" ? (
        <>
          <View style={styles.Information}>
            <View
              style={{
                flex: 3,
                padding: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="person"
                size={40}
                color="green"
                style={{ flex: 1 }}
              />
              <Text
                style={{
                  flex: 1,
                  fontSize: 18,
                  fontWeight: "bold",
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                }}
              >
                {props.name}
              </Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons
                  name="mail"
                  size={20}
                  color="green"
                  style={{ marginRight: 5 }}
                ></Ionicons>
                <Text style={{ fontSize: 15, fontWeight: "500" }}>
                  {props.email}
                </Text>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 18, marginBottom: 5 }}>Adress</Text>
          <View style={styles.Adress}>
            <Text>{props.company.bs}</Text>
          </View>
          <View style={styles.Job}>
            <Text></Text>
          </View>
        </>
      ) : (
        <Text>"Bir hata oluştu"</Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  Information: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 12,
    marginBottom: 10,
  },
  Adress: {
    flex: 1,
    backgroundColor: "blue",
    borderRadius: 12,
    marginBottom: 10,
  },
  Job: {
    flex: 1,
    backgroundColor: "purple",
    borderRadius: 12,
    marginBottom: 10,
  },
});
export default UserAdres;
