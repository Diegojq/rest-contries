import { useRoutes, BrowserRouter } from "react-router-dom";
import { Header } from "../../components/Header";

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      /*{path:"/", element:}*/
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
