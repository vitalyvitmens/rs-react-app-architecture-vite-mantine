import { Link } from 'react-router-dom'
import { useFetchCharacters } from '../../../hooks/useFetchCharacters'
import { ImgStyle } from '../../../constants/ImgStyle'
import styles from '../Detail.module.css'

export const Episode = ({ data }) => {
  const { characters } = useFetchCharacters()

  return (
    <div>
      <p>
        <span>Номер эпизода: </span>
        {data.episode === 'unknown' ? '🤷' : data.episode || '🤷'}
      </p>
      <p>
        <span>Дата выхода: </span>
        {data.air_date === 'unknown' ? '🤷' : data.air_date || '🤷'}
      </p>
      <span className={styles.name}>Список персонажей: </span>
      <ol>
        {data?.characters?.length === 0 ? (
          <span style={{ color: 'red' }}>Список персонажей отсутствует!</span>
        ) : (
          Array.isArray(data?.characters) &&
          data?.characters?.map(
            (character) =>
              character &&
              characters?.map(
                (item, index) =>
                  item.id === Number(character.slice(42)) && (
                    <li key={index}>
                      <Link to={`/characters/${character.slice(42)}`}>
                        <img
                          style={ImgStyle}
                          src={item.image}
                          alt={item.name}
                        />
                        {item.name}
                      </Link>
                    </li>
                  ),
              ),
          )
        )}
      </ol>
    </div>
  )
}
