import React, {useState, useEffect} from "react";
import UploadService from "../services/FileUploadService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [fileName, setFileName] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const fileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const upload = (event) => {
    let currentFile = selectedFiles[0];

    setProgress(0);
    setCurrentFile(currentFile);
    UploadService.upload(currentFile, fileName, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
        setOpen(false);

        return response.data.message;
        //return UploadService.getFiles();
      })
      .then((files) => {
        setFileInfos(files.data);
      })
      .catch(() => {
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Propose new route
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Propose new route</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Text here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name your run"
            type="text"
            onChange={fileNameChange}
            fullWidth
          />
          <input
            onChange={selectFile}
            className={classes.input}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" fullWidth>
              Choose File
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            color="primary"
            component="label"
            disabled={!selectedFiles || !fileName}
            onClick={upload}
          >
            Upload
          </Button>
          {currentFile && (
            <CircularProgress variant="static" value={progress}/>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default UploadFiles;
