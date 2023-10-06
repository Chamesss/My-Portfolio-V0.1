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
                <section className='section'>
                    <div className='section__box2'>
                        <div className='row spaced'>
                            <img src='../../images/myimage-bg.png' alt="profile-bg" className='myimage myimage__bg' />
                            <div className='centered'>
                                <h1 className='typo-from typo-from__title typo-from__title__2'>FULL STACK DEVELOPER CURRENTLY BASED IN TUNISIA. </h1>
                                <p className='typo-from typo-from__subtitle'>Hi ! I'm Chamsedin Azouz, I specialize in the MERN stack, crafting, captivating front-end interfaces and ensuring a robust and efficient backend experience for users.</p>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='row spaced__more'>
                            <div className='centered padding'>
                                <h1 className='typo-from typo-from__title typo-from__title__2'>WHAT DO I WORK</h1>
                                <p className='typo-from typo-from__subtitle'>Hi ! I'm Chamsedin Azouz, I specialize in the MERN stack, crafting, captivating front-end interfaces and ensuring a robust and efficient backend experience for users.</p>
                            </div>
                            <div>
                                <div className='box'>
                                    <div className='row'>
                                        <img src='../../images/brands-logo/react.png' alt='react' className='brand-image' />
                                        <img src='../../images/brands-logo/angular.png' alt='angular' className='brand-image' />
                                        <img src='../../images/brands-logo/sass.png' alt='sass' className='brand-image' />
                                    </div>
                                    <p className='typo-from typo-from__box'>Front-end</p>
                                </div>
                                <div className='box box__grey'>
                                    <div className='row'>
                                        <img src='../../images/brands-logo/node.png' alt='node' className='brand-image' />
                                        <img src='../../images/brands-logo/express.png' alt='express' className='brand-image' />
                                    </div>
                                    <p className='typo-from typo-from__box'>back-end</p>
                                </div>
                                <div className='box'>
                                    <div className='row'>
                                        <img src='../../images/brands-logo/mongo.png' alt='mongo' className='brand-image' />
                                    </div>
                                    <p className='typo-from typo-from__box'>Database</p>
                                </div>
                                <div className='box box__grey'>
                                    <div className='row'>
                                        <img src='../../images/brands-logo/azure.png' alt='azure' className='brand-image' />
                                    </div>
                                    <p className='typo-from typo-from__box'>Cloud</p>
                                </div>
                            </div>
                        </div>
                        <div className='line'></div>
                        <div className='centered'>
                            <h1 className='typo-from typo-from__title typo-from__title__2'>Let’s Start by Saying Hi!</h1>
                            <span className='typo-from header-option header-option__hire-button'>Contact Me</span>
                        </div>
                    </div>
                    <footer>
                        <div className='header'>
                            <div>
                                logos
                            </div>
                            <p className='typo-from'>all right reserved</p>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    );
}

export default home;