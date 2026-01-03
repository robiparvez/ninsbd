import logo from 'src/components/user/images/logos/nins-logo-transparent-main.png';

// Custom hook for LoadingSpinner component
const useLoadingSpinner = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px',
                gap: '20px',
            }}
        >
            <div
                style={{
                    width: '80px',
                    height: '80px',
                    animation: 'spin 2s linear infinite',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={logo}
                    alt="NINS Logo"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
            <div
                style={{
                    fontSize: '16px',
                    color: '#666',
                    fontWeight: '500',
                    animation: 'pulse 1.5s ease-in-out infinite',
                }}
            ></div>
            <style>
                {`
                    @keyframes spin {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.5; }
                    }
                `}
            </style>
        </div>
    );
};

export default useLoadingSpinner;
