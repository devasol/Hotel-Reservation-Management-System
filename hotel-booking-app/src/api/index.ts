// API service for hotel booking application
import { RoomCategory, RoomBooking, Manager, BookingFormData } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create a function to handle API requests with error handling
const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const apiService = {
  // Room category methods
  getRoomCategories: async (): Promise<RoomCategory[]> => {
    try {
      return await apiRequest('/rooms/categories');
    } catch (error) {
      console.error('Error fetching room categories:', error);
      throw error;
    }
  },

  getRoomCategoryByName: async (name: string): Promise<RoomCategory | undefined> => {
    try {
      const data = await apiRequest(`/rooms/categories/${encodeURIComponent(name)}`);
      return data;
    } catch (error) {
      console.error('Error fetching room category:', error);
      throw error;
    }
  },

  // Room booking methods
  getRooms: async (): Promise<RoomBooking[]> => {
    try {
      return await apiRequest('/rooms');
    } catch (error) {
      console.error('Error fetching rooms:', error);
      throw error;
    }
  },

  getAvailableRooms: async (): Promise<RoomBooking[]> => {
    try {
      return await apiRequest('/rooms/available');
    } catch (error) {
      console.error('Error fetching available rooms:', error);
      throw error;
    }
  },

  bookRoom: async (bookingData: BookingFormData & { roomname: string }): Promise<string> => {
    try {
      const response = await apiRequest('/rooms/book', {
        method: 'POST',
        body: JSON.stringify(bookingData),
      });
      return response.message;
    } catch (error) {
      console.error('Error booking room:', error);
      throw error;
    }
  },

  // Manager methods
  getManagers: async (): Promise<Manager[]> => {
    try {
      return await apiRequest('/managers');
    } catch (error) {
      console.error('Error fetching managers:', error);
      throw error;
    }
  },

  login: async (username: string, password: string): Promise<Manager | null> => {
    try {
      const response = await apiRequest('/admin/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
      });
      
      if (response.success) {
        return response.user;
      }
      return null;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
};