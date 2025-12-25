import { useState } from 'react';

/**
 * Custom hook for managing lightbox state and functionality
 * @returns {Object} Lightbox state and handlers
 */
export const useLightbox = () => {
    const [index, setIndex] = useState(-1);

    const openLightbox = (slideIndex) => {
        setIndex(slideIndex);
    };

    const closeLightbox = () => {
        setIndex(-1);
    };

    const isOpen = index >= 0;

    return {
        index,
        isOpen,
        openLightbox,
        closeLightbox
    };
};
