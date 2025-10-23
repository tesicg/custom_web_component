# Web Component Example

This project is a simple demonstration of how to create a web component with separated HTML, CSS, and JavaScript (TypeScript).

## File Structure

-   `src/components/custom/my-component/`: Contains the files for the original example component.
-   `src/components/custom/sender-component/`: Contains the files for the component that dispatches events.
-   `src/components/custom/receiver-component/`: Contains the files for the component that listens for events.
-   `index.html`: The main HTML file that uses the components.
-   `src/main.ts`: This file imports all the component definitions.

This separation of concerns makes the code more organized and easier to maintain.

## Components

### `my-component`
This component displays a button with a counter. When the button is clicked, the counter increments.

-   **`counter-color`**: This attribute allows you to change the color of the counter text.

    ```html
    <my-component counter-color="red"></my-component>
    ```

### Event Communication

This project also demonstrates how web components can communicate using custom events.

-   **`sender-component`**: This component displays a button. When clicked, it dispatches a `my-custom-event`. It has a `message` attribute that allows you to customize the data sent in the event.

    -   **`message`**: This attribute allows you to customize the data sent in the event.
    -   **`background-color`**: This attribute allows you to change the background color of the button.

    ```html
    <sender-component message="Your custom message here!" background-color="blue"></sender-component>
    ```

-   **`receiver-component`**: This component listens for the `my-custom-event` on the `document` and displays the message it receives from the event's detail.

This example shows a simple way for components to communicate without having a direct parent-child relationship.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
