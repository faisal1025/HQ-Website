import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center home-container">
      <h1 className="text-center py-2 text-4xl font-bold font-sans text-black" >We compare hotel prices from 100s of sites</h1>
      <h2 className="text-center py-2 text-lg font-semibold font-sans" >We’ll do the searching. You do the saving.</h2>
    </div>
  );
}
