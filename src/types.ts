export enum Module {
  DASHBOARD = 'dashboard',
  INVOICES = 'invoices',
  GST = 'gst',
  TAX = 'tax',
  LOANS = 'loans',
  INVESTORS = 'investors',
  GROWTH = 'growth',
  CRM = 'crm'
}

export interface UserProfile {
  userId: string;
  businessName: string;
  gstNumber?: string;
  email: string;
  createdAt: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  ownerId: string;
  createdAt: string;
}

export interface LoanApplication {
  id: string;
  userId: string;
  amountRequested: number;
  status: string;
  lender: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  segment: 'lead' | 'customer' | 'vip';
  totalValue: number;
  lastContact: string;
}

export interface Deal {
  id: string;
  customerName: string;
  value: number;
  stage: 'discovery' | 'proposal' | 'negotiation' | 'closed';
  probability: number;
}
