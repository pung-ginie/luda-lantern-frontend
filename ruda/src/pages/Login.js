import { useCallback } from "react";
import "../styles/Login.css";
import { Container, Grid,Typography, TextField, Button } from "@mui/material";
import { signin } from "../api/ApiService";


function Login() {
  const handleSubmit = (event) =>{
    event.preventDefalt();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    //apiService의 signin 메서드를 사용해 로그인
    signin({username:username,password:password});
  };
    

  return (
    <Container component="login">
      <Grid component="background">
      <div className="titles">루다의 소원등</div>
      
      <div className="login-form"/>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        { }
          <Grid className="email">
            <TextField>
              id="email"
              label="이메일 주소"
             name="email"
              autoComplate="email"
            </TextField>
          </Grid>
          <Grid className="password">
            <TextField>
              name="password"
              label="패스워드"
              type ="password"
              id="password"
              autoComplete="current-password"
            </TextField>
          </Grid>
          <Grid >
              <Button className="login-btn"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                <div className="btn-text">로그인</div>
              </Button>
            </Grid>
        



      </form>


      </Grid>
      
    </Container>
  );
};


export default Login;
