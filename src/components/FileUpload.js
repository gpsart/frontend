import React, {useState, useEffect} from "react";
import UploadService from "../services/FileUploadService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [fileName, setFileName] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const [fileInfos, setFileInfos] = useState([]);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };

  const fileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const upload = (event) => {
    console.log(event.target);
    let currentFile = event.target.files[0];

    setProgress(0);
    setCurrentFile(currentFile);
    UploadService.upload(currentFile, fileName, (event) => {
      setProgress(Math.round((100 * event.loaded) / event.total));
    })
      .then((response) => {
        setMessage(response.data.message);
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
      {currentFile && (
        <CircularProgress variant="static" value={progress}/>
      )}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="route-name" label="Standard" onChange={fileNameChange}/>
        <Button
          variant="contained"
          component="label"
          //disabled={!selectedFiles}
          //onChange={selectFile}
        >
          Upload File
          <input
            type="file"
            style={{display: "none"}}
            onChange={upload}
          />
        </Button>
      </form>
      {/*<input type="file" onChange={selectFile}/>*/}

      {/*<Button*/}
      {/*  variant="contained"*/}
      {/*  disabled={!selectedFiles}*/}
      {/*  onClick={upload}*/}
      {/*>*/}
      {/*  Upload*/}
      {/*</Button>*/}

      {/*<Alert severity="info">{message}</Alert>*/}
    </div>
  );
}
export default UploadFiles;
