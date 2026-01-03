import {
    One,
    OneThumb,
    Two,
    TwoThumb,
    Three,
    ThreeThumb,
    Four,
    FourThumb,
    Five,
    FiveThumb,
    Six,
    SixThumb,
    Seven,
    SevenThumb,
    Eight,
    EightThumb,
    Nine,
    NineThumb,
    Ten,
    TenThumb,
    Eleven,
    ElevenThumb,
    Twelve,
    TwelveThumb,
    CampusVideo,
    FarewellVideo,
    InternationalNursesDayVideo,
    CampusVideoThumb,
    FarewellVideoThumb,
    InternationalNursesDayThumb,
} from 'src/components/user/container/gallery/Data';

/**
 * Custom hook for managing gallery media and data preparation
 * @returns {Object} Gallery data and utilities
 */
export const useGallery = () => {
    const mediaItems = [
        // Videos
        { type: 'video', thumb: CampusVideoThumb, src: CampusVideo, alt: 'Campus Video' },
        { type: 'video', thumb: FarewellVideoThumb, src: FarewellVideo, alt: 'Farewell Ceremony Video' },
        { type: 'video', thumb: InternationalNursesDayThumb, src: InternationalNursesDayVideo, alt: 'International Nurses Day Video 2023' },
        // Images
        { type: 'image', thumb: OneThumb, src: One, alt: 'Gallery 1' },
        { type: 'image', thumb: TwoThumb, src: Two, alt: 'Gallery 2' },
        { type: 'image', thumb: ThreeThumb, src: Three, alt: 'Gallery 3' },
        { type: 'image', thumb: FourThumb, src: Four, alt: 'Gallery 4' },
        { type: 'image', thumb: FiveThumb, src: Five, alt: 'Gallery 5' },
        { type: 'image', thumb: SixThumb, src: Six, alt: 'Gallery 6' },
        { type: 'image', thumb: SevenThumb, src: Seven, alt: 'Gallery 7' },
        { type: 'image', thumb: EightThumb, src: Eight, alt: 'Gallery 8' },
        { type: 'image', thumb: NineThumb, src: Nine, alt: 'Gallery 9' },
        { type: 'image', thumb: TenThumb, src: Ten, alt: 'Gallery 10' },
        { type: 'image', thumb: ElevenThumb, src: Eleven, alt: 'Gallery 11' },
        { type: 'image', thumb: TwelveThumb, src: Twelve, alt: 'Gallery 12' },
    ];

    const slides = mediaItems.map((item) => {
        if (item.type === 'video') {
            return {
                type: 'video',
                sources: [
                    {
                        src: item.src,
                        type: 'video/mp4',
                    },
                ],
                poster: item.thumb,
                width: 1920,
                height: 1080,
            };
        }
        return {
            src: item.src,
        };
    });

    // Lightbox configuration
    const lightboxConfig = {
        plugins: ['Zoom', 'Slideshow', 'Counter', 'Fullscreen', 'Video'],
        slideshow: { delay: 3000 },
        zoom: {
            maxZoomPixelRatio: 3,
            scrollToZoom: true,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
        },
        counter: { container: { style: { top: 'unset', bottom: 0 } } },
        carousel: {
            finite: true,
            preload: 2,
            padding: '16px',
            spacing: '30%',
            imageFit: 'contain',
        },
        animation: {
            fade: 300,
            swipe: 300,
            easing: 'ease-out',
        },
        controller: {
            closeOnBackdropClick: true,
            closeOnPullDown: true,
            closeOnPullUp: false,
        },
        video: {
            autoPlay: true,
            muted: false,
            controls: true,
            playsInline: true,
            preload: 'metadata',
            loop: false,
            disablePictureInPicture: false,
            controlsList: 'nodownload',
        },
    };

    return {
        mediaItems,
        slides,
        lightboxConfig,
    };
};
