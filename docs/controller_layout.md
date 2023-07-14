## Routes: 
Routes -> Controller -> config -> Models -> DB

## Controllers

* Authentication:
  + signUp
    - Username
    - Email
    - Password
  + login
    - Username
    - Password

* Cart & Order:
    + `getCart` -> DB -> res [beanType, beanAmount, beanPrice]
    + client -> `addToCart` -> DB 
    + client -> `checkout` -> `create/placeOrder` & then `localStorage.remove("cart")`
        - `getOrder` -> DB -> res (orderId, beanType, beanAmount, totalAmount)
        - `placeOrder` -> `createOrder` -> DB 
        - `deleteOrder` -> removes order from DB
