# E-commerce Website


## Demo link
https://totalitycorp-frontend-challenge-phi.vercel.app/

## Features
1. Display variety of products with images, product's names, prices, discounts.
2. User can filter their products by category, price range, rating , low to high prices and vice versa.
3. Also impliment the Add to cart button. If the user try to add a particular product to the cart more then one time then quantity will increase. Also user can increase or decrease their products quantity at the add to cart page and price will be dispaly as how many products have added. User can remove items or save for later and also display real-time updates of the cart total and item count .
4. If the user wants to checkout their products present in the cart then at first he has to fill the address if he did not fill address before, if he filled address before then he can choose previously filled addresses. After choosing the appropriate address then he had to pay the total amount as shown in the checkout page, after successful payment then it automatically redirect to the payment successful page.
*Note: Payment integration using Razorpay, as I use test mode so search from google for Razorpay fake card details or upi id (for upi ID use: success@razorpay).
5.The overall page is responsive for mobile, tab as well as laptop or desktop.
6. I also impliment user authentication. User cannot visit any page without registraion or log in. At first the user have to create or log in their respective account then the user can buy any products.
5. Registarion form is validate using yup and formik library.
6. Dark and light mode


# Tech skills:
## Fornt-end
1. React js
2. Tailwind css
3. Redux Toolkit
4. React-loading
5. Ant design
6. React-router-dom
7. React-icons 
8. Redux-persist
9. yup
10. Formik
11.Axios

## Back-end
1. Node js
2. Express js
3. MongoDb
4. Bcrypt
5. helmet
6. molter
7. morgan
8. Razorpay
9. Json webToken
