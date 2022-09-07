import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import Menu from './components/menu/menu'
import BasketPage from './pages/basketPage/basketPage'
import MainPage from './pages/mainPage/mainPage'
import ProductPage from './pages/productPage/productPage'
import ProductsPage from './pages/productsPage/productsPage'
import TemplatePage from './pages/tamplatePage'
import routing from './routes/routes'
import createStore from './store/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={createStore()}>
        <div className='wrapper'>
          <Menu />
          <Header />
          <main className='content'>
            <div className='container'>
              <Routes>
                <Route path={routing.home} element={<MainPage />} />
                <Route
                  path={routing.login}
                  element={<TemplatePage title='Вход' />}
                />
                <Route path={routing.basket} element={<BasketPage />} />
                <Route
                  path='/services/:service'
                  element={<TemplatePage title='Сервис' />}
                />
                <Route
                  path='/lk/:page'
                  element={<TemplatePage title='Личный кабинет' />}
                />
                <Route path='/catalog/:category'>
                  <Route index element={<ProductsPage />} />
                  <Route path=':subCategory'>
                    <Route index element={<ProductsPage />} />
                    <Route path=':innerSubCategory'>
                      <Route index element={<ProductsPage />} />
                    </Route>
                  </Route>
                </Route>
                <Route path='/product/:id' element={<ProductPage />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  )
}
export default App
