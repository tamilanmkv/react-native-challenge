import { StyleSheet, Text, View } from 'react-native';
import { LeftArrow } from './component/LeftArrow';
import { SaveButton } from './component/SaveButton';

export function Navbar(props) {
    return (
        <View style={styles.navbar}>        
            <LeftArrow />
            <Text style={styles.text}>{props.text}</Text>
            {props.save?<SaveButton />:null}
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 60,
        overflow: 'hidden',
        paddingBottom: 10,
        paddingLeft: 10,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        paddingLeft: 10,
        marginLeft: 7,
        paddingTop: 10,
    },
});
