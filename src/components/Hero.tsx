import Image from 'next/image';
import type { ReactNode } from 'react';
import type { ImageData } from '@/content/types';

type Props = {
  title: string;
  image: ImageData;
  children?: ReactNode;
};

export function Hero({ title, image, children }: Props) {
  return (
    <section className='relative isolate flex items-center overflow-hidden py-28 md:min-h-[70vh] md:py-32'>
      <Image src={image.src} alt='' fill preload sizes='100vw' className='-z-20 object-cover' />
      <div aria-hidden className='absolute inset-0 -z-10 bg-brand-navy/10' />

      <div className='mx-auto w-full max-w-6xl px-4'>
        <div className='max-w-3xl'>
          <span aria-hidden className='mb-6 block h-1.5 w-20 rounded-full bg-brand-green' />
          <h1 className='text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl'>{title}</h1>
          {children && <div className='mt-10 flex flex-col gap-4 sm:flex-row'>{children}</div>}
        </div>
      </div>
    </section>
  );
}
