// Imports
import React, { useState } from "react";

import HeadPage from "@/web/components/Head";
import Footer from "@/web/components/Footer";
import Main from "@/web/components/Main";
import Sidebar from "@/web/components/Sidebar";
import styles from "@/web/styles/Upload.module.css";

// Welcome function
export default function Upload() {
  const [audioFile, setAudioFile] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setAudioFile({
      file: URL.createObjectURL(uploadedFile)});
  };

  const handleDeleteFile = () => {
    setAudioFile(null);
  };

  return (
    <>
      <HeadPage />

      <Main>
        <Sidebar />
        <div className={styles.container}>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            name="upload_music"
            id="file"
            className={styles.upload}
          />
          <label for="file" className={styles.label}>
            Upload music
          </label>
          <button onClick={handleDeleteFile} className={styles.btnCtrl}>
            Delete
          </button>
        </div>
        <div className={styles.musicContainer}>
          {audioFile && (
              <audio controls className={styles.audioPlayer}>
                <source src={audioFile.file} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
          )}
        </div>
      </Main>

      <Footer />
    </>
  );
}
