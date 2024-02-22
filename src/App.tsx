import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Main } from "./Pages/Main";
import { Second } from "./Pages/Second";
import { Third } from "./Pages/Third";
import { Device } from "./Pages/Device";
import { PreviousProvider } from "./Components/PreviousContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Device />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/second",
        element: <Second />,
      },
      {
        path: "/more",
        element: <Third />,
      },
    ],
  },
]);

function App() {
  return (
    <section className="application">
      <article>
        <PreviousProvider>
          <RouterProvider router={router} />
        </PreviousProvider>
      </article>
      <article className="intro">
        <div className="flex items-baseline">
          <h1>@wyd/ios-page</h1>
          <a
            href="https://github.com/wishyoudie"
            target="_blank"
            className="wishyoudie"
          >
            Made by @wishyoudie
          </a>
        </div>
        <p>This is a simple demo project illustrating usage of the package.</p>
        <p>
          The chosen device is iPhone 15 Pro. Note that the package does not
          provide any styles, apart from those required for animations. <br />
          This enables developers to use it in any way imaginable, not just for
          web apps built specifically for iOS devices.
        </p>
        <p>
          The demo uses{" "}
          <a
            href="https://reactrouter.com/en/main"
            target="_blank"
            style={{ color: "var(--link-color)" }}
          >
            React Router v6
          </a>{" "}
          for routing implementation. However, a custom router (or, correctly
          speaking, a custom navigator) aimed for satisfying web apps specifics,
          such as separate page history for different tabs, is planned in
          future.
        </p>
        <p></p>
        <p>
          Package is completely free for both educational and commercial
          purposes.
        </p>
      </article>
    </section>
  );
}

export default App;
