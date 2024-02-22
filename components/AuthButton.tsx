import { cookies } from 'next/headers';
import Link from 'next/link';
import { logout } from '@/app/login/actions';
import { createClient } from '@/utils/supabase/server';

export default async function AuthButton() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return <Link href='/login'>Login</Link>;
  }

  return (
    <div className='flex items-center'>
      <p>Hello: {data.user.email}</p>
      <form action={logout}>
        <button type='submit' className='bg-green-500'>
          Log out
        </button>
      </form>
    </div>
  );
}
