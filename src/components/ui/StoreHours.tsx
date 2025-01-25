import React from 'react';

import storeHoursLogo from '../../assets/store-hours.webp';

interface StoreHoursProps {
  storeHours: { [day: string]: { open: string; close: string } } | null;
}

const StoreHours: React.FC<StoreHoursProps> = ({ storeHours }) => {
  const convertTo12Hour = (time24: string) => {
    const [hours] = time24.split(":");
    let period = "AM";
    let hours12 = parseInt(hours, 10);

    if (hours12 >= 12) {
      period = "PM";
      if (hours12 > 12) {
        hours12 -= 12;
      }
    }
    if (hours12 === 0) {
      hours12 = 12;
    }

    return `${hours12}${period}`;
  };

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='lg:pt-6'>
        <img
          src={storeHoursLogo.src}
          alt="Products logo"
          className="h-[150px] md:h-[180px] lg:h-[235px] w-auto mx-auto mb-4"
        />
      {storeHours &&
        Object.entries(storeHours).map(([day, hours]) => (
          <div key={day} className="flex text-lg font-bold md:text-xl justify-center tracking-wider md:tracking-widest text-[#452B1F]">
            {capitalizeFirstLetter(day)}: {convertTo12Hour(hours.open)} to {convertTo12Hour(hours.close)}
          </div>
        ))}
    </div>
  );
};

export default StoreHours;