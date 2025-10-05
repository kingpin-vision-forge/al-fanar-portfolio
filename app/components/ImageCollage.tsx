import React from 'react';

const imagePaths = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
];

export default function ImageCollage() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {imagePaths.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Stock image ${index + 1}`}
          className="w-full h-48 object-cover rounded-lg"
        />
      ))}
    </div>
  );
}
