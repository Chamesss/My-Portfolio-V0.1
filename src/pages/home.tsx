import React, { useEffect, useState } from 'react';

function Home() {

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

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

    const handleScroll = (id: string) => {
        if (id === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div>
            <main>
                <header className={`header typo-from typo-from__header${isHeaderFixed ? ' sticky' : ' '}`}>
                    <div>
                        <span>Chams</span>
                    </div>
                    <div className='typo-from__options'>
                        <span onClick={() => handleScroll('top')} className='header-option'>Home</span>
                        <span onClick={() => handleScroll('about')} className='header-option'>About</span>
                        <span onClick={() => handleScroll('services')} className='header-option'>Services</span>
                        <span className='header-option header-option__hire-button'>Contact Me</span>
                    </div>
                </header>
                <section className='section section__1'>
                    <div className='section__box1'>
                        <div>
                            <h1 className='typo-from typo-from__title'>I'm ChamseDin Azouz.</h1>
                            <h2 className='typo-from typo-from__subtitle'>Full Stack Developer</h2>
                        </div>
                        <img src='../../images/myimage.png' alt='profile' className='myimage myimage__profile' />
                        <span className='typo-from typo-from__sided'>CHAMES</span>
                    </div>
                </section>
                <section className='social-media'>
                    <a href='https://github.com' className='social-media__section'>
                        <img src='../../images/github1.png' alt='github' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Github</span>
                    </a>
                    <a href='https://linkedin.com' className='social-media__section'>
                        <img src='../../images/linkedin0.png' alt='linkedin' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Linkedin</span>
                    </a>
                    <a href='https://facebook.com' className='social-media__section'>
                        <img src='../../images/facebook1.png' alt='facebook' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Facebook</span>
                    </a>
                    <a href='https://instagram.com' className='social-media__section'>
                        <img src='../../images/instagram0.png' alt='instagram' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Instagram</span>
                    </a>
                </section>
                <section id='about' className='section section__2'>
                    <div className='section__box2'>
                        <div className='row spaced'>
                            <img src='../../images/myimage-bg.png' alt="profile-bg" className='myimage myimage__bg' />
                            <div className='centered'>
                                <h1 className='typo-from typo-from__title typo-from__title__2'>FULL STACK DEVELOPER CURRENTLY BASED IN TUNISIA. </h1>
                                <p className='typo-from typo-from__subtitle'>Hi ! I'm Chamsedin Azouz, I specialize in the MERN stack, crafting, captivating front-end interfaces and ensuring a robust and efficient backend experience for users.</p>
                            </div>
                        </div>
                        <div id='services' className='line'></div>
                        <div className='row spaced__more'>
                            <div className='centered padding'>
                                <h1 className='typo-from typo-from__title typo-from__title__2'>WHAT DO I WORK</h1>
                                <p className='typo-from typo-from__subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div>
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
                        <div className='line'></div>
                        <div className='centered'>
                            <h1 className='typo-from typo-from__title typo-from__title__2'>Let’s Start by Saying Hi!</h1>
                            <span className='typo-from header-option header-option__hire-button'>Contact Me</span>
                        </div>
                        <footer>
                            <div className='space-between'>
                                <div className='row spaced__less'>
                                    <a href='https://github.com' className='social-media__section'>
                                        <img src='../../images/github1.png' alt='github' className='social-media__footer' />
                                    </a>
                                    <a href='https://linkedin.com' className='social-media__section'>
                                        <img src='../../images/linkedin0.png' alt='linkedin' className='social-media__footer' />
                                    </a>
                                    <a href='https://facebook.com' className='social-media__section'>
                                        <img src='../../images/facebook1.png' alt='facebook' className='social-media__footer' />
                                    </a>
                                    <a href='https://instagram.com' className='social-media__section'>
                                        <img src='../../images/instagram0.png' alt='instagram' className='social-media__footer' />
                                    </a>
                                </div>
                                <span className='typo-from typo-from__footer'>Created by <span className='typo-from__footer__name'>Chamsedin Azouz</span> | Copyright &copy; 2023 All rights reserved</span>
                            </div>
                        </footer>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;