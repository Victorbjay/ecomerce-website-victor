# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

**Desktop View**

![Desktop view of the project](./src/assets/design/desktop-design.jpg)

<br>

<details>
  <summary><strong>Click to expand: Mobile & Active States</strong></summary>
  <br>
  <table>
    <tr>
      <td><img src="./src/assets/design/mobile-design-basket-empty.jpg.jpg" alt="Active State on Mobile" width="375"></td>
      <td><img src="./src/assets/design/mobile-design-basket-filled.jpg" alt="Mobile View with Completed State" width="375"></td>
    </tr>
    <tr>
      <td><img src="./src/assets/design/mobile-menu.jpg" alt="Mobile View with Menu" width="375"></td>
      <td><img src="./src/assets/design/mobile-design.jpg" alt="Mobile View " width="375"></td>
    </tr>
  </table>
</details>

### Links

- **Solution URL:** [Github](https://github.com/Victorbjay/ecomerce-website-victor.git)
- **Live Site URL:** [Live site](https://ecomerce-website-victor.vercel.app/)

## My process

### Built with

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For strong typing and a more robust codebase
- **Vite** - For a fast and modern development environment
- **CSS Custom Properties** - For theming and style management
- **Flexbox & CSS Grid** - For creating complex, responsive layouts
- **Mobile-first workflow** - Ensuring the best experience on all devices

### What I learned

This project was an in-depth exercise in building a modern, interactive e-commerce component from the ground up with React.

The most significant learning was implementing global state management with the **React Context API**. Creating a `CartContext` allowed me to share cart data and functions (`addToCart`, `removeFromCart`) across completely separate components (`Header` and `ProductDetails`) without the complexity of "prop drilling." This is a clean and scalable solution for managing application-wide state.

```tsx
// src/context/CartContext.tsx - Creating a custom hook for easy access
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// src/App.tsx - Wrapping the application
function App() {
  return (
    <CartProvider>
      <Header />
      <ProductPage />
    </CartProvider>
  );
}
```

I'm also proud of how the application was structured into discrete, logical components (`ProductGallery`, `ProductDetails`, `Lightbox`, `Cart`). This component-based architecture made the code significantly easier to manage, debug, and reason about compared to a monolithic approach. For example, the `ProductGallery` component fully encapsulates all logic for the image slider and lightbox, keeping it independent from the product's text details.

### Continued development

This project has solidified my core React skills. For future projects, I am excited to focus on:

1.  **Performance Optimization:** While this app is fast, I want to explore techniques like `React.memo` and the `useCallback` hook to prevent unnecessary re-renders in more complex applications, especially those with frequently updating state.
2.  **Advanced TypeScript:** I want to leverage more advanced TypeScript features, such as generics and more complex type definitions, to build even more type-safe and self-documenting components.
3.  **Testing:** The next crucial step in my development journey is to learn and implement testing using libraries like **Vitest** and **React Testing Library** to ensure the reliability and stability of my applications as they grow.

## Author

- **Website** - [Victor Okpe](https://github.com/Victorbjay/)
- **Frontend Mentor** - [@Emkajnr](https://www.frontendmentor.io/profile/Emkajnr)

## Acknowledgments

This project was completed as a collaborative effort with Google's Gemini assistant. The process involved a detailed, iterative approach to ensure the layout, functionality, and architecture precisely matched the design brief and followed professional best practices. The back-and-forth dialogue was instrumental in debugging, refactoring, and finalizing the solution.
