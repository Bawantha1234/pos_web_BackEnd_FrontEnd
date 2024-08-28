Pos API documentation

Base URL: http://localhost:8080/pos_webBack

Overview

The POS System API allows clients to manage orders, customers, and items within a point-of-sale system. The API supports various operations, including creating, retrieving, updating, and deleting orders, as well as managing items and customer information.
Authentication

Note: This API does not require authentication. However, it is strongly recommended to implement appropriate security measures in a production environment to protect sensitive data.
Endpoints
1. Orders

    Create Order
        POST /orders
        Description: Create a new order.
        Request Body: JSON object representing the order details.
    Retrieve Order
        GET /orders/{orderId}
        Description: Retrieve details of a specific order by ID.
    Update Order
        PUT /orders/{orderId}
        Description: Update an existing order by ID.
        Request Body: JSON object representing the updated order details.
    Delete Order
        DELETE /orders/{orderId}
        Description: Delete a specific order by ID.

2. Items

    Create Item
        POST /items
        Description: Add a new item to the inventory.
        Request Body: JSON object representing the item details.
    Retrieve Item
        GET /items/{itemId}
        Description: Retrieve details of a specific item by ID.
    Update Item
        PUT /items/{itemId}
        Description: Update details of an existing item by ID.
        Request Body: JSON object representing the updated item details.
    Delete Item
        DELETE /items/{itemId}
        Description: Remove a specific item from the inventory by ID.

3. Customers

    Create Customer
        POST /customers
        Description: Add a new customer.
        Request Body: JSON object representing the customer details.
    Retrieve Customer
        GET /customers/{customerId}
        Description: Retrieve details of a specific customer by ID.
    Update Customer
        PUT /customers/{customerId}
        Description: Update information of an existing customer by ID.
        Request Body: JSON object representing the updated customer details.
    Delete Customer
        DELETE /customers/{customerId}
        Description: Remove a specific customer by ID.
