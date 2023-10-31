import { Button } from '@rneui/base';
import { StyleSheet, Text, View } from 'react-native';


export function SaveButton() {
    return (
        <View style={styles.save}> 
            <Button
                color="#4CAE5F"
                title={<Text style={styles.saveText}>Save</Text>}
                onPress={() => alert('Save')}
            />
        </View>
    )
} 

const styles = StyleSheet.create({ 
    save: {
        media: '(max-width: 768px) and (orientation: portrait)',
        fontSize: 15,
        marginRight: 10,
        marginLeft: 15,
        padding: 5,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAE5F',
        borderRadius: 50,
        marginLeft: 100,
    },saveText:{
        fontSize: 13,
        fontFamily: 'monospace',
        fontWeight: 'bold',
    },

});
