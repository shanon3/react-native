import {StyleSheet} from 'react-native';

const profileCardColor = 'dodgerblue';
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        // backgroundColor: profileCardColor,
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        width: 300,
        height: 400,
        alignItems: 'center'
    },
    cardImageCOntainer:{
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        marginTop: 30
    },
    cardImage:{
        width: 114,
        height: 106
    },
    cardName:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 3
    },
    cardOccupationContainer:{
        borderColor: 'yellow',
        borderBottomWidth: 3
    },
    cardOccupation:{
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    cardDescription:{
        fontStyle: 'italic',
        marginTop: 10,
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        color: 'blue'
    },
    bgImage:{
        marginTop: 50,
        alignItems: 'center',
        width: 300,
        height: 400
    }
});

export {styles}