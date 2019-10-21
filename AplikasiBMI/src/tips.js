import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class tips extends React.Component {
  static navigationOptions = {
    title: 'Tips Mempunyai Badan Sehat',
    headerStyle: {
      backgroundColor: '#73c6b6',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.utama}>
          Tips Sederhana untuk Memiliki Tubuh Sehat dan Bugar
        </Text>
        <Text style={styles.subUtama}> Buatlah Rencana dan Tanamkan Niat Untuk Hidup Sehat </Text>
        <Text style={styles.subKedua}>
          {' '}
          Mulai Mengatur Pola Makan Sehat{' '}
        </Text>
        <Text style={styles.subKetiga}> Lakukan Olahraga Favorit Secara Rutin </Text>
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
    width: 250,
    height: 80,
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
    width: 250,
    height: 80,
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
    width: 250,
    height: 80,
    backgroundColor: '#aeb4a9',
    textAlign: 'center',
    elevation: 5,
    borderRadius: 5,
    color: 'white',
  },
});

export default tips;
