import { Provider } from "react-redux";
import React, { memo, Suspense } from "react";
import routes from "./router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import store from "./store";
const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>加载中</div>}>{renderRoutes(routes)}</Suspense>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
});

export default App;
