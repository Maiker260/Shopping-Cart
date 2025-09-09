
# Shopping Cart

A simple shopping cart application built with **React**.  

This project was created to practice component-based architecture, React Router, state management, API fetching.


## Installation

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone git@github.com:Maiker260/Shopping-Cart.git
   ```

2. **Install dependencies**
   ```bash
   cd Shopping-Cart
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open the app** 
    
## API

This project fetches product data from [FakeStore API](https://fakestoreapi.com/).


## Features

- **Four main pages**:
  - **Home Page** – A simple landing page with some images or introductory text.
  - **Categories Page** – Displays products fetched from [FakeStore API](https://fakestoreapi.com/), including:
    - Product Title
    - Product Image
    - Product Description
    - "Add to Cart" button
  - **Search Page** – Displays the items that match the search criteria.
  - **Cart Page** – Displays all items added to the Cart by the user. (Limited to 1 item per product.)
- **Navigation Bar** (visible on all pages)
  - Displays a live cart item counter that updates in real time.


## Demo

https://shopping-cart-c43.pages.dev/


## Screenshots

Home Page
![Home Page](public/screenshots/home.png)


Categories Page
![Shop Page](public/images/screenshots/categories.png)


Search Page
![Search Page](public/screenshots/search.png)


Cart Page
![Cart Page](public/screenshots/cart.png)


## Acknowledgements

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [FakeStore API](https://fakestoreapi.com/)


## Author

- [@Maiker260](https://github.com/Maiker260)