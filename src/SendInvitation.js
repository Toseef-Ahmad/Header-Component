import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const SendInvitation = (props) => {
  const { groupCode, open, closeSendInvitation } = props;
  return (
    <>
      <Dialog open={open} onClose={closeSendInvitation}>
        <DialogTitle>Send Invitation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To invite other people to this group, send them the following code
            to use when creating an account:{' '}
            <Typography variant="h4">{groupCode}</Typography>
            Or send them an invitation by mail with the following form:
          </DialogContentText>
          <Paper style={{ padding: 10 }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              padding="100px"
            />
          </Paper>
          <div
            style={{
              marginTop: 10,
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button variant="contained" onClick={closeSendInvitation}>
              Close
            </Button>
            <Button
              color="error"
              style={{ marginLeft: 10 }}
              variant="contained"
            >
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// SendInvitaion.defaultProps = {
//   open: false,
// };

export default SendInvitation;
