import Link from 'next/link';
import { buttonVariants } from '../ui/Button';

const Navbar = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 items-center border-b border-grey bg-white/80'>
      <div className='wrapper grid grid-cols-3 items-center gap-20'>
        {/* left nav */}
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link href='/#packages' className='link-item'>
                Packages
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 2
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 3
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mid nav */}
        <nav>
          <ul className='flex justify-center'>
            <li>
              <Link
                href='/'
                className=' text-4xl font-bold lowercase text-pink'
              >
                Mimosa.
              </Link>
            </li>
          </ul>
        </nav>
        {/* Right nav */}
        <nav>
          <ul className='flex items-center justify-end gap-5'>
            <li>
              <Link href='/' className='link-item'>
                Link 4
              </Link>
            </li>
            <li>
              <Link href='/' className='link-item'>
                Link 5
              </Link>
            </li>
            <li>
              <Link
                href='/user/sign-in'
                className={buttonVariants({ variant: 'ocean' })}
              >
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
