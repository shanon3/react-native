import React from 'react';
import {View, Text, Picker, TextInput, Button} from 'react-native';

class Persegi extends React.Component {
  //1# inisialisasi State
  state = {panjang: 0, lebar: null, luas: null, rumus: null, hitungan: null};
  //#2 Method untuk merubah state luas
  hitungLuas = () => {
    let panjang = this.state.panjang; //tampung nilai state akhir pada variabel panjang
    let lebar = this.state.lebar; //tampung nilai state akhir pada variabel lebar
    // let luas = parseInt(panjang) * parseInt(lebar); //menghitung luas persegi variabel panjang dan luas harus di konversikan ke int karena asalnya string
    // let luas;

    if (this.state.rumus === 'luas') {
      hitungan = parseInt(panjang) * parseInt(lebar);
    } else {
      hitungan = 2 * (parseInt(panjang) + parseInt(lebar));
    }

    this.setState({luas: hitungan}); //set state luas
    console.log(this.state);
  };

  render() {
    //#3 read component state
    let currentValue = this.state.value;
    return (
      <View>
        <Text> Hitung Luas Persegi Panjang </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Masukan panjang"
          onChangeText={InputPanjang => this.setState({panjang: InputPanjang})}
          value={this.state.panjang}
        />
        <TextInput
          style={{height: 40}}
          placeholder="Masukan Lebar"
          onChangeText={InputLebar => this.setState({lebar: InputLebar})}
          value={this.state.lebar}
        />
        <Picker
          selectedValue={this.state.rumus}
          style={{height: 100, width: 300}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({rumus: itemValue})
          }>
          <Picker.Item label="Pilih tipe" value="" />
          <Picker.Item label="luas" value="luas" />
          <Picker.Item label="keliling" value="keliling" />
        </Picker>

        <Button
          title="Hitung Luas"
          onPress={() => {
            this.hitungLuas();
          }}
        />
        <Text>{this.state.luas}</Text>
      </View>
    );
  }
}

export default Persegi;
