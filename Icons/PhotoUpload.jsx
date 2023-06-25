import React, { useRef, useState } from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export default function PhotoUpload() {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <InsertPhotoIcon onClick={handleIconClick} />
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
      {imageSrc && <img src={imageSrc} alt="selected" />}
    </>
  );
}
