import { breadcrumbSchema } from 'src/SEO/schemas';

/**
 * Custom hook for generating breadcrumbs
 * @param {Array} breadcrumbs - Array of breadcrumb objects with name and url
 * @returns {Object} Breadcrumb schema
 */
export const useBreadcrumbs = (breadcrumbs) => {
    return breadcrumbSchema(breadcrumbs);
};
