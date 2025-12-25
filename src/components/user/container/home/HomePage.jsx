import React from 'react';
import SEO from 'src/SEO/SEO';
import { pageSEO } from 'src/SEO/seoConfig';
import { organizationSchema, websiteSchema } from 'src/SEO/schemas';
import Slider from '../header/Slider';
import Principal from '../principal/Principal';
import News from '../news/News';
import CourseContainer from '../course/CourseContainer';
import PhotoGallery from '../gallery/PhotoGallery';

const HomePage = () => {
    // Combine multiple schemas for home page
    const homePageSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            organizationSchema,
            websiteSchema
        ]
    };

    return (
        <>
            <SEO
                title={pageSEO.home.title}
                description={pageSEO.home.description}
                keywords={pageSEO.home.keywords}
                canonicalUrl={pageSEO.home.canonicalUrl}
                structuredData={homePageSchema}
            />
            <Slider />
            <Principal />
            <News />
            <CourseContainer />
            <PhotoGallery />
        </>
    );
};

export default HomePage;
