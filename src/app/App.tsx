import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from '@components/common/ErrorBoundary/ErrorBoundary';
import AppRoutes from '@routes/AppRoutes';

import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <AppRoutes />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
