import { useEffect, useState } from 'react';
import { getImage } from '../lib/db';

interface ImageDisplayProps {
  imageId: string;
  className?: string;
}

export const ImageDisplay = ({ imageId, className = '' }: ImageDisplayProps) => {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const image = await getImage(imageId);
      if (image) {
        const url = URL.createObjectURL(image.data);
        setSrc(url);
        return () => URL.revokeObjectURL(url);
      }
    };

    loadImage();
  }, [imageId]);

  if (!src) {
    return <div className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-48"></div>;
  }

  return <img src={src} alt="" className={className} />;
};