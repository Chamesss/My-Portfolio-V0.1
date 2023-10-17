import React, { useEffect, useState, useRef } from 'react';
import { FiArrowDownCircle } from '@react-icons/all-files/fi/FiArrowDownCircle';
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail';

function Home() {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalEl = useRef<HTMLDivElement | null>(null);



    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('about');
            if (!section) return;

            const sectionHeight = section.offsetHeight;
            const viewportHeight = window.innerHeight;
            const maxScroll = sectionHeight - viewportHeight;
            const currentScroll = Math.min(window.pageYOffset - section.offsetTop, maxScroll);

            setScrollPosition((viewportHeight / 2) - (sectionHeight / 2) + currentScroll);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



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
                        <button className='header-option__hire-button' onClick={openModal}>
                            <span className='animation-rotate animation-rotate__header'><AiOutlineMail /></span> &nbsp; &nbsp;Contact Me</button>
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
                                <text className="outlined-text outlined-text__full">F<tspan className='animation-flash'>U</tspan>LLSTACK</text>
                            </svg>
                            <svg className='svg'>
                                <text className="outlined-text outlined-text__dev">DEVEL<tspan className='animation-flash-o'>O</tspan>PER</text>
                            </svg>
                        </div>
                        <div className='section__box1__button'>
                            <button className='button__download-cv'>
                                <span className='animation-rotate animation-rotate__cv'>
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

                    <div className="line-x">
                        <div className="fixed vertical_gap_small" style={{ top: `50%`, transform: `translateY(-50%) translateX(50%)`, marginTop: `${scrollPosition}px` }}>



                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{marginBottom:'10px'}} className='svg-social'>
                                <path d="M 25 2 C 12.311335 2 2 12.311335 2 25 C 2 37.688665 12.311335 48 25 48 C 37.688665 48 48 37.688665 48 25 C 48 12.311335 37.688665 2 25 2 z M 25 4 C 36.607335 4 46 13.392665 46 25 C 46 25.071371 45.994849 25.141688 45.994141 25.212891 C 45.354527 25.153853 44.615508 25.097776 43.675781 25.064453 C 42.347063 25.017336 40.672259 25.030987 38.773438 25.125 C 38.843852 24.634651 38.893205 24.137377 38.894531 23.626953 C 38.991361 21.754332 38.362521 20.002464 37.339844 18.455078 C 37.586913 17.601352 37.876747 16.515218 37.949219 15.283203 C 38.031819 13.878925 37.910599 12.321765 36.783203 11.269531 L 36.494141 11 L 36.099609 11 C 33.416539 11 31.580023 12.12321 30.457031 13.013672 C 28.835529 12.386022 27.01222 12 25 12 C 22.976367 12 21.135525 12.391416 19.447266 13.017578 C 18.324911 12.126691 16.486785 11 13.800781 11 L 13.408203 11 L 13.119141 11.267578 C 12.020956 12.287321 11.919778 13.801759 11.988281 15.199219 C 12.048691 16.431506 12.321732 17.552142 12.564453 18.447266 C 11.524489 20.02486 10.900391 21.822018 10.900391 23.599609 C 10.900391 24.111237 10.947969 24.610071 11.017578 25.101562 C 9.2118173 25.017808 7.6020996 25.001668 6.3242188 25.046875 C 5.3845143 25.080118 4.6454422 25.135713 4.0058594 25.195312 C 4.0052628 25.129972 4 25.065482 4 25 C 4 13.392665 13.392665 4 25 4 z M 14.396484 13.130859 C 16.414067 13.322043 17.931995 14.222972 18.634766 14.847656 L 19.103516 15.261719 L 19.681641 15.025391 C 21.263092 14.374205 23.026984 14 25 14 C 26.973016 14 28.737393 14.376076 30.199219 15.015625 L 30.785156 15.273438 L 31.263672 14.847656 C 31.966683 14.222758 33.487184 13.321554 35.505859 13.130859 C 35.774256 13.575841 36.007486 14.208668 35.951172 15.166016 C 35.883772 16.311737 35.577304 17.559658 35.345703 18.300781 L 35.195312 18.783203 L 35.494141 19.191406 C 36.483616 20.540691 36.988121 22.000937 36.902344 23.544922 L 36.900391 23.572266 L 36.900391 23.599609 C 36.900391 26.095064 36.00178 28.092339 34.087891 29.572266 C 32.174048 31.052199 29.152663 32 24.900391 32 C 20.648118 32 17.624827 31.052192 15.710938 29.572266 C 13.797047 28.092339 12.900391 26.095064 12.900391 23.599609 C 12.900391 22.134903 13.429308 20.523599 14.40625 19.191406 L 14.699219 18.792969 L 14.558594 18.318359 C 14.326866 17.530484 14.042825 16.254103 13.986328 15.101562 C 13.939338 14.14294 14.166221 13.537027 14.396484 13.130859 z M 8.8847656 26.021484 C 9.5914575 26.03051 10.40146 26.068656 11.212891 26.109375 C 11.290419 26.421172 11.378822 26.727898 11.486328 27.027344 C 8.178972 27.097092 5.7047309 27.429674 4.1796875 27.714844 C 4.1152068 27.214494 4.0638483 26.710021 4.0351562 26.199219 C 5.1622058 26.092262 6.7509972 25.994233 8.8847656 26.021484 z M 41.115234 26.037109 C 43.247527 26.010033 44.835728 26.108156 45.962891 26.214844 C 45.934234 26.718328 45.883749 27.215664 45.820312 27.708984 C 44.24077 27.41921 41.699674 27.086688 38.306641 27.033203 C 38.411945 26.739677 38.499627 26.438219 38.576172 26.132812 C 39.471291 26.084833 40.344564 26.046896 41.115234 26.037109 z M 11.912109 28.019531 C 12.508849 29.215327 13.361516 30.283019 14.488281 31.154297 C 16.028825 32.345531 18.031623 33.177838 20.476562 33.623047 C 20.156699 33.951698 19.86578 34.312595 19.607422 34.693359 L 19.546875 34.640625 C 19.552375 34.634325 19.04975 34.885878 18.298828 34.953125 C 17.547906 35.020374 16.621615 35 15.800781 35 C 14.575781 35 14.03621 34.42121 13.173828 33.367188 C 12.696283 32.72356 12.114101 32.202331 11.548828 31.806641 C 10.970021 31.401475 10.476259 31.115509 9.8652344 31.013672 L 9.7832031 31 L 9.6992188 31 C 9.2325521 31 8.7809835 31.03379 8.359375 31.515625 C 8.1485707 31.756544 8.003277 32.202561 8.0976562 32.580078 C 8.1920352 32.957595 8.4308563 33.189581 8.6445312 33.332031 C 10.011254 34.24318 10.252795 36.046511 11.109375 37.650391 C 11.909298 39.244315 13.635662 40 15.400391 40 L 18 40 L 18 44.802734 C 10.967811 42.320535 5.6646795 36.204613 4.3320312 28.703125 C 5.8629338 28.414776 8.4265387 28.068108 11.912109 28.019531 z M 37.882812 28.027344 C 41.445538 28.05784 44.08105 28.404061 45.669922 28.697266 C 44.339047 36.201504 39.034072 42.31987 32 44.802734 L 32 39.599609 C 32 38.015041 31.479642 36.267712 30.574219 34.810547 C 30.299322 34.368135 29.975945 33.949736 29.615234 33.574219 C 31.930453 33.11684 33.832364 32.298821 35.3125 31.154297 C 36.436824 30.284907 37.287588 29.220424 37.882812 28.027344 z M 23.699219 34.099609 L 26.5 34.099609 C 27.312821 34.099609 28.180423 34.7474 28.875 35.865234 C 29.569577 36.983069 30 38.484177 30 39.599609 L 30 45.398438 C 28.397408 45.789234 26.72379 46 25 46 C 23.27621 46 21.602592 45.789234 20 45.398438 L 20 39.599609 C 20 38.508869 20.467828 37.011307 21.208984 35.888672 C 21.950141 34.766037 22.886398 34.099609 23.699219 34.099609 z M 12.308594 35.28125 C 13.174368 36.179258 14.222525 37 15.800781 37 C 16.579948 37 17.552484 37.028073 18.476562 36.945312 C 18.479848 36.945018 18.483042 36.943654 18.486328 36.943359 C 18.36458 37.293361 18.273744 37.645529 18.197266 38 L 15.400391 38 C 14.167057 38 13.29577 37.55443 12.894531 36.751953 L 12.886719 36.738281 L 12.880859 36.726562 C 12.716457 36.421191 12.500645 35.81059 12.308594 35.28125 z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{marginBottom:'10px'}} className='svg-social'>
                                <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" style={{marginBottom:'10px'}} className='svg-social'>
                                <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50" className='svg-social'>
                                <path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"></path>
                            </svg>



                        </div>
                    </div>

                    <h1 className='typo-from typo-from__level-1-title'>Let's Get Started!</h1>


                    <div className='level-1'>
                        <div className='level-1__container'>
                            <div className='level-1__image-container'>
                                <img src='../../images/myimage.png' alt='myimage' className='level-1__myimage' />
                            </div>
                            <div className='level-1__dialogue-box'>
                                <span className='level-1__dialogue-text' >
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className='section__box2'>
                        <div className='container'>
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