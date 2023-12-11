import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="bg-img position-relative overflow-hidden">
                <span className='gradiant '></span>
                <div className="container min-vh-100 ">
                    <nav className="d-flex justify-content-between   pt-30 ">
                        <div>
                            <h2 className="logo">Logo</h2>
                        </div>
                        <label for="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id="menu-icon" hidden />
                        <ul className="d-flex gap-5 mobile-view">
                            <li className="li-font">Minting</li>
                            <li className="li-font">Road Map</li>
                            <li className="li-font">Faq</li>
                            <li className="li-font">Team</li>
                            <li className="li-font">Join Us</li>
                        </ul>
                    </nav>
                    <div className="mt-26 1 mt-5  pt-5 ">
                        <h1 className=" fs-xxl fw-normal white mxw-515">Vitae nunc,<span className=" fw-bold  "> blandit a odio</span></h1>
                        <p className=" fs-2sm fw-medium white opacity-75 mxw-488 pt-3 pb-5 ">Semper in egestas risus id tempus. Pellentesque dolor eros sollicitudin feugiat ut
                            odio semper. Mattis fermentum eget ut vestibulum dolor diam</p>
                        <button className="btn-main fs-md fw-medium ">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header