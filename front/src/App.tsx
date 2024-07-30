import { RouterProvider } from 'react-router-dom';
import router from './router/Router';
import { Provider } from 'react-redux'; // pour connecter redux store à l'application React
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store'; // le store comprenant l'état de l'application

function App() {
    return (
      <Provider store={store}> {/* le provider de redux intègre l'ensemble de l'application */}
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    );
  }

export default App;
