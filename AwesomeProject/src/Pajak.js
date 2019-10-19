import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

class Pajak extends React.Component {
  //1# inisialisasi State
  state = {gaji: 0, bayar: null, gajiTahun: null, pajak: null};
  //#2 Method untuk merubah state luas
  hitungPajak = () => {
    let gaji = this.state.gaji; //tampung nilai state akhir pada variabel panjang
    let OutputgajiTahun = parseInt(gaji) * 12;
    this.setState({gajiTahun: OutputgajiTahun}); ;//set state luas

    let OutputPajak, OutputBayar;

    if (OutputgajiTahun < 50000000) {
      console.log('di bawah 50 jt');
      OutputPajak = 0;
      OutputBayar = 'nihil';
    } else if (OutputgajiTahun >= 50000000 && OutputgajiTahun <= 240000000) {
      console.log('diatas 50-249 jt');;
      OutputPajak = 5;;
      OutputBayar = OutputgajiTahun * 0.05;;
    } else  {
      OutputPajak = 15;;
      OutputBayar = OutputgajiTahun * 0.15;;
    }
    console.log(OutputgajiTahun);;
    this.setState({pajak: OutputPajak});;
    this.setState({bayar: OutputBayar});;
  };

  render() {
    //#3 read component state


        return (
      <View>
        <Text> Hitung Pajak </Text>
        <TextInput
          style={{height: 40}}
          placeholder="Masukan gaji"
          onChangeText={InputGaji => this.setState({gaji: InputGaji})}
          value={this.state.gaji}
        />
        <Button
          title="Hitung gaji"
          onPress={() => {
            this.hitungPajak();;
          }}
        />
        <Text>{this.state.gaji}</Text>
        <Text>{this.state.gajiTahun}</Text>
        <Text>{this.state.pajak}%</Text>
        <Text>{this.state.bayar}</Text>
      </View>
    );
  }
}

export default Pajak;

