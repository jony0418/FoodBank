const urldis = './api/distribution/';
const urlin = './api/inventory/';

export const sendDataDistribution = (data) =>
    fetch(urldis, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });
export const sendDataInventory = (data) =>
    fetch(urlin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
            console.error('Error:', error);
        });

export const getDataInventory = () =>
    fetch(urldis, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

export const getDataDistribution = () =>
    fetch(urlin, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });
