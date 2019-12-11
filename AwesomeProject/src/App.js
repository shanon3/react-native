import React from 'react';
import {View, Text} from 'react-native';
import AppStatles from './AppStatles';

class App extends React.Component {
  render() {
    console.log('Hello World');
    return  (
      <View>
        {/*
                <Ruang nama="Persegi" luas="Sisi x sisi" keliling="4 x sisi" />
                <Text></Text>

                <Ruang nama="Persegi Panjang" luas="Panjang x Lebar" keliling="2 x (panjang + lebar)" />
                <Text></Text>

                <Ruang nama="Jajar Genjang" luas="alas x tinggi" keliling="2 x (alas + sisi miring)" />
                <Text></Text>

                <Ruang nama="Belah Ketupat" luas="d1 x d2 / 2" keliling="4 x sisi" />
                <Text></Text>

                <Ruang nama="Layang-layang" luas="d1 x d2 / 2" keliling="2 x (sisi1 + sisi2)" />
                <Text></Text>
             */}

        <AppStatles
          nama="Randy"
          alamat="JKT"
          telp="021"
          email="randy@yahoo.com"
        />
      </View>
    );
  }
}

export default App;

