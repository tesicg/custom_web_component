# Web Component Example

This project is a simple demonstration of how to create a web component with separated HTML, CSS, and JavaScript (TypeScript).

## File Structure

-   `src/components/custom/my-component/my-component.html`: Contains the HTML for the component.
-   `src/components/custom/my-component/my-component.css`: Contains the CSS for the component.
-   `src/components/custom/my-component/my-component.ts`: The TypeScript file now imports the HTML and CSS files and uses them to build the component.
-   `index.html`: The main HTML file that uses the `<my-component>`.
-   `src/main.ts`: This file now only imports the component.

This separation of concerns makes the code more organized and easier to maintain.

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
