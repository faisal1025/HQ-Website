
import Image from "next/image";
import Image1 from '../../../../public/assets/img1.jpg'
import PaymentCard from "@/app/components/PaymentCard";
import Amenities from "@/app/custom-template/Amenities";
import { getRatingStatus } from "@/app/utils/hotelDetailUtility";
import { MdOutlineStar } from "react-icons/md";
import CrouselComponent from "@/app/components/HotelDetailPageComponents/CrouselComponent";
import { getHotelById } from "@/app/services/hotelApi";
import { amenities } from "@/app/Schema";
import MainLayout from "@/app/mainLayout/layout";


const HotelDetails = async ({params}: {params: {hotel: string}}) => {
    
    const {props} = await getHotelById(params.hotel)
    const {hotel} = props

    return (
        <MainLayout>
            <section className="overflow-x-hidden">
                <CrouselComponent list={hotel.photos}/>

                <section  className="rounded-lg p-5 m-5 bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl after-slider-main-div flex gap-2 mt-3 max-lg:flex-col max-md:text-md ">
                    <div className="left-div flex px-8 max-md:px-2 items-start flex-col w-[80%] max-lg:w-full text-[30px] max-md:text-2xl">
                        <div className="heading-div-including-rating-card flex gap-4 py-2 items-center">
                            <h1 className="flex flex-wrap capitalize tracking-tight font-extrabold">
                            {hotel.name}
                            </h1>
                            <div className="h-8 max-md:h-6 text-white bg-green-700 flex gap-1 px-2 items-center justify-center rounded-sm font-bold text-sm">
                                {hotel.rating} <i><MdOutlineStar /></i>
                            </div>
                        </div>
                        <h4 className="text-[20px] max-md:text-base py-2 flex flex-wrap tracking-tight capitalize">
                            {hotel.address}
                        </h4>
                        <h5 className="text-[15px] max-md:text-sm py-2 flex flex-wrap tracking-tight">
                            {`${hotel.rating} · Check-in rating > ${getRatingStatus(hotel.rating)}`}
                        </h5>
                        <div className="ammeneties mt-2 tracking-tight">
                            <h3 className="font-bold">Amenities</h3>
                            <div className="ammenity-1 flex gap-4 flex-wrap justify-between py-2 max-md:lg max-md:items-center ">
                                {
                                    hotel.amenities && (
                                        hotel.amenities.map((amenity: amenities) => {
                                            return <Amenities key={amenity.id} icon={amenity.icon} text={amenity.text} />
                                        })
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex flex-col py-2">
                            <h3 className="font-bold">About this</h3>
                            <p className="text-base max-md:text-sm py-2 flex flex-wrap text-justify">
                                {hotel.description}
                            </p>
                        </div>
                        <div className="py-2 testimonials OR Review">
                                <h3 className="font-bold">
                                    Ratings and reviews{" "}
                                </h3>
                                <div className=" MAIN_DIV rate flex gap-2 p-2 max-md:justify-center justify-between items-stretch max-md:flex-wrap py-2 rounded max-md:text-sm shadow-2xl">
                                    <div className="LEFT_PORTION flex justify-center items-center min-w-44 max-md:min-h-52 max-md:min-w-48 bg-slate-200 dark:bg-slate-500 flex-col rounded max-md:text-sm border-solid border-[1px] border-slate-300 dark:border-slate-600">         
                                            <div className="logo text-white p-2 bg-green-700 flex items-center justify-center rounded-sm font-bold text-lg max-md:text-[12px]">
                                                {hotel.rating} <i><MdOutlineStar /></i>
                                            </div>
                                            <h3 className="text-sm font-bold capitalize mt-1 max-md:text-[10px]">
                                                {getRatingStatus(hotel.rating)}
                                            </h3>
                                            <h4 className="text-[12px] max-md:text-[9px]">
                                                {hotel.reviews?.length} ratings
                                            </h4>
                                    </div>
                                    <div className="RIGHT_PORTION px-3 flex flex-col w-3/4 max-md:w-full ">

                                        <div className="w-full py-2">
                                            <div className="flex justify-between mt-1 ">
                                                <div className="mb-1 text-base flex items-center gap-1 dark:text-white ml-4 text-[13px] max-md:">
                                                    {hotel.rating} <i><MdOutlineStar /></i>
                                                </div>
                                                <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                                                    90%
                                                </h4>
                                            </div>
                                            <div className="w-full max-md:w-full my-1 bg-gray-200 rounded-full h-1 dark:bg-gray-900">
                                                <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                                            </div>
                                        </div>

                                        <div className="w-full py-2">
                                            <div className="flex justify-between mt-1 ">
                                                <div className="mb-1 text-base flex items-center gap-1 dark:text-white ml-4 text-[13px] max-md:">
                                                    {hotel.rating} <i><MdOutlineStar /></i>
                                                </div>
                                                <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                                                    90%
                                                </h4>
                                            </div>
                                            <div className="w-full max-md:w-full my-1 bg-gray-200 rounded-full h-1 dark:bg-gray-900">
                                                <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                                            </div>
                                        </div>

                                        <div className="w-full py-2">
                                            <div className="flex justify-between mt-1 ">
                                                <div className="mb-1 text-base flex items-center gap-1 dark:text-white ml-4 text-[13px] max-md:">
                                                    {hotel.rating} <i><MdOutlineStar /></i>
                                                </div>
                                                <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                                                    90%
                                                </h4>
                                            </div>
                                            <div className="w-full max-md:w-full my-1 bg-gray-200 rounded-full h-1 dark:bg-gray-900">
                                                <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[90%]"></div>
                                            </div>
                                        </div>

                                        <div className="w-full py-2">
                                            <div className="flex justify-between mt-1 ">
                                                <div className="mb-1 text-base flex items-center gap-1 dark:text-white ml-4 text-[13px] max-md:">
                                                    {hotel.rating} <i><MdOutlineStar /></i>
                                                </div>
                                                <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                                                    80%
                                                </h4>
                                            </div>
                                            <div className="w-full max-md:w-full my-1 bg-gray-200 rounded-full h-1 dark:bg-gray-900">
                                                <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[80%]"></div>
                                            </div>
                                        </div>

                                        <div className="w-full py-2">
                                            <div className="flex justify-between mt-1 ">
                                                <div className="mb-1 text-base flex items-center gap-1 dark:text-white ml-4 text-[13px] max-md:">
                                                    {hotel.rating} <i><MdOutlineStar /></i>
                                                </div>
                                                <h4 className="ml-[80%] text-[12px] text-base max-md:ml-[58%]">
                                                    70%
                                                </h4>
                                            </div>
                                            <div className="w-full max-md:w-full my-1 bg-gray-200 rounded-full h-1 dark:bg-gray-900">
                                                <div className="bg-red-500 h-1 rounded-full dark:bg-blue-500 w-[70%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="CUS_REVIEW_MAIN_1 mt-9 bg-slate-00">
                                    <div className="cus_review flex gap-4 items-center justify-between ">
                                        <div className="flex max-sm:flex-wrap gap-1 mt-2 text-lg justify-start items-center">
                                            {/* <Image src={Login} width={20}  alt="check" className=" ml-2 h-5" /> */}
                                            <h4>Modassir azam</h4>
                                            <h6 className="max-sm:hidden font-bold">.</h6>
                                            <h4 className="text-sm">12-02-2024</h4>
                                        </div>
                                        <div className="logo h-6 px-1 text-white bg-green-700 flex items-center justify-center rounded-sm font-bold text-sm max-md:text-[12px]">
                                            {hotel.rating} <i><MdOutlineStar /></i>
                                        </div>
                                    </div>
                                    <div className="review_discrip mt-2 text-sm">The room was neet and clean,the hotel staff was also very cooperative and helpful.though it&apos;s is difficult to locate the hotel.</div>
                                    <div className="review_img flex gap-1 items-center mt-5">
                                        <Image src={Image1} alt="fs" width={120} height={150} className="rounded"/>
                                        <Image src={Image1} alt="fs" width={120} height={150} className="rounded"/>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className="rounded-lg border-[0.5px] border-solid border-black dark:border-white right-div payment-sticky-card flex flex-col w-[40%] h-fit max-lg:w-full ">
                        <PaymentCard item={hotel}/>
                    </div>
                </section>
            </section>
        </MainLayout>
    );
}

export default HotelDetails
