import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "853px",
    height: "480px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function YoutubePlayerModal({ open = false, onClose, videoId }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button onClick={onClose}>x</button>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );

  return (
    <div>
      <button type="button" onClick={onClose}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
