import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';

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
