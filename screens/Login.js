import { StyleSheet, Text, View } from 'react-native';


export function Login() {
    return(
        <View style={styles.container}>
        <Text>Hello world</Text>
        <Text>My name is</Text>
    </View>);
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff',
        alignItems: 'center',
        justifyContent:'center',
    },
});
