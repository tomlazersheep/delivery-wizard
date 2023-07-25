# delivery-wizard

## Brief
This app is a way of managing orders for food POS with in-house delivery service. The objective of this app 
is to help manage business with multiple POS and multiple couriers at the same time, prevent order duplicates or missplacements,
and keep track of the amount every courier owes to the shop. This is easy to do on paper when having a small amount of orders and
one or two couriers, but it gets increasingly harder as you go up. Here's the paper system collapsing:

![WhatsApp Image 2023-07-10 at 2 36 15 AM](https://github.com/tomlazersheep/delivery-wizard/assets/38867785/98204762-d7a9-4856-a3a2-493a47c997bd)

This app should aim to have as little initial setup as possible, and be able to create everything on the go, without changing screens or using popups.
Eventually the app adapts to everyday usage.

# Usage 
Should be able to set an address as "home" and some map area for coverage, then easily input an address and items for an order.
You should be able to enter some of the client data, such as address, phone and name. And re-use that data if it is a recurring client.

Every order should have states, such as "in production" "ready to go" "delivery John Doe has it" "delivered" "processed" etc.
Every courier or delivery man should be registered and you should be able to check how many orders the courier has in his bag.

Items should be configurable, and prices should be able to change. Some items have flavors, for example 1/4kg of icecream may have up to 3
flavors of ice cream in it. But on the other hand, if a price changes today, I don't want orders from yesterday updating prices.

I should be able to quickly switch between the different order states, wether it be kanban or tabs.

Orders should be organized in "shifts" to work with little amounts of data 

User should be able to get a "report" once the shift ends, and older shifts as well.


## some flows:
Placing an order:
Cashier user can enter an address, check for coincident previous addresses or clients to autopopulate fields, or enter them manually  
(creating a new client or address record)

Cashier can add items to the order, each with it's correspondent price and name. For example ice cream 1kg, 1/2kg, 1/4kg, cones, chocolates, almond dessert, etc.
For some items cashier should set flavors, depending on the item. For example for 1kg it's 4 flavors.
Cashier should be able to see the final price and then confirm the order. 

Assigning orders: 
Cashier user can view a list of orders created, and assign them to one or more couriers. The order should change state and appear in the "courier bag". 

Receiving orders:
Once the courier comes back with payment, cashier should check payment and mark the order as cashed-in, removing it from the courier's bag.

Closing a shift:
Once the shift is done, Cashier should be able to close it and generate a report. 
