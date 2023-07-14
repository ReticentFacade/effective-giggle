import fs from "fs";

const storeOrderData = (orderData) => {
    const jsonData = JSON.stringify(orderData);

    fs.writeFile("order.json", jsonData, (err) => {
        if (err){
            console.error(err);
            return;
        }
        console.log("Order data stored successfully :)");
    });
};

export default storeOrderData;