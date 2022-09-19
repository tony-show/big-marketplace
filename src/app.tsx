import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import Menu from './components/menu/menu'
import AccountPage from './pages/accountPage'
import BasketPage from './pages/basketPage/basketPage'
import FavoritePage from './pages/favoritePage'
import MainPage from './pages/mainPage/mainPage'
import OrdersPage from './pages/ordersPage'
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
                <Route path={routing.account.orders} element={<OrdersPage />} />
                <Route
                  path='/services/:service'
                  element={<TemplatePage title='Сервис' />}
                />
                <Route path='/account'>
                  <Route index element={<AccountPage />} />
                  <Route path='favorite' element={<FavoritePage />} />
                  <Route path=':page' element={<AccountPage />} />
                </Route>
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
