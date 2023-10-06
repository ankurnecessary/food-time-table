import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import UserRegistration from './pages/UserRegistration';
import SignIn from './pages/SignIn';

const router = createBrowserRouter([
  {
    path: '/'
    , element: <Root />
    , children: [
      {
        index: true
        , element: <HomePage />
      }
      , {
        path: 'user-registration'
        , element: <UserRegistration />
      }
      , {
        path: 'sign-in'
        , element: <SignIn />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
