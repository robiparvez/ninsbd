/**
 * Structured data schema generators for different page types
 */

export const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (NINS)',
    'alternateName': 'Northern Institute of Nursing Science',
    'url': 'https://www.ninsbd.com',
    'logo': 'https://www.ninsbd.com/images/nins-logo-footer.png',
    'image': 'https://www.ninsbd.com/images/nins-cover-original.png',
    'description': 'এনআইএনএস - Northern Institute of Nursing Science in Rangpur. Offering 3-year Diploma in Nursing Science and Midwifery approved by Bangladesh Nursing and Midwifery Council.',
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rangpur',
        'addressLocality': 'Rangpur',
        'addressRegion': 'Rangpur Division',
        'postalCode': '5400',
        'addressCountry': 'BD'
    },
    'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '25.7439',
        'longitude': '89.2752'
    },
    'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+880-521-',
        'contactType': 'Admissions',
        'areaServed': 'BD',
        'availableLanguage': ['Bengali', 'English']
    },
    'sameAs': [
        'https://www.facebook.com/ninsbd'
    ],
    'foundingDate': '2016',
    'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'value': '20'
    }
};

export const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    'name': 'Diploma in Nursing Science and Midwifery',
    'description': '3-year professional nursing diploma program approved by Bangladesh Nursing and Midwifery Council (BNMC)',
    'provider': {
        '@type': 'EducationalOrganization',
        'name': 'Northern Institute of Nursing Science (NINS)',
        'url': 'https://www.ninsbd.com'
    },
    'educationalCredentialAwarded': 'Diploma in Nursing Science and Midwifery',
    'timeRequired': 'P3Y',
    'inLanguage': 'bn-BD',
    'availableLanguage': ['Bengali', 'English'],
    'coursePrerequisites': 'SSC or equivalent qualification',
    'occupationalCredentialAwarded': 'Registered Nurse (BNMC)',
    'educationalLevel': 'Diploma',
    'courseMode': 'Full-time',
    'financialAidEligible': false
};

export const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (NINS)',
    'image': 'https://www.ninsbd.com/images/nins-cover-original.png',
    '@id': 'https://www.ninsbd.com',
    'url': 'https://www.ninsbd.com',
    'telephone': '+880-521-',
    'priceRange': 'Contact for details',
    'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Rangpur',
        'addressLocality': 'Rangpur',
        'addressRegion': 'Rangpur Division',
        'postalCode': '5400',
        'addressCountry': 'BD'
    },
    'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 25.7439,
        'longitude': 89.2752
    },
    'openingHoursSpecification': [
        {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday'
            ],
            'opens': '08:00',
            'closes': '17:00'
        }
    ],
    'sameAs': [
        'https://www.facebook.com/ninsbd'
    ]
};

export const breadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.name,
        'item': item.url
    }))
});

export const faqSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
        }
    }))
});

export const personSchema = (person) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    'name': person.name,
    'jobTitle': person.position,
    'worksFor': {
        '@type': 'EducationalOrganization',
        'name': 'Northern Institute of Nursing Science (NINS)'
    },
    'image': person.image,
    'description': person.qualification
});

export const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'NINS - Northern Institute of Nursing Science',
    'url': 'https://www.ninsbd.com',
    'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://www.ninsbd.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
    }
};
