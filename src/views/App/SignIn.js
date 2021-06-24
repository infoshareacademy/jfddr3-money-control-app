import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      
      
    },
  },
}));

const SignIn = () => {
  const classes = useStyles();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
    
  };
  const btnStyle = {margin:"10px",
                    backgroundColor:"#156a77"}

  const avatarStyle = { backgroundColor: "#156a77" };

  return (
    <Grid className={classes.root} align="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField
          id="Outlined"
          label="E-mail"
          variant="outlined"
          type="password"
          color="black"
          helperText=""
          required
        />

        <TextField
          id="Outlined"
          label="Password"
          variant="outlined"
          color="black"
          type="password"
          required
        />
        <Grid>
          {" "}
          <Button type="submit" variant="contained" style={btnStyle} color="primary">
            Sign In
          </Button>
          <Typography>Forgot password? 
            <Link href="#"> Click here!</Link>
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default SignIn;

// export default function SignUp() {
// const emailRef = useRef()
// const passwordRef = useRef()
// const passwordConfirmRef = useRef()

// return (
//         <>
//            <Card>
//                <Card.Body>
//                    <h2 className='text-center mb-4'>Sign Up</h2>
//                    <Form>
//                        <Form.Group id='email'>
//                            <Form.Label>E-mail</Form.Label>
//                            <Form.Control
//                            style={{ marginBottom: '15px'}}type="email" ref={emailRef} required />
//                        </Form.Group>
//                        <Form.Group id='password'>
//                            <Form.Label>Password</Form.Label>
//                            <Form.Control
//                            style={{ marginBottom: '15px'}}
//                            type="password" ref={passwordRef} required />
//                        </Form.Group>
//                        <Form.Group id='password-confirm'>
//                            <Form.Label>Password Confirmation</Form.Label>
//                            <Form.Control
//                            type="password" ref={passwordConfirmRef} required />
//                        </Form.Group>
//                        <Button className="w-100"
//                        style={{ margin: '15px 0px'}}type='submit'> Sign Up
//                        </Button>
//                        </Form>
//                </Card.Body>
//             </Card>
//            <div className='w-100 text-center mt-2' >
//               Already have an account? Log In
//            </div>
//         </>
//     )
// }
