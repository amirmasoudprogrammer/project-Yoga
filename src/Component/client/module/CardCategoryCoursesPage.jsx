import React from 'react';

function CardCategoryCoursesPage({data ,onSelectCourses ,selectedCourses}) {

    return (
        <div onClick={() => onSelectCourses(data.title)} className="cursor-pointer w-[288px] h-[64px] border border-[#CACACA] rounded-xl mt-5 flex items-center justify-between">
            <span className={` ${selectedCourses === data.title ? "transition-all border-r-4 font-bold  pr-2 border-[#CAACF2] text-[#CAACF2] " : "border-0 text-black"}   mr-5  font-bold`}>{data.title}</span>
            <p className="text-[#8C8C8C] text-[12px] ml-5 font-bold">{data.Number}</p>
        </div>
    );
}

export default CardCategoryCoursesPage;