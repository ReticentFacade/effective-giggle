# API Structure

- Login/Signup

  - Roles
    - User
      - (special UUIDs)
      - (can only purchase)
    - Admin
      - (only one)
      - (can create/delete/update products, can see all orders separated by UUIDs/emails)
    - Seller
      - (ask for special details)
      - (can create/delete/update products, can only see order requests on dashboard + via email)

- Product

  - Title
  - Price
  - Stock Amount
  - Image? (maybe)

- Cart (maybe)

- Payment
  - COD
  - Other methods (maybe)

## ???

- On purchase -> send(UUID, user email, product details) to [user (in order history), admin (on dashboard), seller (on dashboard + on email)]
