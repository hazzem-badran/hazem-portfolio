import { useEffect, useRef } from 'react';

// Hook for performance optimization - debounce function calls
export const useDebounce = (callback, delay) => {
  const debounceRef = useRef();

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const debouncedCallback = (...args) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };

  return debouncedCallback;
};

// Hook for intersection observer - lazy loading
export const useIntersectionObserver = (callback, options = {}) => {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [callback]);

  return ref;
};

// Hook for preloading images
export const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    const preloadImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      return img;
    });

    return () => {
      preloadImages.forEach(img => {
        img.src = '';
      });
    };
  }, [imageUrls]);
};
