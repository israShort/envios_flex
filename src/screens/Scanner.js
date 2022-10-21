import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Service from '../services';
import WebView from 'react-native-webview';
import { API_KEY } from '../config';
import axios from 'axios';

export default function Scanner() {

    // const [hasPermission, setHasPermission] = useState(null);

    // const handleBtnLaunchCamera = async () => {
    //     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    //     if (permissionResult.granted === false) {
    //         console.log('No tenés permisos para usar la cámara.');
    //         setHasPermission(false);
    //         return;
    //     }

    //     const result = await ImagePicker.launchCameraAsync({
    //         base64: true,
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images
    //     });

    //     if (result.base64) {
    //         let img = `data:image/jpeg;base64,${result.base64}`;

    //         let body = new FormData();
    //         body.append('base64Image', img);
    //         body.append('language', 'spa');
    //         body.append('isTable', 'true');
    //         body.append('isOverlayRequired', 'true');

    //         axios({
    //             method: 'post',
    //             url: 'https://api.ocr.space/parse/image',
    //             data: body,
    //             headers: { 'apikey': API_KEY }
    //         }).then(({ data }) => {
    //             // console.log(data);
    //             if (data.IsErroredOnProcessing == false) {
    //                 console.log(data.ParsedResults[0].ParsedText);
    //                 console.log(JSON.stringify(data.ParsedResults[0].TextOverlay));
    //             }
    //         });

    //         // await Service.getDataOCR(img)
    //         //     .then((result) => {
    //         //         console.log(result);
    //         //     })
    //         //     .catch((err) => {
    //         //         console.log(err);
    //         //     });
    //     }
    // };

    // if (hasPermission === null) {
    //     return (
    //         <View>
    //             <Text>Accediendo a los permisos del dispositivo.</Text>
    //         </View>
    //     );
    // }

    // if (hasPermission === false) {
    //     return (
    //         <View>
    //             <Text>No se han concedido permisos de cámara.</Text>
    //         </View>
    //     );
    // }

    // return (
    //     <View
    //         style={{
    //             flex: 1,
    //             backgroundColor: '#fff',
    //         }}
    //     >
    //         <TouchableOpacity
    //             onPress={() => { handleBtnLaunchCamera(); }}
    //         >
    //             <Text>Sacar foto</Text>
    //         </TouchableOpacity>
    //     </View >
    // );

    return (<WebView source={{ uri: 'https://socios.cnsi.org.ar/' }} />);
}