import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
