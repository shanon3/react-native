
// //1. create functional component
// function ComponentA(props){
//     //read component props
//     let color = props.color
// }
// //2. render component with prop
// <ComponentA color= 'blue'/>


// // 1. create class component
// class ComponentB extends React.Component{
//     render(){
//         //read component props
//         let color = this.props.color
//     }
// }

// //2. render component with prop
// <ComponentB color='blue'/>

import React, {Component} from 'react';
import{
    Button,
    StyleSheet,
    Alert,
    Text
} from 'react-native';


export default class presentasi extends Component{
    tombolAlert(){
        Alert.alert('Hello, ini contoh tombol dengan tampilan alert!')
    }
    tombolText(){
        <Text>Hello, ini contoh tombol dengan tampilan text!</Text>
    }

    render(){
        return(
            <Button onPress={this.tombolAlert} title="Press Me" />
            <Button onPress={this.tombolText} title="Press Me" />
        );
    }
}




<View style = 
{{flex: 1, flexDirection: 'row'}}
>
    ..
</View>


