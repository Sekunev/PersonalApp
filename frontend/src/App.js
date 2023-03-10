import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <AppRouter />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
