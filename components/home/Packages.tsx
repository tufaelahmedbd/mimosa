import { data } from '@/data/packages';
import HorizontalTab from '../shared/HorizontalTab';
import SectionTitle from '../shared/SectionTitle';
import PackageItem from './PackageItem';

const Packages = () => {
  return (
    <section className='wrapper section-padding' id='packages'>
      <SectionTitle title='Explore our spa packages' subtitle='Packages' />
      <HorizontalTab tabs={['Beauty', 'Events', 'Wellness']}>
        {/* Beauty */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Beauty')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Events */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Events')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>

        {/* Wellness */}
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data
            .filter((item: any) => item.masterCategory === 'Wellness')
            .map((item: any) => (
              <PackageItem key={item.id} {...item} />
            ))}
        </div>
      </HorizontalTab>
    </section>
  );
};

export default Packages;
