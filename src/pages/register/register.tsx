import {
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  TextField,
  Typography,
} from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Meowilla
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
export default function Register() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div
        className={`flex flex-col items-center justify-center w-[100%] h-[100%] absolute top-0 left-0 bg-white`}
      >
        <div className="bg-[white] flex justify-center items-center p-4 flex-col rounded-[12px]">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-auto h-16 min-w-50 cursor-pointer"
          />
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={`w-full mt-1`} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <div className="flex gap-2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
