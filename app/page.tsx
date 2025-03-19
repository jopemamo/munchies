import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Image
      src="/MunchiesLogo.svg"
      alt="Munchies Logo"
      width={167}
      height={24}
      className='md:w-[274px] md:h-[40px]'
    />
    </>
  );
}
