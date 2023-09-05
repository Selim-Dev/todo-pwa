import React from 'react';
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
            <p >NiLi Todo App</p>
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
            <p className='bg-red-900 dark:bg-red-900 text-black'>test</p>
          </Grid>
        </AppBar>
      </Paper>
    </div>
  );
};

export default TodoApp;
