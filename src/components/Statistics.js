import React from 'react'
import Fade from 'react-reveal/Fade'
import Globe from '../images/globe_icon.svg'
import Plane from '../images/plane_icon.svg'
import Glasses from '../images/glasses_icon.svg'
import Magnes from '../images/magnes_icon.svg'
import Passport from '../images/passport_icon.svg'
import Food from '../images/food_icon.svg'
import { useCountUp } from 'react-countup'

const tilesData = [
  {
    alt: 'Globe',
    header: 'Odwiedzone Miejsca',
    textTop: 'Do tej pory odwiedziłam',
    textBottom: 'kraje na całym świecie.',
    value: 22,
    icon: Globe,
  },
  {
    alt: 'Plane',
    header: 'Godziny w Samolocie',
    textTop:
      'Bezpośredni, najdłuższy lot samolotem na odcinku Warszawa --> Wenezuela trwał',
    textBottom: 'godzin.',
    value: 14,
    icon: Plane,
  },
  {
    alt: 'Glasses',
    header: 'Zgubione Rzeczy',
    textTop: 'W trakcie podróży zgubiłam',
    textBottom: 'rzeczy, a wśród nich były kolczyki, okulary czy buty.',
    value: 8,
    icon: Glasses,
  },
  {
    alt: 'Magnes',
    header: 'Przywiezione Magnesy',
    textTop:
      'Magnesy to nieodłączny element każdej podróży. Moja kolekcja liczy już',
    textBottom: 'sztuk.',
    value: 28,
    icon: Magnes,
  },
  {
    alt: 'Passport',
    header: 'Stemple w Paszporcie',
    textTop: 'Dzięki podróżom do Afryki, Azji i Ameryki, posiadam',
    textBottom: 'stępli i wiz w paszporcie, ',
    value: 7,
    icon: Passport,
  },
  {
    alt: 'Food',
    header: 'Niestrawności Żołądkowe',
    textTop: 'Uwielbiam próbować nowe potrawy, jednak',
    textBottom: 'z nich zakończyło się niestawnościami żołądka.',
    value: 5,
    icon: Food,
  },
]

const TriggerNumbers = ({ value, isVisible }) => {
  const { countUp, start } = useCountUp({
    useEasing: false,
    redraw: true,
    end: value,
    duration: 3,
    startOnMount: false,
  })

  React.useEffect(() => {
    isVisible && start()
  }, [isVisible])

  return <b className="counter">{` ${isVisible ? countUp : value} `}</b>
}

const SingleIconElement = ({
  alt,
  header,
  textTop,
  textBottom,
  icon,
  isVisible,
  value,
}) => {
  return (
    <div className="stats-single">
      <span className="icon">
        <img src={icon} alt={alt} />
      </span>
      <h3>{header}</h3>
      <p>
        <span>{textTop}</span>
        <TriggerNumbers isVisible={isVisible} value={value} />
        <span>{textBottom}</span>
      </p>
    </div>
  )
}

const Statistics = ({ isVisible }) => {
  return (
    <Fade up>
      <section id="Statistics">
        {tilesData.map(tile => (
          <SingleIconElement
            key={tile.alt}
            isVisible={isVisible}
            alt={tile.alt}
            icon={tile.icon}
            textBottom={tile.textBottom}
            textTop={tile.textTop}
            header={tile.header}
            value={tile.value}
          />
        ))}
      </section>
    </Fade>
  )
}

export default Statistics
