import Promo from "../Promo/Promo";
import Quote from "../Quote/Quote";
import AboutMe from "../AboutMe/AboutMe";
import Diploma from "../Diploma/Diploma";
import Add from "../Add/Add";
import Stage from "../Stage/Stage";
import Consultation from "../Consultation/Consultation";
import Slider from "../Slider/Slider";
import Warning from "../Warning/Warning";

export default function Main({onCardClick}) {
  return (
    <main>
      <Promo />
      <Quote />
      <AboutMe />
      <Diploma 
        onCardClick={onCardClick}
      />
      <Add />
      <Stage />
      <Consultation />
      <Slider />
      <Warning />
    </main>
  )
}

/*<Diploma
        onCardClick={handleCardClick} // zoom f
        cards = {cards}
      />*/