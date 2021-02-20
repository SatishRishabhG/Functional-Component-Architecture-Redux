import { Provider } from 'react-redux';
import { ConnectContainerCountriesDataGrid } from './containers';
import { store as configuredStore } from './store';

const App = (): React.ReactElement => {

  return (
    <Provider store={configuredStore()}>
      <ConnectContainerCountriesDataGrid></ConnectContainerCountriesDataGrid>
    </Provider>
  );
}

export default App;
