import React from "react";
import { storage } from "firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

export const Apply = () => {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    upLoadFiles(file);
    console.log(file.type);
  };

  const upLoadFiles = (file) => {
    if (!file) return;
    if (file.type !== "application/pdf") console.log("Error");
    else {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(prog);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) =>
            console.log(url)
          );
        }
      );
    }
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input
          type="file"
          className="input"
          accept="application/pdf,application/msword,
application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          // onChange={fileValidation}
        ></input>
        <button type="submit">Upload</button>
      </form>
      <hr></hr>
      <h2>Uploaded {progress}%</h2>
    </div>
  );
};
