import { Link } from 'react-router-dom';
const CharacterCard = (props) => {
  return (
    <div>
      <Link
        to={`/character/${props.characterData.id}`}
        className='sectionList__list--characterLi__link'
      >
        <img
          className='sectionList__list--characterLi__link--img'
          src={props.characterData.img}
          alt={`Foto de: ${props.characterData.name}`}
          title={`Foto de: ${props.characterData.name}`}
        />

        <div className='sectionList__list--characterLi__link--containerData'>
          <h2 className='sectionList__list--characterLi__link--containerData__name'>
            {props.characterData.name}
          </h2>
        
        </div>
      </Link>

      <p className='sectionList__list--characterLi__link--paragraph'>
        Pincha para más información
      </p>
    </div>
  );
};
export default CharacterCard;
