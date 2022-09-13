import DeliveryList from "./DeliveryList";
import { useEffect, useState } from "react";
import { getDeliveryLists } from "../api";


function App() {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('deliveryDate');
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleNewestClick = () => setOrder('deliveryDate');
    const handleIdClick = () => setOrder('id');

    const handleCushion35Click = () => {
        const cushion35 = items.filter((item) => item.deliveryComposition.indexOf("35cushion") !== -1);
        setItems(cushion35);
    }

    const handleLoad = async () => {
        const { deliverylists } = await getDeliveryLists();
        setItems(deliverylists);
    }

    useEffect(() => {
        handleLoad();
    }, [order])


    return (
        <div>
            <div>
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleIdClick}>아이디 큰 순</button>
                <button onClick={handleCushion35Click}>35쿠션</button>
            </div>
            <DeliveryList items={sortedItems} />
        </div>
    );
}

export default App;