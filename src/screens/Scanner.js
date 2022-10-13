import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Service from '../services';

export default function Scanner() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            await BarCodeScanner.requestPermissionsAsync()
                .then(({ status }) => {
                    setHasPermission(status === 'granted');
                });
        })();
    }, []);

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        console.log(data);
        // (async () => {
        //     await Service.getDataShipment(data.id)
        //         .then((result) => {
        //             console.log(result);
        //         });
        // })();
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
            {scanned ? (
                <TouchableOpacity
                    onPress={() => { setScanned(false); }}
                >
                    <Text>Volver a escanear codigo QR</Text>
                </TouchableOpacity>
            ) : (
                <View>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        style={{
                            height: 300,
                        }}
                    />
                    <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={() => { setScanned(true) }}>
                        <Text style={{ color: 'white' }}>Volver a escanear codigo QR</Text>
                    </TouchableOpacity>
                </View>
            )
            }
        </View >
    );
}