# Pizza Delivery Online Store

Welcome to the Pizza Delivery Online Store app! This application allows users to browse and order pizzas from the comfort of their own homes. The backend of this app is powered by the MockAPI service.

## Technologies Used

- **ReactJS**: The frontend of the application is built using ReactJS, a popular JavaScript library for building user interfaces.

- **TypeScript**: TypeScript is used to add static typing to the JavaScript codebase, improving code quality and maintainability.

- **React Router**: React Router is used for client-side routing, allowing seamless navigation within the app.

- **Redux Toolkit**: Redux Toolkit simplifies state management by providing a set of tools and best practices. It's used to manage application-wide state.

- **Redux Thunk**: Redux Thunk is a middleware that allows asynchronous actions in Redux. It's used for making HTTP requests and handling side effects.

- **Axios**: Axios is used to make HTTP requests to the MockAPI service and handle data retrieval and submission.

- **localStorage**: LocalStorage is used to store cart items and selected filters, ensuring that user preferences are retained even after refreshing the page.

- **Querystring Parser**: The app uses a querystring parser with nesting support to handle filter, sort, and search functionality in the URL. This provides a user-friendly way to share or bookmark specific views of the product catalog.

## Features

- **Product Filtering**: Users can filter products based on various criteria, such as pizza type, toppings, and size.

- **Sorting**: Products can be sorted by price, popularity, or other relevant criteria.

- **Search**: A search feature allows users to find specific pizzas by keywords.

- **Pagination**: Product listings are paginated, making it easy to navigate through a large catalog of items.

- **Shopping Cart**: Users can add pizzas to their shopping cart and proceed to place an order.

- **Persistent Cart and Filters**: Selected filters and items in the shopping cart are saved in the user's browser's localStorage, ensuring that they persist even after refreshing the page.

- **HTTP Requests**: HTTP requests to the backend (MockAPI) are handled using Axios and Redux Thunk, providing a smooth user experience.













