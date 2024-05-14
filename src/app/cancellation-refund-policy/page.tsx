import Link from 'next/link'
import React from 'react'
import { IoMdHome } from 'react-icons/io'
import SupportPageLayout from '../SupportPageLayout/layout'

const cancellationAndRefundPolicy = () => {
  return (
    <SupportPageLayout>
        <div className="m-0 p-0 bg-gradient-to-r text-base from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl">
        
        <div className='p-4 m-5'>
            <h1 className='text-3xl font-semibold text-center py-1 border-black border-y-2 inline-block mt-2'>Cancellation and Refund Policy</h1>
            <p className='py-2'>Last updated: May 14, 2024</p>
            <p className='py-2'>Thank you for shopping at HQ Rooms.</p>
            <p className='py-2'>If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and cancellation. </p>
            <p className='py-2'>The following terms are applicable for any booking that You purchased with Us.</p>
            <h2 className='text-2xl font-semibold py-1'>Interpretation and Definitions</h2>
            <h3 className='text-xl font-semibold py-1'>Interpretation</h3>
            <p className='py-2'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h3 className='text-xl font-semibold py-1'>Definitions</h3>
            <p className='py-2'>For the purposes of this Cancellation and Refund Policy:</p>
            <ul className='py-2 list-disc mx-7 flex flex-col gap-2'>
                <li>
                <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Happiness Quotient  Events Private Limited, 2nd Floor, F35/4, Okhla Phase - 2,  New Delhi - 110020.</p>
                </li>
                <li>
                <p><strong>Goods</strong> refer to the rooms offered for booking on the Service.</p>
                </li>
                <li>
                <p><strong>Orders</strong> mean a request by You to book the rooms from Us.</p>
                </li>
                <li>
                <p><strong>Service</strong> refers to the Website.</p>
                </li>
                <li>
                <p><strong>Website</strong> refers to HQ Rooms, accessible from <a href="https://hqrooms.in" rel="external nofollow noopener" target="_blank">https://hqrooms.in</a></p>
                </li>
                <li>
                <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>
                </li>
            </ul>
            <h2 className='text-2xl font-semibold py-1'>Your Order Cancellation Rights</h2>
            <p className='py-2'>You are entitled to cancel Your Order before the check-in date without giving any reason for doing so.</p>
            <p className='py-2'>The deadline for cancelling the booking is before check-in date from the date on which You booked the room, any time.</p>
            <p className='py-2'>For any query regarding cancellation and refund, you can contact us on:</p>
            <ul className='py-2 list-disc mx-7 flex flex-col gap-2'>
                <li>
                <p>By email: contact@hqevents.in</p>
                </li>
                <li>
                <p>By phone number: 9654888027</p>
                </li>
            </ul>
            <p className='py-2'>We will reimburse You within 7 days from the day on which We receive your cancellation request. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.</p>
            <h2 className='text-2xl font-semibold py-1'>Conditions for Refund</h2>
            <p className='py-2'>In order for the bookings to be eligible for a cancellation, please make sure that:</p>
            <ul className='py-2 list-disc mx-7 flex flex-col gap-2'>
                <li>Booking must be cancelled before check-in date</li>
                <li>Booking must be cancelled from that user account from which order is placed.</li>
                <li>We will refund you within 7 working days in your bank account from the day on which we receive your cancellation request.</li>
            </ul>
            {/* <p className='py-2'>The following Goods cannot be returned:</p>
            <ul>
                <li>The supply of Goods made to Your specifications or clearly personalized.</li>
                <li>The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.</li>
                <li>The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                <li>The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
            </ul>
            <p>We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.</p>
            <p>Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.</p> */}
            {/* <h2>Returning Goods</h2>
            <p>You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:</p>
            <p>Customer can cancel their booking before check-in date after and on the check-in date we can not cancel that booking</p>
            <p>We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.</p>
            <h2>Gifts</h2>
            <p>If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.</p>
            <p>If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.</p> */}
            <h3 className='text-xl font-semibold py-1'>Contact Us</h3>
            <p className='py-2'>If you have any questions about our Cancellation and Refunds Policy, please contact us:</p>
            <ul className='py-2 list-disc mx-7 flex flex-col gap-2'>
                <li>
                <p>By email: contact@hqevents.in</p>
                </li>
                <li>
                <p>By phone number: 9654888027</p>
                </li>
            </ul>
        </div>
        </div>
    </SupportPageLayout>
  )
}

export default cancellationAndRefundPolicy
