import React, { useState } from "react";
import { useStore, useSelector, useDispatch } from "react-redux";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import {
  Button,
  TextField,
  Typography,
  Grid,
  Box,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import "../formInfo.css";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#ff4081",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    paddingBottom: "5rem",
    margin: "0.4rem",
    boxShadow: " 0px 0px 5px 0px grey",
  },
  title: {
    margin: "22px 0px 0px 20px",
    paddingBottom: theme.spacing(1.5),
    fontWeight: "800",
    color: theme.palette.secondary.main,
    "& span": {
      color: theme.palette.secondary.main,
      padding: "2px 7px",
      marginRight: theme.spacing(1),
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: "50%",
    },
  },
  labelname: {
    marginRight: theme.spacing(5),
  },
  labels: {
    display: "flex",
    alignItems: "center",
  },
  part1: {
    marginLeft: theme.spacing(10),
    "& label": {
      marginTop: theme.spacing(2),
      fontSize: "0.9rem",
      fontWeight: "bold",
    },
    "& TextField": {
      marginBottom: "1rem",
    },
  },
  addressText: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "0.4rem",
  },
  submitBtn: {
    background: theme.palette.secondary.main,
    color: "#fff",
  },
}));

function FormInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const store = useStore();

  const forumValue = useSelector((state) => state.info);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [gender, setGender] = useState("");
  const [mstatus, setMstatus] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [dob, setDob] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState("");
  const [taddress, setTaddress] = useState("");
  const [taddress1, setTaddress1] = useState("");
  const [paddress, setPaddress] = useState("");
  const [paddress1, setPaddress1] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !fname ||
      !lname ||
      !gender ||
      !mstatus ||
      !mobileNum ||
      !dob ||
      !occupation ||
      !email ||
      !taddress ||
      !paddress
    ) {
      alert("Please fill all information");
    } else {
      let info = {
        id: new Date().getTime(),
        fullname: fname + " " + lname,
        gender: gender,
        mstatus: mstatus,
        mobileNum: mobileNum,
        dob: dob,
        occupation: occupation,
        email: email,
        temperoryAddress: taddress + " " + taddress1,
        permanentAddress: paddress + " " + paddress1,
      };

      axios
        .post("http://localhost:5000/users", info)
        .then((res) => {
          console.log("Data saved successfully!!");
        })
        .catch((err) => {
          console.log(err);
        });

      dispatch({ type: "addInfo", payload: info });
      alert("Data saved successfully!!");

      setFname("");
      setLname("");
      setGender("");
      setMstatus("");
      setMobileNum("");
      setDob("");
      setOccupation("");
      setEmail("");
      setTaddress("");
      setTaddress1("");
      setPaddress("");
      setPaddress1("");
    }
  };

  return (
    <>
      <section className={classes.root}>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            <span>1</span>Primary Details
          </Typography>

          <Box
            style={{
              border: "0.1px solid #c3c3c3",
              margin: "-29px 0px 25px 182px",
            }}
          ></Box>
          <Box className={classes.part1}>
            <Box style={{ display: "flex" }}>
              <label htmlFor="exampleField" className={classes.labelname}>
                Patient Name
              </label>
              <Box>
                <TextField
                  id="exampleField"
                  type="text"
                  name="firstname"
                  value={fname}
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  placeholder="First Name"
                  variant="outlined"
                  className={classes.fname}
                />
                <TextField
                  variant="outlined"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  style={{ marginLeft: "1.3rem" }}
                />
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={3} sm={3} className={classes.labels}>
                    <label htmlFor="gender">Gender</label>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="gender"
                        name="gender"
                        id="gender"
                        value={gender}
                        onChange={(e) => {
                          setGender(e.target.value);
                        }}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <label htmlFor="merital_status" className={classes.labels}>
                      Marital Status
                    </label>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <Box style={{ margin: "-12px 0px 0px 0px" }}>
                      <FormControl component="fieldset">
                        <RadioGroup
                          row
                          aria-label="merital_status"
                          name="merital_status"
                          id="merital_status"
                          value={mstatus}
                          onChange={(e) => {
                            setMstatus(e.target.value);
                          }}
                        >
                          <FormControlLabel
                            value="married"
                            control={<Radio />}
                            label="Married"
                          />
                          <FormControlLabel
                            value="unmarried"
                            control={<Radio />}
                            label="Unmarried"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <label htmlFor="mobile_num" className={classes.labels}>
                      Mobile number
                    </label>
                  </Grid>

                  <Grid item xs={9} sm={9}>
                    <TextField
                      id="mobile_num"
                      variant="outlined"
                      type="text"
                      value={mobileNum}
                      placeholder="+91 9988776655"
                      onChange={(e) => {
                        setMobileNum(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={3}>
                  <Grid item xs={3} sm={3}>
                    <label htmlFor="dob" className={classes.labels}>
                      Date Of Birth
                    </label>
                  </Grid>

                  <Grid item xs={9} sm={9}>
                    <TextField
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      style={{ padding: "10px 0px" }}
                    />
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <label
                      htmlFor="demo-simple-select-outlined-label"
                      className={classes.labels}
                    >
                      Occupation
                    </label>
                  </Grid>

                  <Grid item xs={9} sm={9}>
                    <FormControl variant="outlined">
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={occupation}
                        onChange={(e) => {
                          setOccupation(e.target.value);
                        }}
                      >
                        <MenuItem value="" style={{ padding: "10px" }}>
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Doctor"}>Doctor</MenuItem>
                        <MenuItem value={"Enginner"}>Enginner</MenuItem>
                        <MenuItem value={"Advocate"}>Advocate</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={3} sm={3}>
                    <label htmlFor="email" className={classes.labels}>
                      Email
                    </label>
                  </Grid>
                  <Grid item xs={9} sm={9}>
                    <TextField
                      id="email"
                      type="email"
                      variant="outlined"
                      placeholder="xyz@gmail.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Typography
            variant="subtitle1"
            gutterBottom
            className={classes.title}
          >
            <span>2</span>Commmunication Details
          </Typography>

          <Box
            style={{
              border: "0.1px solid #c3c3c3",
              margin: "-29px 0px 25px 252px",
            }}
          ></Box>
          <Box className={classes.part1} style={{ marginTop: "2rem" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Box style={{ display: "flex", marginTop: "1.2rem" }}>
                  <Box>
                    <label htmlFor="taddress" className={classes.labels}>
                      Temporary Address
                    </label>{" "}
                  </Box>

                  <Box className={classes.addressText}>
                    <TextField
                      id="taddress"
                      type="text"
                      variant="outlined"
                      value={taddress}
                      onChange={(e) => {
                        setTaddress(e.target.value);
                      }}
                      style={{ marginBottom: "0.8rem" }}
                    />
                    <TextField
                      variant="outlined"
                      value={taddress1}
                      onChange={(e) => {
                        setTaddress1(e.target.value);
                      }}
                      type="text"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box style={{ display: "flex", flexDirection: "column" }}>
                  <Box style={{ marginTop: "-42px" }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={check}
                          onChange={(e) => {
                            setCheck(e.target.value);
                          }}
                          name="checkedA"
                        />
                      }
                      label="copy temporary address"
                    />
                  </Box>

                  <Box style={{ display: "flex" }}>
                    <Box>
                      <label htmlFor="paddress" className={classes.labels}>
                        Permanent Address
                      </label>{" "}
                    </Box>
                    <Box className={classes.addressText}>
                      <TextField
                        id="paddress"
                        type="text"
                        value={paddress}
                        onChange={(e) => {
                          setPaddress(e.target.value);
                        }}
                        variant="outlined"
                        style={{ marginBottom: "0.8rem" }}
                      />
                      <TextField
                        variant="outlined"
                        value={paddress1}
                        onChange={(e) => {
                          setPaddress1(e.target.value);
                        }}
                        type="text"
                      />
                      <Button
                        variant="contained"
                        className={classes.submitBtn}
                        type="submit"
                        style={{
                          alignSelf: "flex-end",
                          marginTop: "1rem",
                          padding: "10px 40px",
                        }}
                      >
                        Add
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </form>
      </section>
    </>
  );
}

export default FormInfo;
