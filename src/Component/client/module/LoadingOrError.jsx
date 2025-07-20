import React from 'react';

function LoadingOrError({message}) {
    return (
        <div className="flex flex-col items-center justify-center fixed left-0 right-0 top-0 bottom-0">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"/>
            <span className="text-black">{message}</span>
        </div>
    );
}

export default LoadingOrError;