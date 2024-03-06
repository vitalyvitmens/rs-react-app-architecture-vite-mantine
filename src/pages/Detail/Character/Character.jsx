import { Link } from 'react-router-dom'
import styles from '../Detail.module.css'

export const Character = ({ data }) => {
  return (
    <div key={data.id}>
      <p>
        <span>Пол: </span>
        {data.gender === 'unknown' ? '🤷' : data.gender || '🤷'}
      </p>
      <p>
        <span>Вид: </span>
        {data.species === 'unknown' ? '🤷' : data.species || '🤷'}
      </p>
      <p>
        <span>Статус: </span>
        {data.status === 'unknown' ? '🤷' : data.status || '🤷'}
      </p>
      <p>
        <span>Тип: </span>
        {data.type === 'unknown' ? '🤷' : data.type || '🤷'}
      </p>
      <p style={{ fontSize: '1.5rem' }}>
        <span className={styles.name}>Расположение: </span>
        {data?.location?.name === 'unknown'
          ? '🤷'
          : (
              <Link to={`/locations${data?.location?.url.slice(40)}`}>
                {data?.location?.name}
              </Link>
            ) || '🤷'}
      </p>
    </div>
  )
}
