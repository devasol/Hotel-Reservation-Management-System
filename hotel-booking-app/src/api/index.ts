// Mock API service for hotel booking application
import { RoomCategory, RoomBooking, Manager, BookingFormData } from '../types';

// Mock data based on the original hotel.sql file
const mockRoomCategories: RoomCategory[] = [
  {
    roomname: "Duplex",
    room_qnty: 5,
    available: 5,
    booked: 0,
    no_bed: 2,
    bedtype: "single",
    facility: "AC, TV, Wifi",
    price: 1500
  },
  {
    roomname: "Family",
    room_qnty: 5,
    available: 5,
    booked: 0,
    no_bed: 2,
    bedtype: "double",
    facility: "Sofa, TV, WIFI, Balcony, AC.",
    price: 3500
  },
  {
    roomname: "Super Comfort",
    room_qnty: 5,
    available: 5,
    booked: 0,
    no_bed: 1,
    bedtype: "double",
    facility: "AC, TV, WIFI",
    price: 2200
  }
];

const mockRooms: RoomBooking[] = [
  {
    room_id: 23,
    room_cat: "Family",
    checkin: "0000-00-00",
    checkout: "0000-00-00",
    name: "",
    phone: 0,
    book: "false"
  },
  {
    room_id: 24,
    room_cat: "Family",
    checkin: "0000-00-00",
    checkout: "0000-00-00",
    name: "",
    phone: 0,
    book: "false"
  },
  {
    room_id: 28,
    room_cat: "Super Comfort",
    checkin: "2017-05-19",
    checkout: "2017-05-22",
    name: "Jinat Afroj",
    phone: 1524587558,
    book: "true"
  }
];

const mockManagers: Manager[] = [
  {
    uid: 1,
    uname: "mamun",
    upass: "1234",
    fullname: "Abdullah Al Mamun",
    uemail: "mamunwitchbug@gmail.com"
  },
  {
    uid: 3,
    uname: "jinat",
    upass: "jinat",
    fullname: "Jinat Afroj",
    uemail: "afrojjinat@gmail.com"
  },
  {
    uid: 6,
    uname: "admin",
    upass: "1234",
    fullname: "admin",
    uemail: "admin@admin.com"
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
  // Room category methods
  getRoomCategories: async (): Promise<RoomCategory[]> => {
    await delay(500); // Simulate network delay
    return Promise.resolve(mockRoomCategories);
  },

  getRoomCategoryByName: async (name: string): Promise<RoomCategory | undefined> => {
    await delay(500);
    return Promise.resolve(mockRoomCategories.find(room => room.roomname === name));
  },

  // Room booking methods
  getRooms: async (): Promise<RoomBooking[]> => {
    await delay(500);
    return Promise.resolve(mockRooms);
  },

  getAvailableRooms: async (checkin: string, checkout: string): Promise<RoomBooking[]> => {
    await delay(500);
    // Simulate checking room availability based on dates
    return Promise.resolve(mockRooms.filter(room => room.book === "false"));
  },

  bookRoom: async (bookingData: BookingFormData & { roomname: string }): Promise<string> => {
    await delay(800);
    // Simulate booking process
    const newBooking: RoomBooking = {
      room_id: mockRooms.length + 1,
      room_cat: bookingData.roomname,
      checkin: bookingData.checkin,
      checkout: bookingData.checkout,
      name: bookingData.name,
      phone: parseInt(bookingData.phone),
      book: "true"
    };
    
    mockRooms.push(newBooking);
    
    // Update the room category availability
    const categoryIndex = mockRoomCategories.findIndex(cat => cat.roomname === bookingData.roomname);
    if (categoryIndex !== -1) {
      mockRoomCategories[categoryIndex].available -= 1;
      mockRoomCategories[categoryIndex].booked += 1;
    }
    
    return Promise.resolve(`Room in ${bookingData.roomname} category booked successfully for ${bookingData.name}!`);
  },

  // Manager methods
  getManagers: async (): Promise<Manager[]> => {
    await delay(500);
    return Promise.resolve(mockManagers);
  },

  login: async (username: string, password: string): Promise<Manager | null> => {
    await delay(500);
    const manager = mockManagers.find(m => m.uname === username && m.upass === password);
    return Promise.resolve(manager || null);
  }
};