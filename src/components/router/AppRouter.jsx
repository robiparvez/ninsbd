import AOS from 'aos';
import 'aos/dist/aos.css';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from 'src/services/ScrollToTop';
import { logPageView } from 'src/services/analytics';
import Footer from 'src/components/user/container/footer/Footer';

import Topbar from 'src/components/user/container/header/Topbar';
import FbMessengerChat from 'src/components/user/components/facebook/FbMessengerChat';
import useLoadingSpinner from 'src/hooks/useLoadingSpinner';

// Lazy load components for better performance
const HomePage = lazy(() => import('src/components/user/container/home/HomePage'));
const Contact = lazy(() => import('src/components/user/components/contact/Contact'));
const Notice = lazy(() => import('src/components/user/components/notice/Notice'));
const Teacher = lazy(() => import('src/components/user/components/teacher/Teacher'));
const Director = lazy(() => import('src/components/user/components/director/Director'));
const Staff = lazy(() => import('src/components/user/components/staff/Staff'));
const About = lazy(() => import('src/components/user/container/about/About'));
const Course = lazy(() => import('src/components/user/container/course/Course'));
const Gallery = lazy(() => import('src/components/user/container/gallery/Gallery'));

function AppRouter() {
    const location = useLocation();
    const enableLoader = import.meta.env.VITE_ENABLE_LOADER === 'true';
    const loadingSpinner = useLoadingSpinner();

    useEffect(() => {
        AOS.init({
            duration: 900,
        });
    }, []);

    // Track page views with Google Analytics
    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location]);

    return (
        <div className="App">
            {/* Top Section */}
            <Topbar />

            <FbMessengerChat />

            <ScrollToTop>
                <Suspense fallback={enableLoader ? loadingSpinner : null}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/course" element={<Course />} />
                        <Route path="/notice" element={<Notice />} />
                        <Route path="/teacher" element={<Teacher />} />
                        <Route path="/director" element={<Director />} />
                        <Route path="/staff" element={<Staff />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </Suspense>
            </ScrollToTop>

            {/* Bottom Section */}
            <Footer />
        </div>
    );
}

export default AppRouter;
