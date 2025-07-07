import React from 'react';
import Image from "next/image";

function NamePages({image}) {
    return (
        <>
           <div className="flex items-center justify-center m-auto mt-20">
               <Image className="w-[150px] md:w-[150px]"  src={image} alt="image" width={264} height={72}/>
           </div>
        </>
    );
}

export default NamePages;