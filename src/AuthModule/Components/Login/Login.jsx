import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import loginImg from "../../../assets/images/Login img.jpg";
import useAuth from "../../../Hooks/useAuth";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
}));

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      await login(data);
      console.log("Login Success");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Form */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#152C5B" }}>
            Stay<span style={{ color: "#3252df" }}>cation.</span>
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, my: 2 }}>
            Sign In
          </Typography>

          <Typography sx={{ mb: 4, fontWeight: 300 }}>
            If you don't have an account register <br />
            You can{" "}
            <span style={{ color: "#152C5B", fontWeight: 800 }}>
              Register here !
            </span>
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <Typography
              variant="standard"
              sx={{ fontWeight: 600, color: "#152C5B", mb: 1 }}
            >
              Email Address
            </Typography>

            <TextField
              fullWidth
              placeholder="Please type here ..."
              variant="standard"
              autoComplete="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />

            {/* Password */}
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#152C5B", mb: 1, mt: 2 }}
            >
              Password
            </Typography>

            <TextField
              fullWidth
              type={showPassword ? "text" : "password"}
              placeholder="Please type here ..."
              variant="standard"
              autoComplete="current-password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Typography
              variant="body2"
              sx={{ mt: 1, color: "#4D4D4D", textAlign: "right" }}
            >
              Forgot Password ?
            </Typography>

            <Button
              type="submit"
              variant="contained"
              sx={{
                width: "100%",
                my: 5,
                py: 1.6,
                backgroundColor: "#3252DF",
                borderRadius: "8px",
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>

        {/* Image – hidden on mobile */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <Item>
            <Box sx={{ width: "100%", height: "100vh", position: "relative" }}>
              <img
                src={loginImg}
                alt="Login"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "25px",
                  objectFit: "cover",
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: 40,
                  left: 40,
                  color: "#fff",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Sign in to Roamhome
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  Homes as unique as you.
                </Typography>
              </Box>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
