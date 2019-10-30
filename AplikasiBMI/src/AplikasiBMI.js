import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {createStackNavigator} from 'react-navigation-stack';

class AplikasiBMI extends React.Component {
  state = {
    berat: 0,
    tinggi: 0,
    statusBeratBadan: null,
    bmi: null,
  };
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  functionImage() {
    if (this.state.statusBeratBadan === 'Kekurangan') {
      return (
        <View style={styles.container}>
          <Image
            style={{marginTop: 15}}
            source={require('./assets/kekurangan.png')}
          />
          <Text style={styles.status}>
            {' '}
            Status berat badan Anda adalah{' '}
            <Text style={styles.info}> kekurangan berat badan </Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Tips')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tips</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('StatusKekurangan')
              }>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Selengkapnya</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.statusBeratBadan === 'Normal(ideal)') {
      return (
        <View style={styles.container}>
          <Image
            style={{marginTop: 15}}
            source={require('./assets/ideal.png')}
          />
          <Text style={styles.status}>
            {' '}
            Status berat badan Anda adalah{' '}
            <Text style={styles.info}> Ideal </Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.push('Tips')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tips</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('StatusIdeal')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Selengkapnya</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.statusBeratBadan === 'Kelebihan') {
      return (
        <View style={styles.container}>
          <Image
            style={{marginTop: 15}}
            source={require('./assets/kelebihan.png')}
          />
          <Text style={styles.status}>
            {' '}
            Status berat badan Anda adalah{' '}
            <Text style={styles.info}> Kelebihan berat badan </Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Tips')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tips</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('StatusKelebihan')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Selengkapnya</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (this.state.statusBeratBadan === 'Obesitas') {
      return (
        <View style={styles.container}>
          <Image
            style={{marginTop: 15}}
            source={require('./assets/obesitas.png')}
          />
          <Text style={styles.status}>
            {' '}
            Status berat badan Anda adalah{' '}
            <Text style={styles.info}> Obesitas </Text>
          </Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Tips')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tips</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('StatusObesitas')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Selengkapnya</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
        <Text style={styles.home}>
          Input kan berat badan dan tinggi badan Anda.
        </Text>
        <TextInput
          style={styles.berat}
          placeholder="Masukan Berat Badan Anda"
          onChangeText={InputBeratBadan =>
            this.setState({berat: InputBeratBadan})
          }
          value={this.state.berat}
        />

        <TextInput
          style={styles.tinggi}
          placeholder="Masukan Tinggi Badan Anda"
          onChangeText={InputTinggiBadan =>
            this.setState({tinggi: InputTinggiBadan})
          }
          value={this.state.tinggi}
        />

        <View>
          <TouchableOpacity
            onPress={() => {
              this.hitungBMI();
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Hitung BMI</Text>
            </View>
          </TouchableOpacity>
        </View>

        {this.functionImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
    backgroundColor: 'yellow',
    height: 900,
    // padding: 20,
  },
  info: {
    fontWeight: 'bold',
  },
  status: {
    textAlign: 'center',
    fontSize: 18,
    // marginTop: 20,
    // marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  home: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  berat: {
    width: 200,
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
  tinggi: {
    width: 200,
    borderWidth: 2,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 8,
  },
  button: {
    width: 150,
    height: 'auto',
    alignContent: 'center',
    elevation: 5,
    backgroundColor: 'black',
    padding: 20,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
  },
  kekurangan: {
    marginTop: 50,
    height: 100,
  },
  ideal: {
    marginTop: 50,
    // height: 200,
    // width: 80,
  },
  obesitas: {
    marginTop: 50,
    height: 100,
    width: 80,
  },
});

export default AplikasiBMI;
