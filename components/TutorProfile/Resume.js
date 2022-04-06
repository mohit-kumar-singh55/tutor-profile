import React from 'react';

function Resume() {
  return (
    <div className="snap-fullPage h-[calc(100vh-79px)] flex flex-col gap-5 items-start justify-start pt-4 font-poppins">
      <ResumeTitle />

      {/* main */}
      <div className='flex flex-col items-center mx-auto w-full max-w-full overflow-x-scroll gap-5'>
        <Title />
        <Description />
      </div>
    </div>
  )
}
export default Resume;

function ResumeTitle() {
  return (
    <section className="mx-0 space-y-2 md:mx-auto">
      <h2 className="text-2xl font-semibold capitalize tracking-wide text-[#5F5F5F]">
        Resume
      </h2>
      <SmallLine />
    </section>
  )
}

function SmallLine() {
  return (
    <div className="flex h-[3px] space-x-1">
      <div className=" mr-[1px] w-[32px] rounded-full bg-[#FC4D6D]" />
      <div className=" w-[6px] rounded-full bg-[#FC4D6D]" />
      <div className="  w-[6px] rounded-full bg-[#FC4D6D]" />
    </div>
  )
}

const Title = () => {
  const titles = ['Duration', 'Type', 'Title/Designation', 'Institute'];

  return (
    <div className='flex items-center w-full justify-center gap-[250px] text-lg font-poppins font-medium text-[#5F5F5F]'>
      {titles?.map((title, i) => (
        <h3 key={i}>
          {title}
        </h3>
      ))}
    </div>
  )
}

const Description = () => {
  const desc = [
    { duration: 'June 2016 - May 2018', type: 'Degree', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
    { duration: 'June 2016 - May 2020', type: 'Diploma', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
    { duration: 'June 2016 - May 2018', type: 'Degree', title: 'M.A. (English Literature & Philosiphy)', institute: 'New Hamshire and Oxford College of Arts (London, UK)' },
  ]

  return (
    <div className='flex flex-col items-center justify-start w-full px-24 gap-5 text-center overflow-y-scroll max-h-[calc(100vh-100px)] font-poppins font-medium text-[#5F5F5F]'>
      {desc?.map((des, i) => (
        <div className='flex items-center w-full justify-center gap-[100px] text-center font-poppins font-medium text-[#5F5F5F]'>
          <p cla>
            {des.duration}
          </p>
          <p>
            {des.type}
          </p>
          <p>
            {des.title}
          </p>
          <p>
            {des.institute}
          </p>
        </div>
      ))}
    </div>
  )
}