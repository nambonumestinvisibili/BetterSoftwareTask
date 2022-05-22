import './App.css';
import { useEffect, useState } from 'react';
import LoadingScreen from './components/main/LoadingScreen';
import AppContent from './components/main/AppContent';
import { loginAsAnonymousUser } from './services/auth/auth.service';
import { getJwtToken } from './services/auth/auth-header';

const loginIfThereIsNoJwtToken = (setLoading) => {
  getJwtToken() 
    ? setLoading(false)
    : loginAsAnonymousUser("xxxxxxxxx", () => setLoading(false))  
}

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    loginIfThereIsNoJwtToken(setLoading)
  }, [])
  
  return (
    <div>
      {
        isLoading 
          ? <LoadingScreen /> 
          : <AppContent />
      }
    </div>
  );
}

export default App;
