import React from 'react';

function home() {
    return (
        <div>
            <main>
                <section className='section'>
                    <div className='section__box1'>
                        <header className='header typo-from typo-from__header'>
                            <div>
                                <span>Chams</span>
                            </div>
                            <div className='typo-from__options'>
                                <span className='header-option'>Home</span>
                                <span className='header-option'>About</span>
                                <span className='header-option'>Services</span>
                                <span className='header-option header-option__hire-button'>Contact Me</span>
                            </div>
                        </header>
                        <div>
                            <h1 className='typo-from typo-from__title'>I'm ChamseDin Azouz.</h1>
                            <h2 className='typo-from typo-from__subtitle'>Full Stack Developer</h2>
                        </div>
                        <img src='../../images/myimage.png' alt='profile' className='myimage myimage__profile' />
                        <span className='typo-from typo-from__sided'>CHAMES</span>
                    </div>
                </section>
                <section className='social-media'>
                    <a href='#' className='social-media__section'>
                        <img src='../../images/github1.png' alt='github' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Github</span>
                    </a>
                    <a href='#' className='social-media__section'>
                        <img src='../../images/linkedin0.png' alt='linkedin' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Linkedin</span>
                    </a>
                    <a href='#' className='social-media__section'>
                        <img src='../../images/facebook1.png' alt='facebook' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Facebook</span>
                    </a>
                    <a href='#' className='social-media__section'>
                        <img src='../../images/instagram0.png' alt='instagram' className='social-media__image' />
                        <span className='typo-from typo-from__social'>Instagram</span>
                    </a>
                </section>
                <section className='section'>
                    <div className='section__box2'>
                        <img src='../../images/myimage-bg.png' alt="my-image-bg" className='myimage myimage__bg' />
                        <div className='centered'>
                            <h1 className='typo-from typo-from__title typo-from__title__2'>FULL STACK DEVELOPER CURRENTLY BASED IN TUNISIA. </h1>
                            <p className='typo-from typo-from__subtitle'>Hi ! I'm Chamsedin Azouz, I specialize in the MERN stack, crafting captivating front-end interfaces and ensuring a robust and efficient backend experience for users.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default home;