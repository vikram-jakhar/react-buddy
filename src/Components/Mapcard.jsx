import React from 'react'
import img1 from '../images/img1.png'
import img2 from '../images/img-2.png'
import img3 from '../images/img-3.png'
import img4 from '../images/img-4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img-6.png'
const commncard =[ 
    {
        padding:"pt-5",
        img:img1,
        heading: "ART COLLECTION",
        para:" Complete the art collection in full with +70 unique traits, and publish our rarity chart on our webpage.",
        alt:"img",
        mxw:"max-230"
        

    },
    {
        padding:"pt-5",
        img:img2,
        heading: "SPECIAL BULLIES",
        para:"20 Buddybullies {out of 10k} will have a very special and ersonalized resembling of famous people who are into NFTs {those will be available after the minting}.",
        alt:"img",
        mxw:"max-230"

    },
    {
        padding:"pt-5",
        img:img3,
        heading: "BREEDING",
        para:"Our BuddyBullies will not come alone, as we will announce the breeding function after the minting and you will be able to get a PuppyBully { for free}.",
        alt:"img",
        mxw:"max-230"

    },
    {
        padding:"pt-5",
        img:img4,
        heading: "DIGITALMARKETS",
        para:"Communicate with all the digital markets available in the Solana NFT world  for getting our collection successfully listed.",
        alt:"img",
        mxw:"max-230"

    },
    {
        padding:"pt-5",
        img:img5,
        heading: "MERCH",
        para:"The team is working on the future merch thet will be available for the community members directly on our webpage.",
        alt:"img",
        mxw:"max-230"

    },
    {
        padding:"pt-5",
        img:img6,
        heading: "CHARITY",
        para:"We will be giving 30% of the royalties to charity permanently and we will keep spending on marketing, promotions and partnership.50% of the riyalties will go back to the community as rewards.",
        alt:"img",
        mxw:"max-320"

    }
]

export const Mapcard = () => {
    const  card1 =commncard.map((card2)=>(
        <div className='col-xl-4 col-md-6 col-12 pt-3 d-flex justify-content-center '>
            <div className={`card3 p-4 ${card2.padding } ${card2.mxw}`}>
                <img src={card2.img}/>
                <h2 className=' ART m-0'>{card2.heading}</h2>
                <p className={`Complete-the-art mxw-347 ${card2.mxw} `}>{card2.para} </p>

            </div>
        </div>
    ))
  return (
    <div className='bg-blue'>
        <div className='container'>
            <div className="row pt-5 pb-5">
               {card1}
            </div>

        </div>
    </div>
  )
}
export default Mapcard
