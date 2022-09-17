import DeliveryList from "./DeliveryList";
import { useEffect, useState } from "react";
import { getDeliveryLists } from "mock.json";


function App() {
    const [items, setItems] = useState([]);
    const [order, setOrder] = useState('createdAt');
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleNewestClick = () => setOrder('deliveryDate');
    const handleIdClick = () => setOrder('id');

    const handleCushion35Click = () => {
        const cushion35 = items.filter((item) => item.deliveryComposition.indexOf("35cushion") !== -1);
        setItems(cushion35);
    }
    const handleCushion40Click = () => {
        const cushion40 = items.filter((item) => item.deliveryComposition.indexOf("40cushion") !== -1);
        setItems(cushion40);
    }

    const handleCushion50Click = () => {
        const cushion50 = items.filter((item) => item.deliveryComposition.indexOf("50cushion") !== -1);
        setItems(cushion50);
    }
    const handleBasic45Click = () => {
        const basic45 = items.filter((item) => item.deliveryComposition.indexOf("45basic") !== -1);
        setItems(basic45);
    }

    const handleBasic50Click = () => {
        const basic50 = items.filter((item) => item.deliveryComposition.indexOf("50basic") !== -1);
        setItems(basic50);
    }

    const handleBasic60Click = () => {
        const basic60 = items.filter((item) => item.deliveryComposition.indexOf("60basic") !== -1);
        setItems(basic60);
    }
    const handleWing45Click = () => {
        const wing45 = items.filter((item) => item.deliveryComposition.indexOf("45wing") !== -1);
        setItems(wing45);

    }
    const handleWing50Click = () => {
        const wing50 = items.filter((item) => item.deliveryComposition.indexOf("50wing") !== -1);
        setItems(wing50);
    }
    const handleRunnerClick = () => {
        const runner = items.filter((item) => item.deliveryComposition.indexOf("runner") !== -1);
        setItems(runner);
    }

    const handleTableClothClick = () => {
        const tableCloth = items.filter((item) => item.deliveryComposition.indexOf("tableCloth") !== -1);
        setItems(tableCloth);
    }


    const handleLoad = async (orderQuery) => {
        const { reviews } = await getDeliveryLists(orderQuery);
        setItems(reviews);
    }

    useEffect(() => {
        handleLoad(order);
    }, [order])


    return (
        <div>
            <div>
                <button onClick={handleNewestClick}>최신순</button>
                <button onClick={handleIdClick}>아이디 큰 순</button>
                <button onClick={handleCushion35Click}>35쿠션</button>
                <button onClick={handleCushion40Click}>40쿠션</button>
                <button onClick={handleCushion50Click}>50쿠션</button>
                <button onClick={handleBasic45Click}>45기본형 방석</button>
                <button onClick={handleBasic50Click}>50기본형 방석</button>
                <button onClick={handleBasic60Click}>60기본형 방석</button>
                <button onClick={handleWing45Click}>45날개형 방석</button>
                <button onClick={handleWing50Click}>50날개형 방석</button>
                <button onClick={handleRunnerClick}>러너</button>
                <button onClick={handleTableClothClick}>테이블보</button>
            </div>
            <DeliveryList items={sortedItems} />
        </div>
    );
}

export default App;