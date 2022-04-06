import Image from 'next/image';
import Link from 'next/link';

function AboutTutor() {
  return (
    <div className="snap-fullPage mx-auto flex items-center justify-evenly flex-col">

    </div>
  )
}

export default AboutTutor;

function Video(props) {
  // overflow-hidden  rounded-xl bg-gradient-to-r from-[#FD4E6D] to-[#FDA02F] p-1
  return (
    <div className=" mx-auto mb-6 flex w-full flex-col gap-4 sm:w-[376px] md:w-auto ">
      <div className="  md:white-linear-gradient h-[161px] rounded-lg bg-gradient-to-r  from-[#FD4E6D] to-[#FDA02F]  p-1.5  md:h-[486px] md:w-[430px] md:rounded-xl  ">
        <div className="relative order-2 flex h-full w-full  items-center justify-center   overflow-hidden   rounded-xl  md:order-1     ">
          {/* <div className="relative order-2 flex items-center justify-center   overflow-hidden   rounded-xl  md:order-1 md:h-[486px] md:w-[430px]    "> */}
          {/* <Image
            priority
            src={`http://img.youtube.com/vi/${props.user_data.video_link}/0.jpg`}
            layout="fill"
            objectFit="cover"
          /> */}

          <div className="white-linear-gradient absolute  bottom-0" />
          <Link href={'#'}>
            <a className=" relative z-10 h-16 w-16 transition-all delay-150  ease-in-out hover:scale-[1.2] md:h-24 md:w-24">
              <Image
                src={'/Images/TutorProfile/svg/video-play-btn.svg'}
                objectFit="cover"
                layout="fill"
              />
            </a>
          </Link>

          <div className="absolute  bottom-[18px] hidden flex-col  justify-center gap-[14px] md:flex">
            <div className=" flex justify-center gap-2 ">
              {Array.from(Array(5), (index) => index + 1).map((index) => (
                <Image
                  src={'/Images/TutorProfile/svg/yellow-star.svg'}
                  height={19.38}
                  width={19.03}
                />
              ))}
            </div>
            <div className=" text-center font-poppins text-[14px] font-[600] text-[#5F5F5F]  ">
              ( 36 reviews )
            </div>
          </div>
        </div>
      </div>

      <button
        className="3px] rounded-lg border-2 border-[#FC4D6D] py-1.5  text-center text-lg font-semibold capitalize text-[#FC4D6D] md:order-2 md:text-[22px]
        "
      >
        send message
      </button>
    </div>
  )
}

function SmallLine() {
  return (
    <div className="flex h-[3px]">
      <div className="w-[32px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}
