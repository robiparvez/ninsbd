import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from '../../services/ScrollToTop';
import { logPageView } from '../../services/analytics';
import Footer from '../user/container/footer/Footer';
import Slider from '../user/container/header/Slider';
import Topbar from '../user/container/header/Topbar';
import FbMessengerChat from '../user/components/facebook/FbMessengerChat';

// Lazy load components for better performance
const HomePage = lazy(() => import('../user/container/home/HomePage'));
const Contact = lazy(() => import('../user/components/contact/Contact'));
const Notice = lazy(() => import('../user/components/notice/Notice'));
const Teacher = lazy(() => import('../user/components/teacher/Teacher'));
const Director = lazy(() => import('../user/components/director/Director'));
const Staff = lazy(() => import('../user/components/staff/Staff'));
const About = lazy(() => import('../user/container/about/About'));
const Course = lazy(() => import('../user/container/course/Course'));
const Gallery = lazy(() => import('../user/container/gallery/Gallery'));

// Loading component
const LoadingSpinner = () => (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        fontSize: '18px',
        color: '#666'
    }}>
        Loading...
    </div>
);

function AppRouter() {
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 900
        });
    }, []);

    // Track page views with Google Analytics
    useEffect(() => {
        logPageView(location.pathname + location.search);
    }, [location]);

    return (
        <div className='App'>
            {/* Top Section */}
            <Topbar />

            <FbMessengerChat />

            <ScrollToTop>
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/gallery' element={<Gallery />} />
                    <Route path='/course' element={<Course />} />
                    <Route path='/notice' element={<Notice />} />
                    <Route path='/teacher' element={<Teacher />} />
                    <Route path='/director' element={<Director />} />
                    <Route path='/staff' element={<Staff />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                </Suspense>
            </ScrollToTop>

            {/* Bottom Section */}
            <Footer />
        </div>
    );
}

export default AppRouter;
