import { useRoutes, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header";
import { Home } from "../Home";
import { DetailCountry } from "../DetailCountry";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "/country/:alpha2Code", element: <DetailCountry /> },
    ]);

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
