import React from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';

const AuthModal = () => {
  return (
    <Box
      sx={{ width: '100vw', height: '100vh',
        backgroundImage: 'url("space-wallpaper-stars-background.gif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Box sx={{ width: '600px', padding: '30px', backgroundColor: 'white', borderRadius: '20px', boxShadow: 3 }}>
        {/* <IconButton onClick={onClose}><CloseIcon /></IconButton> */}

        {/* Title */}
        <Box display="flex" justifyContent="center" marginBottom={5}>
          <Typography variant="h6" sx={{ fontSize: '16px', fontWeight: 500, color: '#7c8287' }}>
            Unlimited free access to our resources
          </Typography>
        </Box>

        {/* Sign Up and Login */}
        <Box display="flex" justifyContent="center" mt={3}>
          <Box width="50%">
            <Typography variant="h6" align="center" gutterBottom
              sx={{ fontWeight: 500, marginBottom: '20px', color: '#424547'}}>
              Sign up
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Button variant="outlined"
                startIcon={ <img src="Google-Symbol.png" alt="Google" style={{ width: 20, height: 20 }}/> }
                sx={{ marginBottom: '18px', width: '240px', height: '40px', color: '#696d70', borderColor: '#696d70' }}
              >
                Continue with Google
              </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Button
                variant="outlined"
                startIcon={ <img src="Facebook-logo.png" alt="Facebook" style={{ width: 32, height: 20 }} /> }
                sx={{ marginBottom: '18px', width: '240px', height: '40px', color: '#696d70', borderColor: '#696d70' }}
              >
                Continue with Facebook
              </Button>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }} >
              <Button variant="outlined"
                sx={{ marginBottom: '12px', width: '240px', height: '40px', color: '#696d70', borderColor: '#696d70' }}
                startIcon={ <img src="email-icon.png" alt="Email" style={{ width: 18, height: 18 }}/> }
              >
                Sign up with email
              </Button>
            </Box>
            
            <Typography variant="caption" display="block" align="center" mt={2}>
              By signing up, you agree to the{' '}
              <a href="#" style={{ color: '#70757a' }}>Terms of Service</a> and{' '}
              <a href="#" style={{ color: '#70757a' }}>Privacy Policy</a>.
            </Typography>
          </Box>

          <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

          <Box width="50%">
            <Typography variant="h6" align="center" gutterBottom
              sx={{ fontWeight: 500, marginBottom: '20px', color: '#424547' }}>
              Log in
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField label="Email address" type="email" variant="outlined"
                sx={{ width: '240px', height: '40px', marginBottom: '20px',
                  '& .MuiOutlinedInput-root': { height: '40px' },
                  '& .MuiInputLabel-root': { lineHeight: '0.8', fontSize: '14px' },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <TextField label="Password" type="password" variant="outlined"
                sx={{ width: '240px', height: '40px', marginBottom: '10px',
                  '& .MuiOutlinedInput-root': { height: '40px' },
                  '& .MuiInputLabel-root': { lineHeight: '0.8', fontSize: '14px' },
                }}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
              <Typography variant="caption" sx={{ display: 'flex', justifyContent: 'end', width: '240px' }}>
                <a href="#" style={{ color: '#70757a',}}>Forgot your password?</a>
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '12px' }}>
              <Button variant="contained" color="primary" sx={{ color: 'white', width: '100px', height: '40px' }}>
                Log in
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        {/* <Box
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default AuthModal;
