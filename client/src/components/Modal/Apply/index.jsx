import { storage } from "../../../firebase.js";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import classes from "./Apply.module.css";
import { AuthContext } from "../../../context/AuthContext.js";
import { Modal } from "react-bootstrap";
import Button from "../../Button/index.jsx";
import JobAPI from "../../../services/job.js";
export const Apply = ({ data }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const { user, application, applicant } = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (application) {
      if (
        window.confirm(
          "Do you want to change your application? If change your current application will disappear."
        )
      ) {
        setShow(true);
      } else {
        return;
      }
    } else {
      setShow(true);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    upLoadFiles(file);
    console.log(data);
    if (upLoadFiles(file)) {
      setText("Submit successfully");
      setIsSuccess(true);
    } else if (upLoadFiles(file) == false) {
      setText("ERROR");
      setIsSuccess(false);
    } else {
      setText("");
    }
  };
  const upLoadFiles = (file) => {
    if (!file) return false;
    if (file.type !== "application/pdf") return false;
    else {
      const storageRef = ref(storage, `/files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // setProgress(prog);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          if (application) {
            await JobAPI.updateApplication(application.id, {
              ...application,
              job: data,
            });
          } else {
            await JobAPI.addApplication(applicant?.id, data);
          }
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            await JobAPI.uploadCV(user.email, url);
          });
          // .then(async (cv) => {
          //
          // });
        }
      );
      return true;
    }
  };
  // console.log("state tai apply component: ", state);
  return (
    <>
      <Button className="rounded-2 my-5" onClick={handleShow}>
        Apply Job
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formHandler}>
            <input
              type="file"
              className="input"
              accept="application/pdf"
            ></input>
            <Button type="submit" className="rounded-2">
              Upload
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer className={classes.footer}>
          <p style={{ color: isSuccess ? "green" : "red" }}>{text}</p>
          <Button className="rounded-2" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
