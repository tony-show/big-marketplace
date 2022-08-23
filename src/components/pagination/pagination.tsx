import { ReactFC } from '@src/interfaces/react'
import Pagination from 'react-bootstrap/Pagination'
import React from 'react'
import './pagination.sass'

const CustomPagination: ReactFC = () => {
  return (
    <Pagination className='pagination'>
      <Pagination.Prev className='pagination__text-btn'>
        <i className='ic_arrow-left' />
        <span>Предыдущая страница</span>
      </Pagination.Prev>
      <Pagination.First>1</Pagination.First>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item active>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Ellipsis disabled />
      <Pagination.Last>{100}</Pagination.Last>
      <Pagination.Next className='pagination__text-btn'>
        <span>Следущая страница</span>
        <i className='ic_arrow-right' />
      </Pagination.Next>
    </Pagination>
  )
}
export default CustomPagination
