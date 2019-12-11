import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Persegi from './Persegi';
import Pajak from './Pajak';

class Menu extends React.Component {
  //1# inisialisasi State
  //#2 Method untuk merubah state luas
  state = {tipe: null};


    renderElement(){
    console.log(this.state.tipe);;
    //#3 read component state
    if (this.state.tipe === 'ruang') {
      return <Persegi />;
    } else {
      return <Pajak />;
    }
  }

  render() {
    let type = this.state.tipe;
    return  (
      <View>
        <Text> App {type} </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({tipe: 'ruang'})}>
          <Text style={{color: '#7fff00'}}>Data Ruang</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.setState({tipe: 'pajak'})}>
          <Text style={{color: '#ff000'}}>Data Pajak</Text>
        </TouchableOpacity>

        {this.renderElement()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 20,
    margin: 4,
  },
});

export default Menu;

