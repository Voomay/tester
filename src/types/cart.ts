export interface CartItem {
  id: string;
  ticketType: 'standard' | 'vip' | 'dual';
  title: string;
  price: number;
  quantity: number;
  date: string;
  location: string;
}

export interface DelegateDetails {
  fullName: string;
  phone: string;
  email: string;
  idNumber: string;
  paymentMethod: 'card' | 'eft' | 'snapscan';
}
