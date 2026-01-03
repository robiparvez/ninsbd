import { Col, Container, Row } from 'react-bootstrap';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Zoom, Slideshow, Counter, Fullscreen } from "yet-another-react-lightbox/plugins";
import { NoticeOne as One, NoticeOneThumb as OneThumb, NoticeTwo as Two, NoticeTwoThumb as TwoThumb, NoticeThree as Three, NoticeThreeThumb as ThreeThumb, NoticeFour as Four, NoticeFourThumb as FourThumb, NoticeFive as Five, NoticeFiveThumb as FiveThumb, NoticeSix as Six, NoticeSixThumb as SixThumb, NoticeSeven as Seven, NoticeSevenThumb as SevenThumb, NoticeEight as Eight, NoticeEightThumb as EightThumb } from 'src/components/user/Data';
import { useLightbox } from 'src/hooks/useLightbox';
import { useImageGrid } from 'src/hooks/useImageGrid.jsx';
import './notice.css';

export default function Notice() {
    const { index, isOpen, openLightbox, closeLightbox } = useLightbox();

    const images = [
        { thumb: OneThumb, alt: '২০২১-২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি' },
        { thumb: TwoThumb, alt: 'ছাএ / ছাএীদের ইউনিফরমের বিবরনী' },
        { thumb: ThreeThumb, alt: 'বিস্তৃত পরীক্ষার তারিখ' },
        { thumb: FourThumb, alt: '২য় বর্ষের ক্লাস রুটিন-১' },
        { thumb: FiveThumb, alt: '২য় বর্ষের ক্লাস রুটিন-২' },
        { thumb: SixThumb, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-১' },
        { thumb: SevenThumb, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-2' },
        { thumb: EightThumb, alt: 'অনলাইনে পুনরায় ক্লাস শুরু করা প্রসঙ্গে' }
    ];

    const slides = [
        { src: One, alt: '২০২১-২২ শিক্ষাবর্ষে ভর্তি বিজ্ঞপ্তি' },
        { src: Two, alt: 'ছাএ / ছাএীদের ইউনিফরমের বিবরনী' },
        { src: Three, alt: 'বিস্তৃত পরীক্ষার তারিখ' },
        { src: Four, alt: '২য় বর্ষের ক্লাস রুটিন-১' },
        { src: Five, alt: '২য় বর্ষের ক্লাস রুটিন-২' },
        { src: Six, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-১' },
        { src: Seven, alt: '২য় ও ৩য় বর্ষের অনলাইন ক্লাসের রুটিন-2' },
        { src: Eight, alt: 'অনলাইনে পুনরায় ক্লাস শুরু করা প্রসঙ্গে' }
    ];

    const { renderGrid } = useImageGrid(images);
    return (
        <section id='gallary' style={{ backgroundColor: '#fff' }}>
            <Container fluid className='message-container' style={{ paddingLeft: '50px' }}>
                <Row>
                    <Col className='mx-auto my-3 text-center text-capitalize'>
                        <h1>
                            <strong style={{ color: 'brown' }}>বিজ্ঞপ্তি</strong>
                        </h1>
                    </Col>
                </Row>
                <div className='mb-5'>
                    {renderGrid(openLightbox)}

                    <Lightbox
                        open={isOpen}
                        close={closeLightbox}
                        slides={slides}
                        index={index}
                        plugins={[Zoom, Slideshow, Counter, Fullscreen]}
                        slideshow={{ delay: 3000 }}
                        zoom={{ maxZoomPixelRatio: 3 }}
                        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                    />
                </div>
            </Container>
        </section>
    );
}
