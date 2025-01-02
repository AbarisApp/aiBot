import React, { useEffect, useState } from 'react';
import PageNotFound from './PageNotFound';
import { useNavigate, useLocation } from 'react-router-dom';
// import { Commet } from 'react-loading-indicators';

const NotFoundWithDelay = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation(); // Get current location

    useEffect(() => {
        // Set a timer to redirect to the PageNotFound component after 4 seconds
        const timer = setTimeout(() => {
            setLoading(false);
        }, 4000);

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    useEffect(() => {
        // Check if the current route exists
        // If it exists, navigate to that route before showing the PageNotFound component
        if (location.pathname !== '*') {
            navigate(location.pathname); // Redirect to the valid route
        }
    }, [location, navigate]);

    if (loading) {
        return (
            <div
                className=""
                style={{
                    position: "absolute",
                    top: "40%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                {/* <Commet color="#0c0d0c" size="large" text="WAIT" textColor="#c89090" /> */}
            </div>
        );
    }

    return <PageNotFound />;
};

export default NotFoundWithDelay;
