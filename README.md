# Food Ordering Website

This is a React-based food ordering application.

## Setup

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Run the development server:
    ```bash
    npm run dev
    ```

3.  Open your browser at the URL shown in the terminal (usually `http://localhost:5173`).

## Environment Variables

The `.env` file has been configured with public Swiggy API proxies. If these endpoints stop working, you may need to find new proxy URLs or use a CORS extension.

## Notes

-   The audio file `success.mp3` used in the Cart component is missing. You can add a file named `success.mp3` to the `public` folder (create one if it doesn't exist) to enable the order confirmation sound.
