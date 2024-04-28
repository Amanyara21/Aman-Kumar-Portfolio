
import { FaDownload } from "react-icons/fa";


export default function Profile() {
  return (
    <section id="profile " className="flex justify-center gap-x-20 items-center min-h-full">
      <div className="details w-[30%]">
        <p className='uppercase'>Mobile app developer</p>
        <h1 className="name text-wrap">Aman Kumar</h1>
      </div>
      <div className="h-[450px] text-center myImage">
        <img className="h-full m-auto relative" src="./Aman-image.png" alt="Aman Kumar" />
      </div>
      <div className="resumeBtn flex flex-col justify-center items-center absolute m-auto h-20 w-20 gap-0.5 bg-webColor text-center rounded-full">
        <FaDownload />
        <p className="text-2xl font-bold">CV</p>
      </div>
    </section>
  );
}
