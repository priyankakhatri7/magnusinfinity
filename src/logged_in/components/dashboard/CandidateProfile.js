import React, { useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import {
  Paper,
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { withStyles, useTheme } from '@mui/styles';
import ColoredButton from "../../../shared/components/ColoredButton";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
});

function CandidateProfile(props) {
  const { classes, resume, experience, otherDetails } = props;
  const [uploadedResume, setUploadedResume] = useState(null);
  const theme = useTheme();

  const handleResumeUpload = (event) => {
    setUploadedResume(event.target.files[0]);
  };

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Candidate Profile
      </Typography>
      <Box mt={2}>
        <Typography variant="subtitle1">Resume</Typography>
        <Typography variant="body2">{uploadedResume ? uploadedResume.name : resume}</Typography>
        <form className={classes.form}>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
              <TextField
                type="file"
                onChange={handleResumeUpload}
                className={classes.input}
              />
            </Grid>
            <Grid item>
              <ColoredButton
                variant="contained"
                disableElevation
                onClick={() => {
                  // Todo upload resume to S3
                }}
                color={theme.palette.common.black}
              >
                Upload
              </ColoredButton>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Experience</Typography>
        <List>
          {experience.map((exp, index) => (
            <ListItem key={index}>
              <ListItemText primary={exp} />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box mt={2}>
        <Typography variant="subtitle1">Other Details</Typography>
        <Typography variant="body2">{otherDetails}</Typography>
      </Box>
    </Paper>
  );
}

CandidateProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  resume: PropTypes.string,
  experience: PropTypes.arrayOf(PropTypes.string),
  otherDetails: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(CandidateProfile);