export async function getDeliveryLists() {
    const response = await fetch('https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/8051fa36e5d87fda41a8457ba17194531f28cbfe/mock.json');
    const body = await response.json();
    return body;
}
