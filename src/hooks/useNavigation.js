import { useNavigate } from 'react-router-dom';

/**
 * Custom hook for navigation functionality
 * @returns {Object} Navigation methods
 */
export const useNavigation = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const handleLinkClick = (e, path) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(path);
    };

    return {
        navigateTo,
        handleLinkClick
    };
};
