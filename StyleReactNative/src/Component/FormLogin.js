import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,,
} from 'react-native';
// import {styles} from './FormLoginStyle'

export default class FormLogin extends Component {
  render() {
    return  (
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroud}
          source={require('../assets/background.jpg')}>
          <View>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
          </View>
          <Text style={styles.tulisanLogin}>Login Apps</Text>
          <View style={styles.formInput}>
            <Text style={styles.tulisanUP}>Username </Text>
            {/* <Text > Username */}
            <TextInput
              style={styles.username}
              placeholder="Input Username Anda"
            />
            {/* </Text> */}
            <Text style={styles.tulisanUP}>Password </Text>
            {/* <Text > password */}
            <TextInput
              style={styles.password}
              placeholder="Input Password Anda"
            />
            {/* </Text> */}
          </View>
          <View style={styles.button}>
            <Button style={styles.button} title="Submit" />
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginLeft: 20}}>
            <TouchableOpacity>
              <Image
                style={styles.app}
                source={require('../assets/facebook1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.app}
                source={require('../assets/instagram.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.app}
                source={require('../assets/twitter.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 20
  },
  backgroud: {
    // marginTop: 50,
    // alignItems: 'center',
    width: 360,
    height: 800,,
  },
  logo: {
    // alignItems: 'center'
    marginTop: 30,
    marginLeft: 30,
    height: 200,,
  },
  tulisanLogin: {
    alignItems: 'center',
    marginLeft: 90,
    marginBottom: 40,
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',,
  },
  tulisanUP: {
    alignItems: 'center',
    marginLeft: 134,
    color: 'white',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 18,,
  },
  username: {
    borderWidth: 1,
    marginBottom: 20,
    // fontSize: 18 ,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,,
  },
  password: {
    borderWidth: 1,
    marginBottom: 40,
    alignItems: 'center',
    marginLeft: 70,
    marginTop: 20,
    width: 200,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 20,,
  },
  button: {
    backgroundColor: 'blue',
    color: 'black',
    marginLeft: 120,
    width: 100,
  },
  app: {
    marginTop: 50,
    width: 80,
    height: 90,
    marginLeft: 20,,
    // alignItems: 'center'
  },,
});;

