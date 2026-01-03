/**
 * Custom hook for managing image grid with lightbox functionality
 * @param {Array} images - Array of image objects with src and thumb properties
 * @returns {Object} Grid rendering function and lightbox handlers
 */
export const useImageGrid = (images) => {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        padding: '20px 0'
    };

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'cover'
    };

    const containerStyle = {
        cursor: 'pointer',
        borderRadius: '8px',
        overflow: 'hidden'
    };

    const renderGrid = (onImageClick) => (
        <div style={gridStyle}>
            {images.map((item, index) => (
                <div
                    key={index}
                    style={{
                        ...containerStyle,
                        position: 'relative',
                    }}
                    onClick={() => onImageClick(index)}
                >
                    {typeof item.thumb === 'string' ? (
                        <img
                            src={item.thumb}
                            alt={item.alt || `Media ${index + 1}`}
                            style={imageStyle}
                            loading="lazy"
                            onError={(e) => {
                                console.error(`Failed to load thumbnail for ${item.alt}`);
                                e.target.style.backgroundColor = '#f0f0f0';
                            }}
                        />
                    ) : (
                        item.thumb
                    )}
                    {item.type === 'video' && (
                        <div
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'rgba(220, 53, 69, 0.95)',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                pointerEvents: 'none',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                border: '2px solid rgba(255, 255, 255, 0.4)',
                                transition: 'transform 0.2s ease',
                            }}
                        >
                            <svg
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="white"
                                style={{ marginLeft: '2px' }}
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    return {
        renderGrid
    };
};
