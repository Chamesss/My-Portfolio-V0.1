import React, { useEffect, useState, useRef } from 'react';
import { FiArrowDownCircle } from '@react-icons/all-files/fi/FiArrowDownCircle';

function Home() {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalEl = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsHeaderFixed(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (!modalEl.current) {
                return;
            }

            if (event.target && !modalEl.current.contains(event.target as Node) && isModalOpen) {
                console.log('this is useeffect intefering :p');
                setIsModalOpen(false);
                closeModal();
            }
        };

        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, [isModalOpen]);


    const handleScroll = (id: string, event: React.MouseEvent) => {
        event.preventDefault();
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const openModal = () => {
        const modalElement = document.getElementById("myModal");
        if (modalElement) {
            modalElement.style.display = "block";
            const overlay = document.getElementById("overlay");
            if (overlay) {
                overlay.style.display = "block";
            }
        }
        setIsModalOpen(true);
    }


    const closeModal = () => {
        const modalElement = document.getElementById("myModal");
        const modal = document.querySelector('.modal');
        const overlay = document.getElementById("overlay");

        if (modal && overlay && modalElement) {
            modal.classList.add('modal__modal-closing');

            setTimeout(() => {
                modalElement.style.display = "none";
                overlay.style.display = "none";
                modal.classList.remove('modal__modal-closing');
            }, 500);
        }

        setIsModalOpen(false);
    };


    return (
        <div >
            <main className='relative'>
                <header className={`header typo-from typo-from__header${isHeaderFixed ? ' sticky' : ' '}`}>
                    <div>
                        <span className='typo-from'>Chams</span>
                    </div>
                    <div className='typo-from__options'>
                        <a href='#home' onClick={(e) => handleScroll('top', e)} className='header-option'>Home</a>
                        <a href='#about' onClick={(e) => handleScroll('about', e)} className='header-option'>About</a>
                        <a href='#services' onClick={(e) => handleScroll('services', e)} className='header-option'>Services</a>
                        <button className='header-option__hire-button' onClick={openModal}>Contact Me</button>
                    </div>
                </header>
                <section className='section section__1'>
                    <div className='video-container'>
                        {/* <video autoPlay muted loop id="video-bg">
                            <source src='../../images/stars.mp4' type='video/mp4' />
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    <div className='section__box1'>
                        <div className='section__box1__svg'>
                            <svg className='svg'>
                                <text className="outlined-text outlined-text__full">FULLSTACK</text>
                            </svg>
                            <svg className='svg'>
                                <text className="outlined-text outlined-text__dev">DEVELOPER</text>
                            </svg>
                        </div>
                        <div className='section__box1__button'>
                            <button className='button__download-cv'>
                                <span className='animation-rotate'>
                                    <FiArrowDownCircle />
                                </span> &nbsp; &nbsp;Download CV
                            </button>
                        </div>

                        {/* <div>
                            <h1 className='typo-from typo-from__subtitle'>Howdy !</h1>
                            <span className='typo-from typo-from__subtitle'>My name is <span className='typo-from typo-from__title'>ChamseDin Azouz</span>.</span>
                            <h2 className='typo-from typo-from__subtitle'>And I'm a Fullstack Developer & Software Engineering student</h2>
                        </div>
                        <div>
                            <img src='../../images/myimage.png' alt='profile' className='myimage myimage__profile' />
                        </div> */}
                    </div>
                </section>


                <section className='social-media'>

                    <div className='social-media__container' onClick={() => window.open("https://github.com/Chamesss", '_blank')}>
                        <div className='social-media__face social-media__face__front'>
                            <a href='#null' className='social-media__section'>
                                <img src='../../images/github1.png' alt='github' className='social-media__image' />
                            </a>
                            <span className='typo-from typo-from__social'>Github</span>
                        </div>
                        <div className='social-media__face social-media__face__back'>
                            <p className='typo-from'>Go To URL</p>
                            <img src='../../images/external.png' alt="external" className='social-media__external-image' />
                        </div>
                    </div>

                    <div className='social-media__container' onClick={() => window.open("https://www.linkedin.com/in/chamsedin-azouz-613a77245", '_blank')}>
                        <div className='social-media__face social-media__face__front'>
                            <a href='#null' className='social-media__section'>
                                <img src='../../images/linkedin0.png' alt='linkedin' className='social-media__image' />
                            </a>
                            <span className='typo-from typo-from__social'>Linkedin</span>
                        </div>
                        <div className='social-media__face social-media__face__back'>
                            <p className='typo-from'>Go To URL</p>
                            <img src='../../images/external.png' alt="external" className='social-media__external-image' />
                        </div>
                    </div>

                    <div className='social-media__container' onClick={() => window.open("https://www.facebook.com/ChamseDin.Azouz/", '_blank')}>
                        <div className='social-media__face social-media__face__front'>
                            <a href='#null' className='social-media__section'>
                                <img src='../../images/facebook1.png' alt='facebook' className='social-media__image' />
                            </a>
                            <span className='typo-from typo-from__social'>Facebook</span>
                        </div>
                        <div className='social-media__face social-media__face__back'>
                            <p className='typo-from'>Go To URL</p>
                            <img src='../../images/external.png' alt="external" className='social-media__external-image' />
                        </div>
                    </div>

                    <div className='social-media__container' onClick={() => window.open("https://www.instagram.com/chamess_azzouz/", '_blank')}>
                        <div className='social-media__face social-media__face__front'>
                            <a href='#null' className='social-media__section'>
                                <img src='../../images/instagram0.png' alt='instagram' className='social-media__image' />
                            </a>
                            <span className='typo-from typo-from__social'>Instagram</span>
                        </div>
                        <div className='social-media__face social-media__face__back'>
                            <p className='typo-from'>Go To URL</p>
                            <img src='../../images/external.png' alt="external" className='social-media__external-image' />
                        </div>
                    </div>



                </section>
                <section id='about' className='section section__2'>
                    <div className='section__box2'>
                        <div className='container'>
                            <div className='center center__absolute'>
                                <img src='../../images/bird.gif' alt="external" className='first-box__gif' />
                                <img src='../../images/bird.gif' alt="external" className='first-box__gif' />
                                <img src='../../images/bird.gif' alt="external" className='first-box__gif' />
                            </div>
                            <div className='first-box'>
                                <div className='second-box'>
                                    <div className='row spaced about'>
                                        <img src='../../images/myimage-bg.png' alt="profile-bg" className='myimage myimage__bg' />
                                        <div className='centered'>
                                            <h1 className='typo-from typo-from__title typo-from__title__2'>FULL STACK DEVELOPER CURRENTLY BASED IN TUNISIA. </h1>
                                            <p className='typo-from typo-from__subtitle'>Hi ! I'm Chamsedin Azouz, I specialize in the MERN stack, crafting, captivating front-end interfaces and ensuring a robust and efficient backend experience for users.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='first-box'>
                            <div className='second-box'>
                                <div className='column spaced about'>
                                    <div className='centered padding'>
                                        <h1 className='typo-from typo-from__title typo-from__title__2'>WHAT DO I WORK</h1>
                                        <p className='typo-from typo-from__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                    <div className='row spaced__less center'>


                                        <div className='box'>
                                            <div className='row'>
                                                <img src='../../images/brands-logo/react.png' alt='react' className='brand-image' />
                                                <img src='../../images/brands-logo/angular.png' alt='angular' className='brand-image' />
                                                <img src='../../images/brands-logo/sass.png' alt='sass' className='brand-image' />
                                            </div>
                                            <p className='typo-from typo-from__box'>Creation of interactive interfaces</p>
                                        </div>
                                        <div className='box box__grey'>
                                            <div className='row'>
                                                <img src='../../images/brands-logo/node.png' alt='node' className='brand-image' />
                                                <img src='../../images/brands-logo/express.png' alt='express' className='brand-image' />
                                            </div>
                                            <p className='typo-from typo-from__box'>Creating solid, functional APIs</p>
                                        </div>
                                        <div className='box'>
                                            <div className='row'>
                                                <img src='../../images/brands-logo/mongo.png' alt='mongo' className='brand-image' />
                                            </div>
                                            <p className='typo-from typo-from__box'>DB optimization & management</p>
                                        </div>
                                        <div className='box box__grey'>
                                            <div className='row'>
                                                <img src='../../images/brands-logo/azure.png' alt='azure' className='brand-image' />
                                            </div>
                                            <p className='typo-from typo-from__box'>Application deployment & scaling</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='centered'>
                            <h1 className='typo-from typo-from__title typo-from__title__2'>Let’s Start by Saying Hi!</h1>
                            <span className='header-option__hire-button'>Contact Me</span>
                        </div>
                        <footer>
                            <div className='space-between'>
                                <div className='row spaced__less'>
                                    <a href='#null' className='social-media__section' onClick={() => window.open("https://github.com/Chamesss", '_blank')}>
                                        <img src='../../images/github1.png' alt='github' className='social-media__footer' />
                                    </a>
                                    <a href='#null' className='social-media__section' onClick={() => window.open("https://www.linkedin.com/in/chamsedin-azouz-613a77245", '_blank')}>
                                        <img src='../../images/linkedin0.png' alt='linkedin' className='social-media__footer' />
                                    </a>
                                    <a href='#null' className='social-media__section' onClick={() => window.open("https://www.facebook.com/ChamseDin.Azouz/", '_blank')}>
                                        <img src='../../images/facebook1.png' alt='facebook' className='social-media__footer' />
                                    </a>
                                    <a href='#null' className='social-media__section' onClick={() => window.open("https://www.instagram.com/chamess_azzouz/", '_blank')}>
                                        <img src='../../images/instagram0.png' alt='instagram' className='social-media__footer' />
                                    </a>
                                </div>
                                <span className='typo-from typo-from__footer'>Created by <span className='typo-from__footer__name'>Chamsedin Azouz</span> | Copyright &copy; 2023 All rights reserved</span>
                            </div>
                        </footer>
                    </div>
                </section>

                {/* Overlay */}
                {isModalOpen && <div id="overlay" className="overlay"></div>}

                {/* Modal */}
                <div id="myModal" className="modal" ref={modalEl}>
                    <div className="modal__content">
                        <button className="modal__close" onClick={closeModal}>
                            &times;
                        </button>
                        <div className='modal__main row padding__extra spaced__more'>
                            <div className='modal__info column'>
                                <p className='typo-from typo-from__title typo-from__title__2 typo-from__title__2__pop-up'>Contact Me</p>
                                <div>
                                    <div className='centered centered__non-gap row'>
                                        <img className='modal__image' src='../../images/email.png' alt='email' />
                                        <p className='typo-from typo-from__modal'>chamsedin.azouz@gmail.com</p>
                                    </div>
                                    <div className='centered centered__non-gap row'>
                                        <img className='modal__image' src='../../images/phone.png' alt='phone' />
                                        <p className='typo-from typo-from__modal'>+216 92448974</p>
                                    </div>
                                </div>
                                <button className='button'>Download cv</button>
                            </div>
                            <div className='modal__input column'>
                                <input className='input' placeholder='Your name' />
                                <input className='input' placeholder='Your email' />
                                <textarea className='input input__message' placeholder='Your message' />
                                <button className='button'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div >
    );
}

export default Home;