import Navbar from './Navbar';
import { ReactNode } from 'react';

export default function Header({ children }: { children: ReactNode }) {
  return (
    <section className='bg-blue-500 flex items-center justify-between'>
      <h1>My App</h1>
      <Navbar />
      {children}
    </section>
  );
}
