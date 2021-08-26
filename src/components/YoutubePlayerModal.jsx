import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
      height: "300px",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
      height: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "200px",
    },
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));

export default function YoutubePlayerModal({ open = false, onClose, videoId }) {
  const [modalStyle] = React.useState(getModalStyle);
  const classes = useStyles();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <button
        onClick={onClose}
        style={{
          marginBottom: "5px",
          backgroundColor: "#f50057",
          color: "white",
          borderRadius: "5px",
        }}
      >
        x
      </button>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        width="100%"
        height="90%"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      ></iframe>
    </div>
  );

  return (
    <Modal open={open} onClose={onClose}>
      {body}
    </Modal>
  );
}
