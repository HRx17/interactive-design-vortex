
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="btn-hover inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm"
        >
          <span className="relative z-10">Return to Home</span>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
