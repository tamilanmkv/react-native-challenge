import { StyleSheet,Image, Text, View } from 'react-native';
import { Navbar } from '../Navbar';
import { Button } from '@rneui/base';
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
    return(
        <View style={styles.profile}>
            <Navbar 
                text="Profile info"
                save={true}
            />
            <View style={styles.profileInfo}> 
                <Image
                    style={styles.profileImage}
                    source={require('../../assets/profile.png')}
                />
                <View style={styles.profileContainer}>
                    <Text style={styles.updatePicture}>Update Your Picture</Text>
                    <Text style={styles.sizeLimit}>Upload a photo under 2MB</Text>
                    <View style={styles.uploadContainer}>
                        <View style={styles.uploadButton}>
                            <Button
                                color="#DCEEEE"
                                title={<Text style={styles.upload}>Upload</Text>}
                                onPress={() => alert('Upload')}
                                icon={<AntDesign style={styles.arrow}  name="upload" size={13} color="wight" />}
                            />
                        </View>
                        <View style={styles.cancelButton}>
                            <Button
                                color="#ffff"
                                title={<Text style={styles.cancel}>Delete Current Picture</Text>}
                                onPress={() => alert('Upload')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.profilelimit}>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    profile: {
        display: 'flex',
        flexDirection: 'column',
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    profileImage:{
        marginLeft:15,
        marginTop: 13,
        padding: 5,
        width: 100,
        height: 100,
        borderRadius: 50,
    
    },
    updatePicture: { 
        fontSize: 20,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    sizeLimit: {
        marginStart: 15,
        fontSize: 10,
        color: '#787878',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,

    },
    uploadContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    upload: {
        marginStart: 10,
        fontSize: 10,
        color: '#4CAE5F',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        alignItems: 'center',
        marginLeft: 10,
    },
    cancel: {
        fontSize: 10,
        color: '#AD1E1F',
        fontFamily: 'monospace',
        fontWeight: 'bold', 
    },
    uploadButton: {
        marginStart: 15,
        fontSize: 10,
        marginLeft: 15,
        marginTop: 10,
        backgroundColor: '#DCEEEE',
    },
    cancelButton: {
        marginTop: 10,
        padding:0,
    },
});
