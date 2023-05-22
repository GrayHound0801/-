import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/main/Main';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
]);

export default router;
