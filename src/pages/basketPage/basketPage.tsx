import BasketList from '@modules/basketList/basketList'
import BasketOrder, {
  IBasketOrderProps,
} from '@src/components/basketOrder/basketOrder'
import Button from '@src/components/button/button'
import Panel from '@src/components/panel/panel'
import Preloader from '@src/components/preloader/preloader'
import generateProducts from '@src/data/products'
import functionHelpers from '@src/helpers/functionHelpers'
import IProduct from '@src/interfaces/product'
import { ReactFC } from '@src/interfaces/react'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import './basketPage.sass'

const productsData: IProduct[] = generateProducts(7)

const ShipType = {
  postomat: 'Пункт выдачи',
  courier: 'Курьер',
}

const BasketPage: ReactFC = () => {
  const [products, setProducts] = useState<IProduct[]>(productsData)
  const [isOpenShipModal, setIsOpenShipModal] = useState(false)
  const [isOpenPayMethodModal, setIsOpenPayMethodModal] = useState(false)
  const [payMethod, setPayMethod] = useState(null)
  const [shipAddress, setShipAddress] = useState(null)
  const [shipType, setShipType] = useState(ShipType.postomat)
  const [orderData, setOrderData] = useState<IBasketOrderProps>(null)
  const [checkedAll, setCheckedAll] = useState(products.every((i) => i.checked))
  const [isWarning, setIsWarning] = useState({
    shipAddress: false,
    payMethod: false,
  })

  const checkSettings = () => {
    const warnings = {
      shipAddress: false,
      payMethod: false,
    }
    if (!shipAddress) {
      warnings.shipAddress = true
    }
    if (!payMethod) {
      warnings.payMethod = true
    }
    setIsWarning(warnings)
  }

  const getOrderData = (): IBasketOrderProps => {
    const filteredProducts = products.filter((item) => item.checked)
    const totalInfo = {
      count: 0,
      salePrice: 0,
      fullPrice: 0,
      saleSize: 0,
    }
    const countPrice = filteredProducts.reduce((total, item) => {
      const totalPrice = item.price * item.selectedCount
      const salePrice =
        total.salePrice + functionHelpers.getSalePrace(totalPrice, item.sale)
      const fullPrice = total.fullPrice + totalPrice

      return {
        count: total.count + item.selectedCount,
        salePrice,
        fullPrice,
        saleSize: fullPrice - salePrice,
      }
    }, totalInfo)

    return {
      price: countPrice.salePrice,
      fullPrice: countPrice.fullPrice,
      sale: countPrice.saleSize,
      count: countPrice.count,
      shipType,
      shipAddress,
      shipRangeDate: {
        from: moment().add(1, 'd'),
        to: moment().add(3, 'd'),
      },
      payMethod,
      onWarning: checkSettings,
    }
  }

  useEffect(() => {
    const data = getOrderData()
    setOrderData(data)
  }, [payMethod, shipAddress, shipType, products])

  const renderShipTypes = () => {
    return Object.keys(ShipType).map((key: keyof typeof ShipType) => (
      <div
        key={key}
        className={`basket__ship-type ${
          shipType === ShipType[key] ? 'active' : ''
        }`}
        onClick={() => setShipType(ShipType[key])}
      >
        {ShipType[key]}
      </div>
    ))
  }

  const renderShipAddressList = () => {
    const adresses = [
      'Москва, какой-то там бульвар 1',
      'Санкт-Петербург, ул. Петра 1, д. 3',
    ]
    return adresses.map((address) => {
      return (
        <strong
          key={address}
          className={address === shipAddress ? 'active' : ''}
          onClick={() => {
            setShipAddress(address)
            setIsOpenShipModal(false)
          }}
        >
          {address}
        </strong>
      )
    })
  }

  const renderPayMethods = () => {
    const payMethods = ['Картой', 'QR код', 'Кредит']
    return payMethods.map((method) => (
      <div
        key={method}
        className={`basket__pay-method ${method === payMethod ? 'active' : ''}`}
        onClick={() => {
          setPayMethod(method)
          setIsOpenPayMethodModal(false)
        }}
      >
        {method}
      </div>
    ))
  }

  const changeCount = (id: number, count: number) => {
    const updatedProducts = products.map((product: IProduct) => {
      if (product.id === id) {
        product.selectedCount = count
      }
      return product
    })
    setProducts(updatedProducts)
  }

  const onDelete = (id: number) => {
    const filteredProducts = products.filter((item) => item.id !== id)
    setProducts(filteredProducts)
    alert('Товар удален из корзины')
  }

  const toFavorite = (id: number) => {
    const filteredProducts = products.filter((item) => item.id !== id)
    setProducts(filteredProducts)
    alert('Товар добавлен в избранное')
  }

  const onCheckedAll = (isCheckedAll: boolean) => {
    const updatedProducts = products.map((item) => {
      item.checked = isCheckedAll
      return item
    })
    setProducts(updatedProducts)
    setCheckedAll(isCheckedAll)
  }

  const onChecked = (id: number, checked: boolean) => {
    const updatedProducts = products.map((item) => {
      if (item.id === id) {
        item.checked = checked
      }
      return item
    })
    setCheckedAll(updatedProducts.every((item) => item.checked))
    setProducts(updatedProducts)
  }

  return (
    <>
      <div className='basket'>
        <div className='basket__main'>
          <Panel title='Корзина'>
            <BasketList
              checkedAll={checkedAll}
              onCheckedAll={onCheckedAll}
              products={products}
              changeCount={changeCount}
              onDelete={onDelete}
              toFavorite={toFavorite}
              onChecked={onChecked}
            />
          </Panel>
          <Panel
            id='ship-type'
            title='Способ доставки'
            isWarning={isWarning.shipAddress}
            isChange={shipAddress}
            onChange={() => setIsOpenShipModal(true)}
          >
            {!shipAddress && (
              <strong
                className='basket__select-address'
                onClick={() => setIsOpenShipModal(true)}
              >
                Выбрать адрес доставки
              </strong>
            )}
            {!!shipAddress && <strong>{shipAddress}</strong>}
          </Panel>
          <Panel
            id='pay-method'
            title='Способ оплаты'
            isWarning={isWarning.payMethod}
            isChange={payMethod}
            onChange={() => setIsOpenPayMethodModal(true)}
          >
            {!shipAddress && (
              <span>
                Для выбора способа оплаты, необходимо выбрать адрес доставки
              </span>
            )}
            {!!shipAddress && (
              <div className='basket__selected-pay-method'>
                {!payMethod && (
                  <strong onClick={() => setIsOpenPayMethodModal(true)}>
                    Выбрать способ оплаты
                  </strong>
                )}
                {!!payMethod && <span>{payMethod}</span>}
              </div>
            )}
          </Panel>
          <Panel title='Ваши данные'>Анатолий Ивашов</Panel>
        </div>
        <div className='basket__sidebar'>
          {!orderData && <Preloader />}
          {!!orderData && <BasketOrder {...orderData} />}
        </div>
      </div>
      <Modal
        size='lg'
        show={isOpenShipModal}
        onHide={() => setIsOpenShipModal(false)}
        aria-labelledby='example-modal-sizes-title-lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Способ доставки</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='basket__modal-content'>
            <div className='basket__ship-types'>{renderShipTypes()}</div>
            <div className='basket__ship-address-list'>
              {renderShipAddressList()}
            </div>
            <Button
              onClick={() => {
                alert('Выбор адреса доставки на карте')
              }}
            >
              Выбрать адрес доставки
            </Button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={isOpenPayMethodModal}
        onHide={() => setIsOpenPayMethodModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Способ оплаты</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='basket__modal-content'>
            <div className='basket__pay-methods'>{renderPayMethods()}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default BasketPage
