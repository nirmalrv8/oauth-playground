import React from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Divider,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

const AuthModal = ({ onClose }) => {
  const open = true;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent sx={{ padding: '32px' }}>

        {/* Title */}
        <Box display="flex" justifyContent="center">
          <Typography 
            variant="h6" 
            sx={{ fontSize: '16px', fontWeight: 500, color: '#7c8287' }}
          >
            Unlimited free access to our resources
          </Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        {/* Sign Up and Login */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Box width="50%">
            <Typography variant="h6" align="center" gutterBottom
             sx={{ fontWeight: 500 }}
            >
              Sign up
            </Typography>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<GoogleIcon />}
              sx={{ marginBottom: '12px' }}
            >
              Continue with Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              startIcon={<FacebookIcon />}
              sx={{ marginBottom: '12px' }}
            >
              Continue with Facebook
            </Button>
            <Button variant="outlined" fullWidth sx={{ marginBottom: '12px' }}>
              Sign up with email
            </Button>
            <Typography variant="caption" display="block" align="center" mt={2}>
              By signing up, you agree to the{' '}
              <a href="#">Terms of Service</a> and{' '}
              <a href="#">Privacy Policy</a>.
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Box width="50%">
            <Typography variant="h6" align="center" gutterBottom
             sx={{ fontWeight: 500 }}
            >
              Log in
            </Typography>
            <TextField
              label="Email address"
              type="email"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                },
                '& .MuiInputLabel-root': {
                  lineHeight: '0.8',
                  fontSize: '14px'
                },
              }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              sx={{
                marginBottom: '20px',
                '& .MuiOutlinedInput-root': {
                  height: '40px',
                },
                '& .MuiInputLabel-root': {
                  lineHeight: '0.8',
                  fontSize: '14px'
                },
              }}
            />
            <Typography variant="caption" align="right" display="block">
              <a href="#">Forgot your password?</a>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: '12px' }}
            >
              Log in
            </Button>
          </Box>
        </Box>

        {/* Footer          */}
        <Box
          display="flex"
          justifyContent="space-between"
          mt={4}
          alignItems="center"
        >
          <Box>
            <a href="#">About</a> | <a href="#">Help Center</a> |{' '}
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a> |{' '}
            <a href="#">Careers</a>
          </Box>
          <Typography variant="caption">
            &copy; 2022 yourwebsite.com
          </Typography>
        </Box>

      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
