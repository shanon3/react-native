import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class ideal extends React.Component {
  static navigationOptions = {
    title: 'Ideal',
    headerStyle: {
      backgroundColor: '#73c6b6',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.utama}>
          Keuntungan Memiliki Berat Badan Ideal
        </Text>
        <Text style={styles.subUtama}> Terhindar dari Penyakit Kanker </Text>
        <Text style={styles.subKedua}>
          {' '}
          Terhindar dari Serangan Jantung{' '}
        </Text>
        <Text style={styles.subKetiga}> Lebih Mudah Berkonsentrasi </Text>
        <Text style={styles.subKeempat}> Bebas dari Tekanan </Text>
        <Text style={styles.subKelima}> Terhindar dari Penyakit Gusi </Text>

        <View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Tips tubuh sehat</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  utama: {
    margin: 20,
    // textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    // alignContent: 'center',
  },
  subUtama: {
    // justifyContent: 'center',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60,
    backgroundColor: 'pink',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
  subKedua: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60,
    backgroundColor: '#bcb8b1',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
  subKetiga: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60,
    backgroundColor: '#aeb4a9',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
  subKeempat: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60,
    backgroundColor: '#9d8ca1',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
  subKelima: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 200,
    height: 60,
    backgroundColor: '#646b5e',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
  button: {
    width: 150,
    height: 50,
    // alignContent: 'center',
    textAlign: 'center',
    elevation: 5,
    backgroundColor: 'yellow',
    padding: 10,
    marginLeft: 150,
    marginTop: 30,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default ideal;
