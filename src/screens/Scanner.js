import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { PermissionsAndroid } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Service from '../services';

export default function Scanner() {

    const handleBtnLaunchCamera = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            console.log('No tenés permisos para usar la cámara.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (result.base64) {
            let img = result.base64;
        }
    };

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