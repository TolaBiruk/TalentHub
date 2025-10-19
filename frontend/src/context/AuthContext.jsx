// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem('jobportal_token');
    const userData = localStorage.getItem('jobportal_user');
    
    if (token && userData) {
      setCurrentUser(JSON.parse(userData));
    }
    
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // In a real app, this would be your API endpoint
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        
        setCurrentUser(user);
        localStorage.setItem('jobportal_token', data.token);
        localStorage.setItem('jobportal_user', JSON.stringify(user));
        
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message };
      }
    } catch (error) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const register = async (userData) => {
    try {
      // In a real app, this would be your API endpoint
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        const data = await response.json();
        const user = data.user;
        
        setCurrentUser(user);
        localStorage.setItem('jobportal_token', data.token);
        localStorage.setItem('jobportal_user', JSON.stringify(user));
        
        return { success: true };
      } else {
        const error = await response.json();
        return { success: false, error: error.message };
      }
    } catch (error) {
      return { success: false, error: 'Network error. Please try again.' };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('jobportal_token');
    localStorage.removeItem('jobportal_user');
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};