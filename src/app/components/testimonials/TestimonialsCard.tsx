import Image from "next/image";
import Link from "next/link";

import user from '../../../../public/assets/user.jpg'

type Props = {
  title: string;
  imgSrc: string;
  content: string;
  author: string;
};

const TestimonialCard = (props: Props) => {
  return (
    <div className="py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <Image
          alt={props.author}
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          height={80}
          width={80}
          // src={props.imgSrc}
          src={user}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
        <p className="mt-2 text-gray-600">{props.content}</p>
      </div>
      <div className="flex justify-end mt-4">
        <Link href="#" className="text-xl font-medium text-indigo-500">
          {props.author}
        </Link>
      </div>
    </div>
  );
};
export default TestimonialCard;
