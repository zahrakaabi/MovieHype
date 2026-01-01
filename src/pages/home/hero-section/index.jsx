/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Lib Components

// Styles
import './index.scss';

/* -------------------------------------------------------------------------- */
/*                           HERO SECTION COMPONENT                           */
/* -------------------------------------------------------------------------- */
function HeroSection() {
/* -------------------------------- RENDERING ------------------------------- */
    return (
        <div className="hero-section container w-full flex items-center">
            <div className="movie--cover w-full">
                <div className="movie--cover__overview flex flex-col items-end mb-1">
                    <h1 className="title w-full">THE <br/> WITCHER</h1>
                    <div className="data-type-container w-full flex justify-end items-center">
                        <p className="date">04 Mai 2021</p>
                        <hr/>
                        <p className="type">Fantasy, Drama</p>
                    </div>
                </div>

                <div className="movie--cover__story flex">
                    <h2>The <br/> story</h2>
                    <div className="story-content">
                        <p>The witcher is an American fantasy drama series produced by Lauren Schimit
                        Hissrich. It is based on the book of the same name by Polish writer.</p>
                        <div className="read--more flex items-center gap-1" aria-label='read-more' title='read-more'>
                            <span>Read more</span> 
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </div>
                    </div>
                </div>

                <div className="movie--cover__trailers flex flex-wrap gap-2">
                    <h2>Trailers</h2>
                    <div className="trailers-images flex flex-wrap gap-2">
                        <div title="trailer-1" aria-label="trailer-1"></div>
                        <div title="trailer-2" aria-label="trailer-2"></div>
                        <div title="trailer-3" aria-label="trailer-3"></div>
                    </div>

                    <button className="cta-container flex items-center gap-2" aria-label="watch now" title="watch now">
                        <div className="flex items-center justify-center"><i className="fas fa-play"></i></div>
                        <p>watch Now</p>
                    </button>
                </div>
            </div>
            
            <div className="social--media flex gap-1">
                {['facebook', 'instagram', 'twitter'].map((platform) => (
                    <a key={platform} href={`https://www.${platform}.com`} target="_blank" rel="noopener noreferrer" className="social-link">
                        <h5>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h5>
                    </a>
                ))}
            </div>
        </div>
    )
};

export default HeroSection;