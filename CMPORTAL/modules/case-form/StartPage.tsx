// StartPage.tsx
import React, { useState } from 'react';
import {
  Typography,
  Paper,
  Container,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from '@mui/material';
import { FormData } from './types';

type StartPageProps = {
  onNext: () => void;
  userDataList: FormData[]; // Add userData prop
};

const StartPage: React.FC<StartPageProps> = ({ onNext, userDataList }) => {

  // const [showWarning, setShowWarning] = useState(false);

  const handleNext = () => {
    onNext();
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
      <Button variant="contained" color="primary" onClick={handleNext} style={{ marginBottom: '2rem' }}>
          Add New Cases
        </Button>
        <Typography variant="h6" gutterBottom>
          User Data Table:
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User Title</TableCell>
              <TableCell>User First Name</TableCell>
              <TableCell>User Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userDataList.map((userData, index) => (
              <TableRow key={index}>
                <TableCell>{userData.user_title}</TableCell>
                <TableCell>{userData.user_firstName}</TableCell>
                <TableCell>{userData.user_lastName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default StartPage;