import { useNavigate } from 'react-router-dom'
import { Component } from '../../components/Component/Component'
import { Character } from './Character/Character'
import { Locations } from './Location/Location'
import { Episode } from './Episode/Episode'
import { ListEpisodes } from './ListEpisodes/ListEpisodes'
import { BtnMantine } from '../../components/BtnMantine/BtnMantine'
import { Error } from '../../components/Error/Error'
import { Image } from '../../components/common/Image'
import { NotFoundMantine } from '../NotFoundMantine/NotFoundMantine'
import { useFetchCategoryId } from '../../hooks/useFetchCategoryId'
import styles from './Detail.module.css'

export const Detail = () => {
  const { loading, error, categoriesId, category } = useFetchCategoryId()
  const navigate = useNavigate()

  const handleGoBack = () => navigate(-1)

  if (loading || !categoriesId) {
    return <h2>Loading...</h2>
  }

  if (!categoriesId && !loading) {
    return <NotFoundMantine />
  }

  return (
    <div className={styles.Detail}>
      {!categoriesId || loading ? (
        <span>Загрузка...</span>
      ) : (
        <div className={styles.row}>
          {categoriesId?.image && (
            <Image src={categoriesId.image} alt={categoriesId.name} />
          )}
          <div className={styles.column}>
            <div className={styles.name}>{categoriesId.name || '🤷'}</div>
            <div className={styles.body}>
              {category === 'characters' && <Character data={categoriesId} />}
              {category === 'locations' && <Locations data={categoriesId} />}
              {category === 'episodes' && <Episode data={categoriesId} />}
              {error && <Error />}
            </div>
          </div>
        </div>
      )}
      {category === 'characters' && <ListEpisodes data={categoriesId} />}
      <Component
        component={BtnMantine}
        style={{
          border: '1px solid black',
          display: 'flex',
          margin: 'auto',
          padding: '0 10px 5px 10px',
        }}
        title="Вернуться назад к списку"
        variant="gradient"
        gradient={{ from: 'red', to: 'violet', deg: 64 }}
        onClick={handleGoBack}
      />
    </div>
  )
}
