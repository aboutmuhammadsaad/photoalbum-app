"use client"
import { Button } from "@/components/ui/button";
import { CldUploadButton } from 'next-cloudinary';

type UploadResult ={
    info: {
      public_id: string;
    };
    event:"success";
};
  

function Gallery(){
 return(
    <>
    <div className="flex justify-between">
        <h1 className="text-4xl ">Gallery</h1>
        <Button asChild>
            <div>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor" 
                    className="mr-2 h-4 w-4">
                    <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>

                <CldUploadButton 
                onUpload={(result:UploadResult) => {
                 //setImageId(result.info.public_id)
                }}
                uploadPreset="buwuderb" 
                 />
            </div>
        </Button>
    </div>
    </>
 )   
}

export default Gallery;