import { useRoutes, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header";
import { Home } from "../Home";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([{ path: "/", element: <Home /> }]);

    return routes;
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
