# Coding assignment for price basket

Write a program and associated unit tests that can price a basket of goods, accounting for special offers.
The goods that can be purchased, which are all priced in GBP, are:

* Soup – 65p per tin
* Bread – 80p per loaf
* Milk – £1.30 per bottle
* Apples – £1.00 per bag

Current special offers are:

* Apples have 10% off their normal price this week
* Buy 2 tins of soup and get a loaf of bread for half price

The program should accept a list of items in the basket and output the subtotal, the special offer discounts and the final price.

Input should be via the command line in the form `PriceBasket item1 item2 item3 ...`

**For example:** `PriceBasket Apples Milk Bread`

**Output should be to the console, for example:**

`Subtotal: £3.10
Apples 10% off: -10p
Total: £3.0`

**If no special offers are applicable, the code should output:**

`Subtotal: £1.30
(no offers available)
Total: £1.30`

The code and design should meet these requirements but be sufficiently flexible to allow for future extensibility. The code should be well structured, suitably commented, have error handling and be tested.

# Solution
This is a spring boot maven application. Import this as a maven project in your favorite IDE and run it. For extensibility user can extend offer class and create any other offer as per requirement.

## Tools
* Junit test cases are written using mockito
* Sonar code scan is done for quality check

**Note:** I have used Lombok API, so you may need to add Lombok plugin to your IDE if it is giving compile time error.

## Output -

```
==========OPTIONS==========
1. Show Products | 2. Show Offers | 3. Take Order | 4. Show Basket | x. Exit System
Option: 1
==========PRODUCT==========
Bread - 0.80 per loaf
Soup - 0.65 per tin
Apple - 1.00 per bag
Milk - 1.30 per bottle
==========OPTIONS==========
1. Show Products | 2. Show Offers | 3. Take Order | 4. Show Basket | x. Exit System
Option: 2
==========OFFERS==========
Apples 10% off
Bread 50% off
==========OPTIONS==========
1. Show Products | 2. Show Offers | 3. Take Order | 4. Show Basket | x. Exit System
Option: 3
Enter products: Apple Milk Bread
Adding.. Apple
Adding.. Milk
Adding.. Bread
==========BASKET==========
Bread x 1 = 0.80
Milk x 1 = 1.30
Apple x 1 = 1.00
--------------------------
Subtotal: £3.10
Apples 10% off: -0.10
--------------------------
Total: £3.00
==========OPTIONS==========
1. Show Products | 2. Show Offers | 3. Take Order | 4. Show Basket | x. Exit System
Option:
