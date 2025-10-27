import ReactDOM from 'react-dom/client'
import App from './app/app'
import StoreProvider from './app/providers/storeProviders'
import './app/styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider>
    <App />
  </StoreProvider>
)
