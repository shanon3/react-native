import React from 'react';
import {StyleSheet, Text, TextInput, Button, View, Image} from 'react-native';
import {inheritLeadingComments} from '@babel/types';

class AplikasiBMI extends React.Component {
  state = {
    berat: 0,
    tinggi: 0,
    statusBeratBadan: null,
    bmi: null,
  };

  renderImage() {
    if (this.state.statusBeratBadan === 'Kekurangan') {
      return (
        <Image
          style={{height: 100, weight: 50}}
          source={require('../src/image/tip-sehat-gemukin-badan.gif')}
        />
      );
    } else if (this.state.statusBeratBadan === 'Normal(ideal)') {
      return (
        <Image
          style={{height: 100}}
          source={require('../src/image/ideal.gif')}
        />
      );
    } else if (this.state.statusBeratBadan === 'Kelebihan') {
      return (
        <Image
          style={{height: 100}}
          source={require('../src/image/tip-sehat-gemukin-badan.gif')}
        />
      );
    } else if (this.state.statusBeratBadan === 'Obesitas') {
      return (
        <Image
          style={{height: 100}}
          source={require('../src/image/tip-sehat-gemukin-badan.gif')}
        />
      );
    }
  }

  hitungBMI() {
    let beratBadan = this.state.berat;
    let tinggiBadan = this.state.tinggi;

    let ubahTinggiKeMeter = parseInt(tinggiBadan) / 100;
    let HitungBmi =
      parseInt(beratBadan) / (ubahTinggiKeMeter * ubahTinggiKeMeter);
    this.setState({bmi: HitungBmi});

    console.log(this.ubahTinggiKeMeter);
    console.log(this.HitungBmi);

    let status;

    if (HitungBmi <= 18.5) {
      status = 'Kekurangan';
    } else if (HitungBmi >= 18.5 && HitungBmi <= 24.9) {
      status = 'Normal(ideal)';
    } else if (HitungBmi >= 25.0 && HitungBmi <= 29.9) {
      status = 'Kelebihan';
    } else if (HitungBmi >= 30.0) {
      status = 'Obesitas';
    }

    this.setState({statusBeratBadan: status});

    console.log(this.state.bmi);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.inputBerat}> */}
        <Text>Berat Badan</Text>
        <TextInput
          style={styles.berat}
          placeholder="Masukan Berat Badan Anda"
          onChangeText={InputBeratBadan =>
            this.setState({berat: InputBeratBadan})
          }
          value={this.state.berat}
        />
        <Text style={{marginBottom: 20}}>Kg</Text>
        {/* </View> */}

        <Text>Tinggi</Text>
        <TextInput
          style={styles.tinggi}
          placeholder="Masukan Tinggi Badan Anda"
          onChangeText={InputTinggiBadan =>
            this.setState({tinggi: InputTinggiBadan})
          }
          value={this.state.tinggi}
        />
        <Text style={{marginBottom: 20}}>cm</Text>

        <Button
          style={styles.button}
          title="Hitung BMI"
          onPress={() => {
            this.hitungBMI();
          }}
        />

        {/* <Text>{this.state.bmi}</Text> */}
        {this.renderImage()}
        <Text style={{marginTop: 20}}>{this.state.statusBeratBadan}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    // marginLeft: 50,
    // justifyContent: 'center'
  },
  //   inputBerat:{
  //     // flex: 1,
  //     // position: 'relative',
  //     // flexDirection: 'row',
  //   },
  berat: {
    width: 200,
    borderWidth: 1,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  tinggi: {
    width: 200,
    borderWidth: 1,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    width: 100,
    marginTop: 40,
    marginBottom: 50,
  },
});

export default AplikasiBMI;
