/**
 * Google Analytics Integration
 * Initialize this in your main App component
 */

// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('js', new Date());
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: window.location.pathname,
        });
    }
};

// Track page views
export const logPageView = (url) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const logEvent = (action, category, label, value) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Predefined event trackers
export const trackEvents = {
    // Contact form submission
    contactFormSubmit: (success) => {
        logEvent('submit_form', 'Contact', success ? 'Success' : 'Failed');
    },

    // Course page view
    viewCourse: (courseName) => {
        logEvent('view_item', 'Course', courseName);
    },

    // Admission enquiry
    admissionEnquiry: () => {
        logEvent('generate_lead', 'Admission', 'Enquiry Form');
    },

    // Gallery image view
    viewGalleryImage: (imageName) => {
        logEvent('view_item', 'Gallery', imageName);
    },

    // Notice view
    viewNotice: (noticeTitle) => {
        logEvent('view_item', 'Notice', noticeTitle);
    },

    // Download brochure/prospectus
    downloadBrochure: () => {
        logEvent('download', 'Marketing', 'Brochure');
    },

    // Social media click
    socialMediaClick: (platform) => {
        logEvent('click', 'Social Media', platform);
    },

    // Phone number click
    phoneClick: () => {
        logEvent('click', 'Contact', 'Phone Number');
    },

    // External link click
    externalLinkClick: (url) => {
        logEvent('click', 'External Link', url);
    },
};

// Track page load time
export const trackPageLoadTime = () => {
    if (typeof window !== 'undefined' && window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        if (pageLoadTime > 0) {
            logEvent('timing_complete', 'Page Load', 'Load Time', pageLoadTime);
        }
    }
};

// Track scroll depth
export const trackScrollDepth = () => {
    const depths = [25, 50, 75, 100];
    const trackedDepths = new Set();

    const checkScrollDepth = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;

        depths.forEach(depth => {
            if (scrollPercentage >= depth && !trackedDepths.has(depth)) {
                trackedDepths.add(depth);
                logEvent('scroll', 'Engagement', `${depth}%`, depth);
            }
        });
    };

    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', checkScrollDepth, { passive: true });
    }
};
