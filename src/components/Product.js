import Image from 'next/image'
import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/20/solid'
import CurrencyFormat from 'react-currency-format';

const MAX_RATING = 5;
const MIN_RATING =1;

function Product({ id, title, price, description, category, image }) {
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING-MIN_RATING +1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5)

  return (
    
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 growing-hover">
    <p className="absolute top-2 right-3 text-sm italic text-gray-400">
        {category}
    </p>
    <Image src={image} width={200} height={200} objectFit="contain" />
    <h4 className="my-3">{title}</h4>
    <div className="flex">
        {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
    </div>
    <p className="text-xs my-2 line-clamp-2">{description}</p>
    
    <div className="mb-5">
        <CurrencyFormat value={price}  displayType={'text'} thousandSeparator={true} prefix={'$'} />
    </div>

    {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
            <img
                loading="lazy"
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
            />
            <p className="text-xs text-gray-500">
                FREE Next-day Delivery
            </p>
        </div>
    )}

    <button className="mt-auto button">
        Add to basket
    </button>
</div>
  )
}

export default Product 