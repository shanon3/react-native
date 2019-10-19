import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

class Counter extends React.Component{
    //1# inisialisasi State
    state = { value:0 };
    //#2 Method untuk merubah state
    minus=()=>{
        let currentValue = this.state.value;
        this.setState({value : currentValue - 1})
    }
    //#2 Method untuk merubah state 
    plus=()=>{
        let currentValue = this.state.value;
        this.setState({value : currentValue + 1})
    }

    render(){
        //#3 read component state
        let currentValue = this.state.value
        if(currentValue % 6 == 0){
            currentValue = "kucing"
        }
        return(
            <View>
                <Text>Nilai state saat ini : {currentValue} </Text>

                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => this.plus()}>
                    <Text style = {{color:'#7fff00'}}>Tambah</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() => this.minus()}>
                    <Text style = {{color:'#ff000'}}>Minus</Text>
                </TouchableOpacity>
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
export default Counter;