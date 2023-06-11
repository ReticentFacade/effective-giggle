const fs = require('fs');
const path = require('path');

class OrderDetails {
    constructor(coffee_bean, amount, address){
        this.coffee_bean = coffee_bean;
        this.amount = amount;
        this.address = address;
    }

    placeOrder(){
        const filePath = path.join(__dirname, 'orders.json');

        // Read existing orders from JSON file:
        let orders = [];
        if (fs.existsSync(filePath)){
            const fileContent = fs.readFileSync(filePath, 'utf8');
            orders = JSON.parse(fileContent);
        }
        
        // order details object:
        const orderDetails = {
            "coffee_bean": "Arabica",
            "amount": "15 kg",
            "address": "123 Main Street"
        };

        // Push into array: 
        orders.push(orderDetails);

        // Serialize updated array to JSON:
        const updateOrdersJson = JSON.stringify(orders);
        fs.writeFileSync(filePath, updateOrdersJson, 'utf8');
        
        // add exception handling for invalid data
        
        console.log('Your order has been placed!');        
    }
}

const orderDetails = new OrderDetails('Arabica', '15 kg', '123 Main Street');
orderDetails.placeOrder();