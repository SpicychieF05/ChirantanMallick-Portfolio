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
    setImageError(true);
    if (fallback) {
      setImageSrc(fallback);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${
        imageLoaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      loading={loading}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};
