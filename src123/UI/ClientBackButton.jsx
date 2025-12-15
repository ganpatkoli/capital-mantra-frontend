// components/UI/ClientBackButton.jsx
"use client";

import React from 'react';
import BackButton from './BackButton';

const ClientBackButton = () => {
    // Define the client-side function here
    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back();
        }
    };

    // Note: BackButton must be imported from the correct relative path in your structure:
    // If BackButton is in components/UI/, then the import above is correct.
    return <BackButton onClick={handleGoBack} />;
};

export default ClientBackButton;