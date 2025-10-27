import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routeConfig } from './routes'

const AppRouterInner = () => {
  const routes = useRoutes(routeConfig)
  return routes
}

export const AppRouter = () => (
  <BrowserRouter>
    <AppRouterInner />
  </BrowserRouter>
)
