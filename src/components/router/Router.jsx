import { Route, Routes } from 'react-router-dom';
import AppRouter from 'src/components/router/AppRouter';

/**
 * All the registered routes for the application.
 *
 * @returns {import("react").FunctionComponent}
 */
function Router() {
    return (
        <Routes>
            <Route path='/*' element={<AppRouter />} />
        </Routes>
    );
}

export default Router;
