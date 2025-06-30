// Sample customers array for placeholder data
type Customer = { id: string; name: string };
const customers: Customer[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
  { id: '4', name: 'Diana' },
  { id: '5', name: 'Eve' },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795, // $157.95 (assuming amount is in cents)
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348, // $203.48
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[2].id,
    amount: 3040, // $30.40
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800, // $448.00
    status: 'paid',
    date: '2023-01-15',
  },
  {
    customer_id: customers[4].id,
    amount: 12500, // $125.00
    status: 'overdue',
    date: '2022-09-10',
  },
  {
    customer_id: customers[0].id, // Same customer as first invoice
    amount: 8900, // $89.00
    status: 'paid',
    date: '2023-02-02',
  },
  {
    customer_id: customers[1].id, // Same customer as second invoice
    amount: 5670, // $56.70
    status: 'overdue',
    date: '2023-01-22',
  }
];