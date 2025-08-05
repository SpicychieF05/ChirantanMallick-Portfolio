import React, { useEffect, useState } from "react";

interface OptimizedImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
  loading?: "lazy" | "eager";
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = "",
  fallback,
  loading = "lazy",
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    setImageSrc(src);
    setImageLoaded(false);
    setImageError(false);
  }, [src]);

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const handleError = () => {
    console.warn(`Failed to load image: ${imageSrc}`);
    setImageError(true);
    if (fallback) {
      setImageSrc(fallback);
      setImageLoaded(true); // Show fallback immediately
    }
  };

  return (
    <div className={`relative ${className}`}>
      <img
        src={imageSrc}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-20"
        }`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center rounded bg-slate-800/50">
          <div className="border-accent-teal h-6 w-6 animate-spin rounded-full border-2 border-t-transparent"></div>
        </div>
      )}
      {imageError && !fallback && (
        <div className="absolute inset-0 flex items-center justify-center rounded bg-slate-800/50">
          <span className="text-sm text-slate-400">Image unavailable</span>
        </div>
      )}
    </div>
  );
};
