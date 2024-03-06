import { Link } from 'react-router-dom'
import { useFetchCharacters } from '../../../hooks/useFetchCharacters'
import { ImgStyle } from '../../../constants/ImgStyle'
import styles from '../Detail.module.css'

export const Locations = ({ data }) => {
  const { characters } = useFetchCharacters()

  return (
    <div>
      <p>
        <span>Тип: </span>
        {data.type === 'unknown' ? '🤷' : data.type || '🤷'}
      </p>
      <p>
        <span>Измерение: </span>
        {data.dimension === 'unknown' ? '🤷' : data.dimension || '🤷'}
      </p>
      <span className={styles.name}>Список жителей: </span>
      <ol>
        {data?.residents?.length === 0 ? (
          <span style={{ color: 'red' }}>Список жителей отсутствует!</span>
        ) : (
          Array.isArray(data?.residents) &&
          data?.residents?.map(
            (resident) =>
              resident &&
              characters?.map(
                (item, index) =>
                  item.id === Number(resident.slice(42)) && (
                    <li key={index}>
                      <Link to={`/characters/${resident.slice(42)}`}>
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
