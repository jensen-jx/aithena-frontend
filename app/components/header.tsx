import Image from "next/image";

export default function Header() {
  return (
    
   
      <div className="w-full flex items-center justify-center font-nunito text-lg font-bold gap-2  bottom-0 h-50 w-full items-end center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <span>Legal Search</span>
        <span> | </span>
        <a
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>Built by </span>
          <Image
            // className="rounded-xl"
            src="/aithena_logo.png"
            alt="Aithena Logo"
            width={200}
            height={200}
            priority
          />
        </a>
      </div>
 
  );
}
