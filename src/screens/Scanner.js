import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import * as Service from '../services';

export default function Scanner() {

    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (async () => {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                setHasPermission(true);
            } else {
                setHasPermission(false);
            }
        })();
    }, []);

    const handleBtnLaunchCamera = async () => {
        await ImagePicker.launchCamera({
            mediaType: 'photo',
            cameraType: 'back',
            saveToPhotos: false,
            includeBase64: true,
        }).then((result) => {
            console.log(result);
        });
    };

    if (hasPermission === null) {
        return (
            <View>
                <Text>Accediendo a los permisos del dispositivo.</Text>
            </View>
        );
    }

    if (hasPermission === false) {
        return (
            <View>
                <Text>No se han concedido permisos de cámara.</Text>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#fff',
            }}
        >
            <TouchableOpacity
                onPress={() => { handleBtnLaunchCamera(); }}
            >
                <Text>Sacar foto</Text>
            </TouchableOpacity>
        </View >
    );
}