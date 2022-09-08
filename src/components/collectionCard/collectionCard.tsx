import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import './collectionCard.sass'

interface ICollectionCardProps {
  id: number
}

const CollectionCard: ReactFC<ICollectionCardProps> = ({ id }) => {
  return (
    <div className='collection-card'>
      <img
        src={`https://placeimg.com/1920/1080/tech?id=${id}`}
        alt='Collection card'
      />
    </div>
  )
}
export default CollectionCard
