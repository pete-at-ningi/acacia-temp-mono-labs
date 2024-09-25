import React, { createContext, useContext, useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import styled from 'styled-components';

// Notification context
const NotificationContext = createContext();

// Provider component
export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (title, message, type) => {
    const id = new Date().getTime();
    setNotifications([...notifications, { id, title, message, type }]);
    setTimeout(() => {
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.id !== id)
      );
    }, 5000); // Notification duration
  };

  const removeNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      <NotificationContainer>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            type={notification.type}
            onClick={() => removeNotification(notification.id)}
          >
            {notification.type === 'success' ? (
              <CheckCircleIcon width={24} height={24} />
            ) : (
              <XCircleIcon width={24} height={24} />
            )}
            <NotificationContent>
              <strong>{notification.title}</strong>
              <p>{notification.message}</p>
            </NotificationContent>
          </Notification>
        ))}
      </NotificationContainer>
    </NotificationContext.Provider>
  );
};

// Custom hook to use the notification context
export const useNotification = () => useContext(NotificationContext);

// Notification styles
const NotificationContainer = styled.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 450px;
  z-index: 1000;
`;

const Notification = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${({ type }) =>
    type === 'success' ? '#d4edda' : '#f8d7da'};
  color: ${({ type }) => (type === 'success' ? '#155724' : '#721c24')};
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid
    ${({ type }) => (type === 'success' ? '#c3e6cb' : '#f5c6cb')};
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  svg {
    margin-right: 10px;
  }
`;

const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
`;
