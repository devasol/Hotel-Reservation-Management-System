// Types for hotel booking application

export interface RoomCategory {
  roomname: string;
  room_qnty: number;
  available: number;
  booked: number;
  no_bed: number;
  bedtype: string;
  facility: string;
  price: number;
}

export interface RoomBooking {
  room_id: number;
  room_cat: string;
  checkin: string;
  checkout: string;
  name: string;
  phone: number;
  book: string;
}

export interface Manager {
  uid: number;
  uname: string;
  upass: string;
  fullname: string;
  uemail: string;
}

export interface BookingFormData {
  checkin: string;
  checkout: string;
  name: string;
  phone: string;
}