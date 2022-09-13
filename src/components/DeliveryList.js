import './DeliveryList.css';

function formatDate(value) {
    const date = new Date(value);
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}


function DeliveryListItem({ item }) {
    return (
        <div className="DeliveryListItem">
            <img className="DeliveryList-img" src={item.imgUrl} alt={item.client}></img>
            <div>
                <h1>{item.client} {item.productName} 외 납품</h1>
                <p>{item.deliveryRegion} {item.client}에서</p>
                <p><span id="productName">{item.productName}</span></p>
                <p>{item.deliveryComposition} 등을 주문해주셨습니다.</p>
                <p>납품일자: {formatDate(item.deliveryDate)}</p>
            </div>
        </div>
    );
}



function DeliveryList({ items }) {
    return <ul>{items.map((item) => {
        return <li key={item.id}><DeliveryListItem item={item} /> </li>
    })}</ul>;
}

export default DeliveryList;