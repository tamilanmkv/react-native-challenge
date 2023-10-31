
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Button } from '@rneui/themed';

export function LeftArrow() {
    return (
            <View style={styles.icon}>
                <Button
                    color="#DCEEEE"
                    onPress={() => alert('Left Arrow')} 
                    icon={<AntDesign style={styles.arrow}  name="arrowleft" size={24} color="black" />}>
                </Button>
            </View>
    )
}
const styles = StyleSheet.create({
        arrow: {
            fontSize: 16,
            alignItems: 'center',
            justifyContent: 'center',
            
        },icon: {
            marginLeft: 15,
            padding: 5,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#DCEEEE',
            borderRadius: 50,
        },
});
