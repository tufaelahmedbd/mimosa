import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section className='wrapper section-padding h-[calc(100vh-5rem)]'>
      <div className='grid-rows-8 relative grid h-full w-full items-center gap-5'>
        {/* first row */}
        <div className='grid h-[8rem] w-full grid-cols-[30%_auto] gap-20 '>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/6724316/pexels-photo-6724316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Natural
              '
              width={640}
              height={360}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center '>
            <h2 className=' headline-1 font-bold uppercase'>Awaken your</h2>
          </div>
        </div>
        <hr className=' border-grey' />

        {/* second row */}
        <div className='grid h-[8rem] w-full grid-cols-[25%_auto_50%] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2
              className={cn(playfairDisplay.className, ' headline-1 lowercase')}
            >
              Inner
            </h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[50px_0px_50px_50px]'>
            <Image
              src='https://images.pexels.com/photos/5069493/pexels-photo-5069493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Cosmetologist applying facial mask on customer face in spa salon
              '
              width={320}
              height={180}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className=' headline-1 font-bold uppercase'>
              Goddess<span className='text-green'>.</span>
            </h2>
          </div>
        </div>
        <hr className='border-grey' />

        {/* third row */}
        <div className='grid h-[8rem]  w-full grid-cols-[45%_auto] gap-20'>
          <div className='flex h-full w-full items-center'>
            <h2 className=' headline-1 font-bold uppercase'>Unveiling</h2>
          </div>
          <div className='h-full w-full overflow-hidden rounded-[0px_50px_0px_50px]'>
            <Image
              src='https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Woman Covered in Towel Lying on Bed
              '
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
        </div>
        <hr className=' border-grey' />

        {/* four row */}
        <div className='grid h-[8rem] w-full grid-cols-[35%_auto] gap-20'>
          <div className='h-full w-full overflow-hidden rounded-[50px_50px_50px_0px]'>
            <Image
              src='https://images.pexels.com/photos/3763999/pexels-photo-3763999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Topless Woman With Towel on Head
'
              width={1280}
              height={720}
              className='h-full w-full object-cover'
            />
          </div>
          <div className='flex h-full w-full items-center'>
            <h2 className=' headline-1 font-bold uppercase'>
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase'
                )}
              >
                With
              </span>{' '}
              M
              <span
                className={cn(
                  playfairDisplay.className,
                  'font-normal lowercase text-pink'
                )}
              >
                i
              </span>
              mosa<span className='text-orange'>.</span>
            </h2>
          </div>
        </div>
        <hr className=' border-grey' />

        {/* Packages button */}
        <Link
          href='/#packages'
          className='eq group absolute bottom-[11%] left-[37%] z-[1] flex h-40 w-40 items-center  justify-center overflow-hidden rounded-full  bg-dark/80 text-lg uppercase text-light shadow-2xl shadow-dark/50 backdrop-blur-lg hover:shadow-violet/50'
        >
          <p className='z-[3]'>Packages</p>

          {/* filler 1 */}
          <span className='eq absolute bottom-0 left-0 right-0 top-full z-[2] h-1/2 w-full  bg-violet group-hover:top-1/2'></span>

          {/* filler 2 */}
          <span className='eq absolute -top-full bottom-0 left-0 right-0 z-[2] h-1/2 w-full  bg-violet group-hover:top-0'></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
