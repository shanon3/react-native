import React, {
    Component
} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class AlignItemsBasics extends Component{
    render(){
        return(
            // Try setting 'alignItems' to 'flex-start', 'flex-end', 'center'
            <View style = {styles.container}>
                <Text style = {styles.headerStyle}> alignItems: 'flex-center'</Text>
                <View style={[{flexDirection: 'column', alignItems:'center'}, styles.elementContainer]}>
                    <View style={styles.red}/>
                    <View style={styles.yellow}/>
                    <View style={styles.green}/>
                </View>
            </View>
        );
    }
}

const styles = {
    green : {
        backgroundColor: '#32B76C',
        height: 50,
        width: 60
    },
    yellow : {
        backgroundColor: '#faa030',
        height: 50,
        width: 100
    },
    red : {
        backgroundColor: '#ee2c38',
        height: 50,
        width: 80
    },
    container: {
        marginTop : 48,
        flex: 1
    },
    headerStyle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '300',
        marginBottom: 24
    },
    elementContainer: {
        flex: 1,
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24
    }
}