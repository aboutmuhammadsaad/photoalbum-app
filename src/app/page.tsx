"use client"

import { CldImage } from 'next-cloudinary';
import { useState } from 'react';


type UploadResult ={
  info: {
    public_id: string;
  };
  event:"success";
};

export default function Home() {

  const [ImageId,setImageId]=useState("")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      

      {ImageId && (
        <CldImage
          width="400"
          height="300"
          src={ImageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )} 
    </main>
  )
}
