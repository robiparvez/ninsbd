import { Helmet } from '@vuer-ai/react-helmet-async';

/**
 * SEO component for managing meta tags, Open Graph, and structured data
 * @param {Object} props - SEO configuration props
 */
const SEO = ({
    title = 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (এনআইএনএস) - Best Nursing Institute in Rangpur, Bangladesh',
    description = 'এনআইএনএস - Northern Institute of Nursing Science in Rangpur. Offering 3-year Diploma in Nursing Science and Midwifery. BNMC approved nursing education with experienced faculty and modern facilities.',
    keywords = 'এনআইএনএস, Northern Nursing Institute, Nursing colleges in Bangladesh, Best nursing institutes in BD, Nursing education Rangpur, Diploma in Nursing Bangladesh, BNMC approved nursing college, নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স',
    canonicalUrl = '',
    ogType = 'website',
    ogImage = '/images/nins-logo-footer.png',
    structuredData = null,
    noindex = false,
}) => {
    const siteUrl = 'https://www.ninsbd.com';
    const fullCanonicalUrl = canonicalUrl || siteUrl;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    // Default structured data for organization
    const defaultStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        'name': 'নর্দান ইন্সটিটিউট অব নার্সিং সায়েন্স (NINS)',
        'alternateName': 'Northern Institute of Nursing Science',
        'url': siteUrl,
        'logo': `${siteUrl}/images/nins-logo-footer.png`,
        'description': description,
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
            'https://www.facebook.com/ninsrangpur'
        ]
    };

    const finalStructuredData = structuredData || defaultStructuredData;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <html lang="bn-BD" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content="Northern Institute of Nursing Science" />
            <link rel="canonical" href={fullCanonicalUrl} />

            {/* Robots Meta */}
            {noindex && <meta name="robots" content="noindex,nofollow" />}
            {!noindex && <meta name="robots" content="index,follow" />}
            <meta name="googlebot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />
            <meta name="bingbot" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

            {/* Geographic Targeting */}
            <meta name="geo.region" content="BD-55" />
            <meta name="geo.placename" content="Rangpur, Bangladesh" />
            <meta name="geo.position" content="25.7439;89.2752" />
            <meta name="ICBM" content="25.7439, 89.2752" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullOgImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:site_name" content="এনআইএনএস" />
            <meta property="og:locale" content="bn_BD" />
            <meta property="og:locale:alternate" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullCanonicalUrl} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullOgImage} />
            <meta name="twitter:creator" content="@ninsbd" />

            {/* Additional SEO Tags */}
            <meta name="format-detection" content="telephone=yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="theme-color" content="#165587" />

            {/* Structured Data / JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(finalStructuredData)}
            </script>

            {/* Preconnect to external domains for performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        </Helmet>
    );
};

export default SEO;
