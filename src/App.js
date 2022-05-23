import './App.css';
import { createContext, useState } from 'react';
import LoadingScreen from './components/main/LoadingScreen';
import AppContent from './components/main/AppContent';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
  position: relative;
`

export const GlobalContext = createContext()
function App() {
  const [isLoading, setLoading] = useState(true)

  const showLoading = () => setLoading(true)
  const hideLoading = () => setLoading(false)
  
  return (
    <GlobalContext.Provider value={{
      showLoading,
      hideLoading
    }}>
      <Wrapper> 
        <LoadingScreen isLoading={isLoading} /> 
        <AppContent />
      </Wrapper>
    </GlobalContext.Provider>
  );
}

export default App;
