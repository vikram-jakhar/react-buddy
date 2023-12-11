import React from 'react'

export const Faq = () => {
  return (
    <div className='bg-bule'>
         <div id="Faq" className="bg-blue position-relative z-2 mt_-1">
        <img className="w-100 absolute-lr" src="assest/img/Ellipse 2.png " alt="loading"/>
        <div className="container-xl  container-accordion pt-5 pb-5">
            <h2 className="text-white text-center fs-50 fw-600 ff-p pt-5 ">FAQs</h2>
            <div className="position-relative  z-2 pt-5 ">
                <div className=" accordion-flush accordion " id="accordionFlushExample">
                    <div className="accordion-item bg-transparent border-0 mb-3">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button
                                className="accordion-button bs-card collapsed fs-2sm fw-medium ff-m text-white rounded-pill overflow-hidden shadow-none "
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                What's the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body  text-white fs-16 fw-500 ff-m">Hac varius turpis sit pulvinar
                                lorem magna velit sit. Dapibus mattis
                                adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                                neque turpis.
                                Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border-0 mb-3">
                        <h2 className="accordion-header" id="flush-headingtwo">
                            <button
                                className="accordion-button collapsed bs-card collapsed fs-20 fw-500 ff-m text-white rounded-pill overflow-hidden shadow-none"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo"
                                aria-expanded="false" aria-controls="flush-collapsetwo">
                                What's the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapsetwo" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-white fs-16 fw-500 ff-m">Hac varius turpis sit pulvinar
                                lorem magna velit sit. Dapibus mattis
                                adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                                neque turpis.
                                Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                    <div className="accordion-item bg-transparent border-0 mb-3">
                        <h2 className="accordion-header" id="flush-headingthree">
                            <button
                                className="accordion-button collapsed bs-card collapsed fs-20 fw-500 ff-m text-white rounded-pill overflow-hidden shadow-none"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsethree"
                                aria-expanded="false" aria-controls="flush-collapsethree">
                                What's the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapsethree" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingthree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-white fs-16 fw-500 ff-m">Hac varius turpis sit pulvinar
                                lorem magna velit sit. Dapibus mattis
                                adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                                neque turpis.
                                Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>

                    <div className="accordion-item bg-transparent border-0">
                        <h2 className="accordion-header" id="flush-headingfour">
                            <button
                                className="accordion-button collapsed bs-card collapsed fs-20 fw-500 ff-m text-white rounded-pill overflow-hidden shadow-none"
                                type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour"
                                aria-expanded="false" aria-controls="flush-collapsefour">
                                What's the blockchain the buddybullies call home ?
                            </button>
                        </h2>
                        <div id="flush-collapsefour" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body text-white fs-16 fw-500 ff-m">Hac varius turpis sit pulvinar
                                lorem magna velit sit. Dapibus mattis
                                adipiscing ornare arcu vitae enim. Proin turpis enim egestas sed in accumsan, feugiat
                                neque turpis.
                                Fringilla dui donec nullam faucibus vitae non, integer. Non.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
export default Faq
