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
import React from 'react'

const PostList = ({ route }) => {
  
  return (
    <View style={styles.pageCnt}>
      <View style={{backgroundColor:'#eee', borderRadius:'100%', padding: 20,width:150, height:150, bottom:380,position: 'absolute',zIndex: 1}}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/woman.png')}
      />
      </View>
      
      <View style={{backgroundColor:'red',height:350,width: 'auto',width:300,borderRadius:12}}>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    pageCnt : {
      padding:10,
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white"
    },
    tinyLogo: {
      width:110,
      height:110,
    }
});;
export default PostList