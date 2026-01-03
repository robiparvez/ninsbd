/**
 * Custom hook for course component styles
 * @returns {Object} Style objects for course component
 */
export const useCourseStyles = () => {
    const headingColCss = 'mx-auto px-lg-5 text-left mt-5';
    const titleTextUnderlineCss = { borderTop: '4px solid green', width: 50 };
    const subTextCssIntro = 'mt-3 text-muted w-100';
    const subTextCssOthers = 'mt-3 text-muted w-100 new-line';

    return {
        headingColCss,
        titleTextUnderlineCss,
        subTextCssIntro,
        subTextCssOthers
    };
};
