export async function getDeliveryLists(order = 'deliveryDate') {
    const query = `order=${order}`;
    const response = await fetch(
        `https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/8051fa36e5d87fda41a8457ba17194531f28cbfe/mock.json?${query}`
    );
    const body = await response.json();
    return body;
}
