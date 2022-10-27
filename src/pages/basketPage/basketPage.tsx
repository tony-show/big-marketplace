import BasketList from '@modules/basketList/basketList'
import BasketOrder from '@src/components/basketOrder/basketOrder'
import Button from '@src/components/button/button'
import Panel from '@src/components/panel/panel'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { PaymentTypeEnum, PaymentTypeValueEnum } from '@src/interfaces/payment'
import { ReactFC } from '@src/interfaces/react'
import ShippingTypeEnum, {
  ShippingTypeValueEnum,
} from '@src/interfaces/shipping'
import {
  changePaymentType,
  changeShippingType,
  setShippingAddress,
} from '@src/store/userStore/userStore'
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import './basketPage.sass'

const BasketPage: ReactFC = () => {
  const dispatch = useAppDispatch()
  const {
    warnings,
    shipping,
    paymentType,
    data: { name, lastname },
  } = useAppSelector((state) => state.user)
  const [isOpenShipModal, setIsOpenShipModal] = useState(false)
  const [isOpenPayMethodModal, setIsOpenPayMethodModal] = useState(false)

  const renderShippingTypes = () => {
    const shippingTypes = [ShippingTypeEnum.courier, ShippingTypeEnum.postomat]

    return shippingTypes.map((key: ShippingTypeEnum) => (
      <div
        key={key}
        className={`basket__ship-type ${shipping.type === key ? 'active' : ''}`}
        onClick={() => dispatch(changeShippingType(key))}
      >
        {ShippingTypeValueEnum[key]}
      </div>
    ))
  }

  const renderShipAddressList = () => {
    return shipping.addreses.map((address) => {
      return (
        <strong
          key={address}
          className={address === shipping.address ? 'active' : ''}
          onClick={() => {
            dispatch(setShippingAddress(address))
            setIsOpenShipModal(false)
          }}
        >
          {address}
        </strong>
      )
    })
  }

  const renderPaymentTypes = () => {
    const paymentTypes = [
      PaymentTypeEnum.card,
      PaymentTypeEnum.qr,
      PaymentTypeEnum.credit,
    ]
    return paymentTypes.map((key: PaymentTypeEnum) => (
      <div
        key={key}
        className={`basket__pay-method ${key === paymentType ? 'active' : ''}`}
        onClick={() => {
          dispatch(changePaymentType(key))
          setIsOpenPayMethodModal(false)
        }}
      >
        {PaymentTypeValueEnum[key]}
      </div>
    ))
  }

  return (
    <>
      <div className='basket'>
        <div className='basket__main'>
          <Panel title='Корзина'>
            <BasketList />
          </Panel>
          <Panel
            id='ship-type'
            title='Способ доставки'
            isWarning={warnings.address}
            isChange={!!shipping.address}
            onChange={() => setIsOpenShipModal(true)}
          >
            {!shipping.address && (
              <strong
                className='basket__select-address'
                onClick={() => setIsOpenShipModal(true)}
              >
                Выбрать адрес доставки
              </strong>
            )}
            {!!shipping.address && <strong>{shipping.address}</strong>}
          </Panel>
          <Panel
            id='pay-method'
            title='Способ оплаты'
            isWarning={warnings.paymentType}
            isChange={!!paymentType}
            onChange={() => setIsOpenPayMethodModal(true)}
          >
            {!shipping.address && (
              <span>
                Для выбора способа оплаты, необходимо выбрать адрес доставки
              </span>
            )}
            {!!shipping.address && (
              <div className='basket__selected-pay-method'>
                {!paymentType && (
                  <strong onClick={() => setIsOpenPayMethodModal(true)}>
                    Выбрать способ оплаты
                  </strong>
                )}
                {!!paymentType && (
                  <span>{PaymentTypeValueEnum[paymentType]}</span>
                )}
              </div>
            )}
          </Panel>
          <Panel title='Ваши данные'>
            {name} {lastname}
          </Panel>
        </div>
        <div className='basket__sidebar'>
          <BasketOrder />
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
            <div className='basket__ship-types'>{renderShippingTypes()}</div>
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
            <div className='basket__pay-methods'>{renderPaymentTypes()}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
export default BasketPage
