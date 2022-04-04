import Image from 'next/image';

export default function TutorHeroPage() {
  return (
    <div className="snap-fullPage relative hidden h-[calc(100vh-79px)] items-center justify-center overflow-hidden md:flex bg-gradient-to-r from-[#FF7C7CB8] to-[#C4C4C400]">
      <BackgroundImg />
      {/* main */}
      <div className='flex item-start'>
        <UserImage />
      </div>
    </div>
  )
}

const BackgroundImg = () => {
  return (
    <div className='absolute h-full w-full'>
      <div className='relative h-full w-full -z-10'>
        <Image
          src="/Images/TutorProfile/background.png"
          alt="background"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </div>
  )
}

const UserImage = () => {
  return (
    <div className='relative w-[312px] h-[312px] rounded-lg'>
      <Image
        src='/Images/TutorProfile/tutor.png'
        alt='tutor'
        layout='fill'
        objectFit='contain'
      />
    </div>
  )
}