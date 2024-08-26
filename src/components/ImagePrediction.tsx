import React, { useState } from 'react';

const ImagePrediction: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImage(file);
  };

  const handlePrediction = async () => {
    if (image) {
      const formData = new FormData();
      formData.append('file', image);

      const response = await fetch('your-backend-url/predict', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log(result);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handlePrediction}>Predict</button>
    </div>
  );
};

export default ImagePrediction;
