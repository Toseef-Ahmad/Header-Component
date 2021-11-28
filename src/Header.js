import React from 'react';

import { Grid, Box, Typography, Chip, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EditIcon from '@mui/icons-material/Edit';
import GroupIcon from '@mui/icons-material/Group';
import SendInvitation from './SendInvitation';
import MembersList from './MembersList';
// Add style manually
import 'react-upload-gallery/dist/style.css'; // or scss
import { withStyles } from '@mui/styles';
import styles from './HeaderStyles';

const Header = (props) => {
  const { classes } = props;
  const [member, setMember] = React.useState(1);
  const [groupCode, setGroupCode] = React.useState('azjz5 ');
  const [groupImg, setGroupImg] = React.useState(
    'https://app.andcomag.com/static/media/family.7b6ab3a5.jpg'
  );

  const [isOpen, setIsOpen] = React.useState(false);

  const handleUploadImg = ({ target }) => {
    setImage(target.value);
  };

  const handleSendInvitation = () => {
    setIsOpen(true);
  };

  const closeSendInvitation = () => {
    setIsOpen(false);
  };

  return (
    <Grid container spacing={3} style={{ padding: 50 }}>
      <Box
        component={Grid}
        item
        lg={4}
        md={4}
        sm={4}
        display={{ xs: 'none', md: 'block', lg: 'block', sm: 'block' }}
        // style={{ position: 'relative' }}
      >
        <div style={{ position: 'relative', width: '50%', marginLeft: 'auto' }}>
          <input
            type="file"
            accept="image/*"
            id="uploadImg"
            style={{ display: 'none' }}
          />
          <label htmlFor="uploadImg">
            <img
              src={groupImg}
              className={classes.groupImg}
              onChange={handleUploadImg}
            />
          </label>
          <EditIcon
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
            }}
          />
        </div>
      </Box>
      <Grid item margin="normal" padding="normal" lg={6} md={6} sm={8} xs={12}>
        <div className={classes.header}>
          <Typography variant="h4">Toseef</Typography>
          <div className={classes.grow} />
          <Chip label="family" color="primary" style={{ marginRight: 10 }} />
          <Button variant="outlined" onClick={handleSendInvitation}>
            <PersonAddIcon />
            SEND INVITAITION
          </Button>
        </div>
        <div className={classes.membersCount}>
          <ImportContactsIcon />
          <Button style={{ marginLeft: 12 }}>
            <GroupIcon /> {member} MEMBER
          </Button>
          <div className={classes.grow} />
          <Chip label={`Group code: ${groupCode}`} />
        </div>
        <div className={classes.joinGroupContainer}>
          <Button variant="outlined" style={{ marginRight: 12 }}>
            <AddIcon /> NEW GROUP
          </Button>
          <Button variant="outlined">
            <PersonAddIcon /> JOIN A GROUP
          </Button>
        </div>
      </Grid>
      <SendInvitation
        open={isOpen}
        groupCode={groupCode}
        closeSendInvitation={closeSendInvitation}
      />
      <MembersList />
    </Grid>
  );
};

export default withStyles(styles)(Header);
