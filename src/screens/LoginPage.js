import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';



const LoginPage = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false)
  const [loaded] = useFonts({
    OpenSans: require('../../assets/fonts/open-sans/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  // console.log("userName"+userName+"password"+password);
  // console.log('console.log');
  const submit = () => {
    if (userName == "Fasih" && password == "uddin") {
      Alert.alert(`Thanks you ${userName}`)
      navigation.navigate("home", { myName: `${userName}` })
    }
    else {
      Alert.alert("username and password is incorrect")
    }

  }



  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Form</Text>
      <Text style={styles.description}>
        You can reach anytime via fasihuddin@test.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          value={userName}
          onChangeText={setUserName}
        />

      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

      </View>

      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : undefined}

        />
        <Text style={styles.wrapperText}>I have read and agreed with the TC</Text>

      </View>

      <TouchableOpacity
        style={
          [
            styles.buttonStyle,

            {
              backgroundColor: agree ? "#4630EB" : "grey",
            },
          ]

        }

        disabled={!agree}

        onPress={submit}

      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )


};


const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    color: "#fff"

  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',

  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: 'OpenSans',
  },


  inputContainer: {
    marginTop: 20,
  },

  labels: {
    fontSize: 18,
    color: "#7d7d7d",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "OpenSans"

  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontFamily: "OpenSans",
    fontSize: 18
  },
  wrapper: {
    // paddingHorizontal: 10,
    // paddingVertical: 15,
    // paddingBottom: 30,
    flexDirection: "row",
    // justifyContent:'center',
    alignItems: "center",
    marginTop: 15,
    marginBottom: 10
    // alignContent:"center"

  },

  wrapperText: {
    paddingLeft: 15,
    marginTop: 0,
  },

  buttonStyle: {
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '600'
  },


})


export default LoginPage;

