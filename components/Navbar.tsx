import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='flex items-center space-x-2'>
      <Link href='/'>Home</Link>
      <Link href='/private'>Private</Link>
    </nav>
  );
}
