const BASE_URL = 'https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/f51ba276d9fb6cc94c0a21a2c01030a920950e02/mock2.json'

export async function getDeliveryLists(order = 'deliveryDate') {
    const query = `order=${order}`;
    
    const response = await fetch(
        `${BASE_URL}?${query}`
    );
    const body = await response.json();
    return body;
}

