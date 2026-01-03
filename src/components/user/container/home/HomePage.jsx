import SEO from 'src/SEO/SEO';
import { pageSEO } from 'src/SEO/seoConfig';
import { organizationSchema, websiteSchema } from 'src/SEO/schemas';
import Slider from 'src/components/user/container/header/Slider';
import Principal from 'src/components/user/container/principal/Principal';
import News from 'src/components/user/container/news/News';
import CourseContainer from 'src/components/user/container/course/CourseContainer';
import PhotoGallery from 'src/components/user/container/gallery/PhotoGallery';
import Chairman from 'src/components/user/container/chairman/Chairman';

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
            <Chairman />
            <Principal />
            <News />
            <CourseContainer />
            <PhotoGallery />
        </>
    );
};

export default HomePage;
