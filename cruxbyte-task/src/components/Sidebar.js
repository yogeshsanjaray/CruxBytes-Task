import { makeStyles } from "@material-ui/core/styles";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import FileCopyRoundedIcon from "@material-ui/icons/FileCopyRounded";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Box,
  Fab,
} from "@material-ui/core";
import profile from "../images/profile.jpg";

const useStyles = makeStyles((theme) => ({
  sidebar: {
    width: "25%",
    height: "95vh",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "0.4rem",
    boxShadow: " 0px 0px 5px 0px grey",
  },
  topSide: {
    flex: "1",
    "& img": {
      marginTop: "2rem",
      border: "6px solid #dedcdc",
      borderRadius: "50%",
    },
  },
  cameralogo: {
    border: "4px solid #fff",
    borderRadius: "50%",
    position: "absolute",
    left: "180px",
    top: "120px",
  },
  historybtn: {
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    fontWeight: "bold",
  },
  copy: {
    display: "flex",
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <>
      <section className={classes.sidebar}>
        <Box className={classes.topSide}>
          <img alt="Not Found!!" src={profile} width="100" height="100" />

          <div className={classes.cameralogo}>
            <Fab size="small" color="primary" aria-label="add">
              <CameraAltOutlinedIcon />
            </Fab>
          </div>
          <Typography variant="h6" gutterBottom>
            Patient Name
          </Typography>
        </Box>
        <Box className={classes.bottomSide}>
          <Button variant="outlined" className={classes.historybtn} fullWidth>
            History
          </Button>
          <Box className={classes.copy}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              defaultValue="https://www.adobe.com/"
            />
            <Button variant="outlined">
              <FileCopyRoundedIcon />
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
}

export default Sidebar;
