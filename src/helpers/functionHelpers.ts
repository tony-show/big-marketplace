const functionHelpers = {
  getSalePrace: (price: number, sale: number) => {
    const priceWithSale = Math.ceil(price - (price / 100) * sale)
    return priceWithSale
  },
  getDigitNumber: (num: number | string) => {
    num = String(num)
    const reg = /([0-9])(?=([0-9]{3})+$)/g
    return num.replace(reg, '$1 ')
  },
  scrollToElement: (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  },
}
export default functionHelpers
