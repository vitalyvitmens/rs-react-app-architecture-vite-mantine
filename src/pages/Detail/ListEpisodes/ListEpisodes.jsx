import { Link } from 'react-router-dom'
import { CharactersStyle } from '../../../constants/CharactersStyle'
import { useFetchEpisodes } from '../../../hooks/useFetchEpisodes'
import styles from '../Detail.module.css'

export const ListEpisodes = ({ data }) => {
  const { episodes } = useFetchEpisodes()

  return (
    <div style={CharactersStyle}>
      <span className={styles.name}>Список эпизодов: </span>
      <ol>
        {data?.episode?.length === 0 ? (
          <span style={{ color: 'red' }}>Список эпизодов отсутствует!</span>
        ) : (
          Array.isArray(data?.episode) &&
          data?.episode.map(
            (episode) =>
              episode &&
              episodes?.map(
                (item, index) =>
                  item.id === Number(episode.slice(40)) && (
                    <li key={index}>
                      <Link to={`/episodes/${episode.slice(40)}`}>
                        {item.episode} {item.name}
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
