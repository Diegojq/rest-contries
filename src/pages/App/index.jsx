import { useRoutes, BrowserRouter } from "react-router-dom";

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
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
