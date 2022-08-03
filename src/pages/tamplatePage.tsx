import { ReactFC } from '@src/interfaces/react'
import React from 'react'
import { useParams } from 'react-router-dom'

interface ITemplatePageProps {
  title?: string
}

const TemplatePage: ReactFC<ITemplatePageProps> = ({ title = 'Контент' }) => {
  const params = useParams()
  console.log(params)
  return (
    <div className='wrapper'>
      <h1>{title}</h1>
    </div>
  )
}
export default TemplatePage
