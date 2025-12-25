/**
 * SEO configuration and metadata for different pages
 */

const siteUrl = 'https://www.ninsbd.com';

export const seoConfig = {
    defaultTitle: 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (এনআইএনএস) - Best Nursing Institute in Rangpur, Bangladesh',
    titleTemplate: '%s | এনআইএনএস',
    description: 'এনআইএনএস - Northern Institute of Nursing Science in Rangpur. Offering 3-year Diploma in Nursing Science and Midwifery. BNMC approved nursing education with experienced faculty and modern facilities.',
    siteUrl,
    siteName: 'এনআইএনএস',
    twitterHandle: '@ninsbd',
    facebookAppId: '',
};

export const pageSEO = {
    home: {
        title: 'এনআইএনএস',
        description: 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (এনআইএনএস) - Top nursing college in Rangpur, Bangladesh. 3-year Diploma in Nursing Science and Midwifery approved by BNMC. Experienced faculty, modern facilities, and excellent placement.',
        keywords: 'NINS, Northern Nursing Institute, Best nursing college Rangpur, Nursing education Bangladesh, BNMC approved nursing, Diploma in Nursing Bangladesh, নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স',
        canonicalUrl: `${siteUrl}/`,
    },
    about: {
        title: 'About NINS - Northern Institute of Nursing Science Rangpur Bangladesh',
        description: 'Learn about NINS - A premier nursing education institution in Rangpur with 9+ years of excellence. BNMC approved 3-year Diploma in Nursing Science and Midwifery program with modern infrastructure.',
        keywords: 'About NINS, Northern Nursing Institute Rangpur, Nursing college history, BNMC approved institute, Nursing education excellence',
        canonicalUrl: `${siteUrl}/about`,
    },
    course: {
        title: 'Diploma in Nursing Science and Midwifery - NINS Course Details',
        description: 'NINS offers 3-year Diploma in Nursing Science and Midwifery approved by Bangladesh Nursing and Midwifery Council (BNMC). Modern curriculum, practical training in 500-bed hospital, experienced faculty.',
        keywords: 'Diploma in Nursing Bangladesh, Nursing course details, BNMC approved course, Nursing admission, Nursing syllabus Bangladesh, Midwifery course',
        canonicalUrl: `${siteUrl}/course`,
    },
    gallery: {
        title: 'Photo Gallery - Campus Life at NINS',
        description: 'Explore NINS campus facilities, classrooms, laboratories, events, and student activities. View our modern nursing education infrastructure in Rangpur.',
        keywords: 'NINS gallery, Nursing college campus, Nursing lab facilities, Student life Bangladesh, Nursing college infrastructure',
        canonicalUrl: `${siteUrl}/gallery`,
    },
    notice: {
        title: 'Latest Notices & Announcements - NINS',
        description: 'Stay updated with the latest notices, announcements, and admission updates from Northern Institute of Nursing Science (NINS) Rangpur, Bangladesh.',
        keywords: 'NINS notices, Nursing admission notice, College announcements, Nursing exam schedule, NINS updates Bangladesh',
        canonicalUrl: `${siteUrl}/notice`,
    },
    teacher: {
        title: 'Expert Faculty - Experienced Nursing Teachers at NINS',
        description: 'Meet our highly qualified and experienced nursing faculty at NINS. Our teachers bring years of clinical and academic expertise to provide quality nursing education.',
        keywords: 'NINS faculty, Nursing teachers Bangladesh, Experienced nursing educators, Qualified nursing instructors, Medical faculty',
        canonicalUrl: `${siteUrl}/teacher`,
    },
    director: {
        title: 'Board of Directors - Leadership at NINS',
        description: 'Meet the governing body and board of directors at Northern Institute of Nursing Science (NINS). Experienced leadership committed to excellence in nursing education.',
        keywords: 'NINS directors, Governing body, College management, Leadership team, NINS administration',
        canonicalUrl: `${siteUrl}/director`,
    },
    staff: {
        title: 'Administrative Staff - Support Team at NINS',
        description: 'Our dedicated administrative and support staff ensure smooth operations at NINS. Committed to providing excellent service to students and faculty.',
        keywords: 'NINS staff, Administrative team, Support staff, College administration, NINS employees',
        canonicalUrl: `${siteUrl}/staff`,
    },
    contact: {
        title: 'Contact NINS - Admission Enquiry & Campus Location in Rangpur',
        description: 'Contact Northern Institute of Nursing Science (NINS) in Rangpur for admission enquiries, course information, and campus visits. Get in touch with our admission office today.',
        keywords: 'Contact NINS, Nursing admission enquiry, NINS Rangpur location, Nursing college contact, Admission helpline Bangladesh',
        canonicalUrl: `${siteUrl}/contact`,
    },
};

// Keyword variations for content optimization
export const targetKeywords = {
    primary: [
        'এনআইএনএস',
        'NINS',
        'Northern Nursing Institute',
        'Nursing colleges in Bangladesh',
        'Best nursing institutes in BD',
        'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স',
    ],
    secondary: [
        'Nursing education Rangpur',
        'Diploma in Nursing Bangladesh',
        'BNMC approved nursing college',
        'Nursing course Rangpur',
        'Best nursing college Bangladesh',
    ],
    local: [
        'Nursing institute Rangpur',
        'Nursing college Rangpur division',
        'Medical education Rangpur',
        'Healthcare education Bangladesh',
    ],
    longTail: [
        'How to become a nurse in Bangladesh',
        'Nursing admission requirements Bangladesh',
        'BNMC approved nursing colleges list',
        'Nursing career opportunities Bangladesh',
        'Best nursing colleges in northern Bangladesh',
    ],
};
