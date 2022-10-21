const axios = require('axios').default;
const { REST_BASE_URL } = 'https://sistema.depcsuite.com';

const Service = axios.create({
    baseURL: REST_BASE_URL,
    timeout: 5000,
});

export const getDataShipment = async (data) =>
    Service('/envios-flex/getDataShipment', {
        method: 'GET',
        params: {
            data: data
        }
    });

export const getDataOCR = async (img) =>
    Service('/envios-flex/getDataOCR', {
        method: 'POST',
        params: {
            imgBase64: img
        }
    });