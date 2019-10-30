import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

class url extends React.Component {
  static navigationOptions = {
    title: 'Referensi',
    headerStyle: {
      backgroundColor: '#73c6b6',,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.utama}>Referensi</Text>
        <View style={styles.ref}>
          <Text> https://doktersehat.com/tips-sehat-dan-bugar/ </Text>
          <Text> https://hellosehat.com/penyakit/obesitas-kegemukan/ </Text>
          <Text>
            {' '}
            https://www.alodokter.com/penyebab-lain-pertambahan-berat-badan{' '}
          </Text>
          <Text>
            {' '}
            https://beautynesia.id/3148/article/health-food/manfaat-memiliki-berat-badan-ideal-bagi-wanita{' '}
          </Text>
          <Text>
            {' '}
            https://beautynesia.id/3148/article/health-food/manfaat-memiliki-berat-badan-ideal-bagi-wanita{' '}
          </Text>
          <Text>
            Sumber Icons : https://icon-icons.com/id/pack/The-Cave-Man/2012{' '}
          </Text>
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
  ref: {
    // justifyContent: 'center',
    fontSize: 18,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    width: 250,
    height: 100,
    textAlign: 'center',
  },
});

export default url;
