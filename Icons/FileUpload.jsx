import React, { useState } from "react";
import { Box } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";

// Check ReadMe File for code walkthrough

export default function FileUpload() {
  const [selectedFile, setSetlectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSetlectedFile(file);
  };

  return (
    <Box display="flex" alignItems="center">
      <label htmlFor="file-upload">
        <AttachFileIcon />
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedFile && <p>{selectedFile.name}</p>}
    </Box>
  );
}
