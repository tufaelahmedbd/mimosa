import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  color: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  color = 'bg-red',
}) => {
  return (
    <div className='flex items-center gap-2.5'>
      <span className={cn(color, 'h-20 w-4')}></span>
      <div className='flex flex-col items-start gap-2.5'>
        <span className=' text-lg font-semibold uppercase tracking-[0.375em]'>
          {subtitle}
        </span>
        <span className='text-5xl'>{title}</span>
      </div>
    </div>
  );
};

export default SectionTitle;
