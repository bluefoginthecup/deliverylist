const BASE_URL = 'https://learn.codeit.kr/api/film-reviews';
//"https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/f55f3a1ba5b52a21f597ca753928319866d4ad32/mock2.json";


export async function getDeliveryLists(order = 'deliveryDate', offset = 0, limit = 2) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`;

    const response = await fetch(
        `${BASE_URL}?${query}`
    );
    const body = await response.json();
    return body;
}

