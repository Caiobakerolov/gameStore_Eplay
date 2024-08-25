import { useState } from 'react'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row, TabButton } from './styles'

import creditCard from '../../assets/images/credit-card.png'
import bankSlip from '../../assets/images/barcode.png'
import { useFormik } from 'formik'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const form = useFormik({
    initialValues: {
      fullName: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: 1
    },
    onSubmit: (value) => {
      console.log(value)
    }
  })

  return (
    <>
      <div className="container">
        <Card title="billing date">
          <>
            <Row>
              <InputGroup>
                <label htmlFor="fullName">Full name</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">Cpf</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                />
              </InputGroup>
            </Row>
            <h3 className="margin-top">Delivery date - digital content</h3>
            <Row>
              <InputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  type="email"
                  id="deliveryEmail"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirm Email</label>
                <input
                  type="email"
                  id="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                />
              </InputGroup>
            </Row>
          </>
        </Card>
        <Card title="payment">
          <>
            <TabButton
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={bankSlip} alt="Bank Slip" />
              Bank slip
            </TabButton>
            <TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={creditCard} alt="Credit Card" />
              Credit card
            </TabButton>
            <div className="margin-top">
              {payWithCard ? (
                <>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardOwner">Cardholder name</label>
                      <input
                        type="text"
                        id="cardOwner"
                        name="cardOwner"
                        value={form.values.cardOwner}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfOwner">Cardholder CPF</label>
                      <input
                        type="text"
                        id="cpfOwner"
                        name="cpfOwner"
                        value={form.values.cpfOwner}
                      />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup>
                      <label htmlFor="cardDisplayName">Card display name</label>
                      <input
                        type="text"
                        id="cardDisplayName"
                        name="cardDisplayName"
                        value={form.values.cardDisplayName}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Card number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Due month</label>
                      <input
                        type="text"
                        id="expiresMonth "
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Due year</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                      />
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                      />
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="140px">
                      <label htmlFor="installments">installment</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                      >
                        <option>1x of R$200,00</option>
                        <option>2x of R$200,00</option>
                        <option>3x of R$200,00</option>
                      </select>
                    </InputGroup>
                  </Row>
                </>
              ) : (
                <p>
                  Ao optar por essa forma de pagamento, é importante lembrar que
                  a confirmação pode levar até 3 dias úteis, devido aos prazos
                  estabelecidos pelas instituições financeiras. Portanto, a
                  liberação do código de ativação do jogo adquirido ocorrerá
                  somente após a aprovação do pagamento do boleto.
                </p>
              )}
            </div>
          </>
        </Card>
        <Button type="button" title="click here to complete your purchase">
          Complete Purchase
        </Button>
      </div>
    </>
  )
}

export default Checkout
