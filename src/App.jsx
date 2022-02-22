import { Provider } from "react-redux";
import React, { memo, Suspense } from "react";
import routes from "./router";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import store from "./store";
const App = memo(() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>加载中</div>}>{renderRoutes(routes)}</Suspense>
      </BrowserRouter>
    </Provider>
  );
});

export default App;
