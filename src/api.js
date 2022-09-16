const BASE_URL =

    //  "https://learn.codeit.kr/api/film-reviews";
    //'https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/f51ba276d9fb6cc94c0a21a2c01030a920950e02/mock2.json'
    //"https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/70d0ec09168ba21c4b3136e566af407806b405a8/mock2.json";
    //"https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/690bd6e03d1e4a045d572a705e375b52327a3b05/mock2.json"
    "https://gist.githubusercontent.com/bluefoginthecup/11b28fabc21b551cbfd585c38cccf621/raw/4a1e2b348a50eaf78ab7fff46bc3c69808c8a35a/mock2.json";

export async function getDeliveryLists(order = 'deliveryDate') {
    const query = `order=${order}`;

    const response = await fetch(
        `${BASE_URL}?${query}`
    );
    const body = await response.json();
    return body;
}

