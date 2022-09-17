const BASE_URL =
    // "https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/4a1e2b348a50eaf78ab7fff46bc3c69808c8a35a/mock2.json";
    "https://learn.codeit.kr/api/film-reviews/"
export async function getDeliveryLists(order = 'deliveryDate') {
    const query = `order=${order}`;

    const response = await fetch(
        `${BASE_URL}?${query}`
    );
    const body = await response.json();
    return body;
}

