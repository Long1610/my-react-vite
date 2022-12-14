import { Navigate, useRoutes } from 'react-router-dom'
import Layout from 'layouts'
import RequireAuth from './requireAuth'
import LoginPage from 'pages/login'
import ProjectPage from 'pages/project'

const Routes = () => {
  const routes = useRoutes([
    {
      element: <Layout />,
      children: [
        {
          element: <RequireAuth />,
          children: [
            {
              path: '/issues',
              element: <ProjectPage />
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/',
      element: <Navigate to="/login" />
    }
  ])
  return routes
}

export default Routes
