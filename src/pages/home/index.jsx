/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// UI Local Components
import HeroSection from './hero-section';
import MoviesSection from './movies-section';

/* -------------------------------------------------------------------------- */
/*                             HOME PAGE COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Home(){
/* -------------------------------- RENDERING ------------------------------- */
    return (
      <>
        <HeroSection />
        <MoviesSection />
      </>
    )
};

export default Home;