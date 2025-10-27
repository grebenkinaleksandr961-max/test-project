import type { RouteObject } from 'react-router-dom'
import { ArticlePage, MainPage } from 'pages'

export const enum AppRoutes {
  MAIN = 'main',
  ARTICLE = 'article',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ARTICLE]: '/post/:id',
}

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.article,
    element: <ArticlePage />,
  },
]
