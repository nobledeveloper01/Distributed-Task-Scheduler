// src/App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TaskManagement from './Components/TaskManagement/TaskManagement';
import TaskScheduler from './Components/TaskScheduler/TaskScheduler';
import TaskHistory from './Components/TaskHistory/TaskHistorys';
import { NotificationProvider } from './util/NotificationUtil';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/task-management" element={<TaskManagement />} />
          <Route path="/task-scheduling" element={<TaskScheduler />} />
          <Route path="/task-history" element={<TaskHistory />} />
          <Route path="/" element={<TaskManagement />} />
        </Routes>
      </BrowserRouter>
    </NotificationProvider>
  );
};

export default App;
