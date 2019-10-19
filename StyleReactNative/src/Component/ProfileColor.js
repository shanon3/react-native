import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ImageBackground
} from 'react-native';
import {styles} from './styleProfile'

export default class ProfileColor extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <ImageBackground style={styles.bgImage} source={require('../assets/background.jpeg')}>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardImageCOntainer}>
                            <Image style={styles.cardImage} source={require('../assets/user5.png')}/>
                        </View>

                        <Text style={styles.cardName}>John doe</Text>
                        <View style={styles.cardOccupationContainer}>
                            <Text style={styles.cardOccupation}>React Native Developer</Text>
                        </View>
                        <View>
                            <Text style={styles.cardDescription}>John is a really great JavaScript developer.
                            He loves using JS to build React Native applications for IOS and Android.</Text>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        );
    }
}
