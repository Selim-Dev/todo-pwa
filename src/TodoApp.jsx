import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
const TodoApp = () => {
  return (
    <div>
      <Paper
        style={{
          padding: 0,
          margin: 0,
          height: '100vh',
          backgroundColor: '#fafafa',
        }}
        elevation={0}
      >
        <AppBar color="primary" position="static" style={{ height: '64px' }}>
          <Toolbar>
            <Typography color="inherit">Ali Sleem Todo APP</Typography>
          </Toolbar>
          <Grid
            container
            justifyContent={'center'}
            style={{ marginTop: '1rem' }}
          >
            <Grid item xs={11} md={8} lg={4}>
              <TodoForm />
              <TodoList />
            </Grid>
          </Grid>
        </AppBar>
      </Paper>
    </div>
  );
};

export default TodoApp;
