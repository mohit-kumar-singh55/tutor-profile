import Image from 'next/image';
import ProfilePhotoPopUp from "./ProfilePhotoPopUp";

export default function TutorHeroPage() {
  return (
    <div className="snap-fullPage relative hidden md:flex h-[calc(100vh-79px)] items-center justify-start overflow-hidden bg-gradient-to-r from-[#FF7C7CB8] to-[#C4C4C400]">
      <BackgroundImg />
      {/* camera  */}
      <div className='absolute z-[1] top-[15px] right-[15px] cursor-pointer'>
        <div className='relative w-[27.5px] h-[22.5px]'>
          <Image
            src="/Images/TutorProfile/camera.png"
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* Profession */}
      <p className='absolute w-full text-center -bottom-6 font-poppins font-semibold text-[100px] text-[#424242] uppercase opacity-50 tracking-[25px]'>
        <span className='text-[#FFFFFF]'>
          Professional
        </span> chef
      </p>

      {/* ProfileChip */}
      <ProfileChip />

      {/* main */}
      <div className='flex items-center gap-8 pl-16'>
        <UserImage />
        <ProfilePhotoPopUp />
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
    <div className='relative w-[280px] h-[280px] rounded-lg'>
      {/* camera */}
      <div className='absolute z-[1] top-[15px] right-[15px] cursor-pointer'>
        <div className='relative w-[27.5px] h-[22.5px]'>
          <Image
            src="/Images/TutorProfile/camera.png"
            alt="background"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>

      {/* userImage */}
      <Image
        src='/Images/TutorProfile/tutor.png'
        alt='tutor'
        layout='fill'
        objectFit='contain'
      />
    </div>
  )
}

const ProfileChip = () => {
  return (
    <div className='flex items-center justify-between absolute bottom-[100px] left-[60px] sm:w-[300px] sm:-h-[60px] w-[216px] h-[40px] bg-[#FFFFFF] rounded-full px-4 py-2 font-roboto shadow-xl'>
      <div>
        <svg width="5" height="20" viewBox="0 0 5 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="14.5" r="2.5" fill="#FC4D6D" />
          <circle cx="2.5" cy="26.5" r="2.5" fill="#FC4D6D" />
        </svg>
      </div>

      <button className='text-[#FC4D6D] font-extrabold text-[16px]'>
        Edit Profile
      </button>

      <button className='text-[#828282] font-extrabold text-[16px]'>
        Upload Profile
      </button>
    </div>
  )
}