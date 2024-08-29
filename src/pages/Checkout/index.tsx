import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Button from '../../components/Button'
import Card from '../../components/Card'

import { InputGroup, Row, TabButton } from './styles'

import creditCard from '../../assets/images/credit-card.png'
import bankSlip from '../../assets/images/barcode.png'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmDeliveryEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: '',
      installments: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'The name must be at least 5 characters long')
        .required('Field is mandatory'),
      email: Yup.string().email('Email invalid').required('Field is mandatory'),
      cpf: Yup.string()
        .min(14, 'The CPF must be at least 14 characters long')
        .max(14, 'The CPF must have a maximum of 14 characters')
        .required('Field is mandatory'),
      deliveryEmail: Yup.string()
        .email('Email invalid')
        .required('Field is mandatory'),
      confirmDeliveryEmail: Yup.string()
        .required('Field is mandatory')
        .oneOf([Yup.ref('deliveryEmail')], 'The emails are different'),

      cardOwner: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(5, 'The name must be at least 5 characters long'),
      cpfCardOwner: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(14, 'The CPF must be at least 14 characters long')
        .max(14, 'The CPF must have a maximum of 14 characters'),
      cardDisplayName: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(5, 'The name must be at least 5 characters long'),
      cardNumber: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(12, 'The card number must be at least 12 characters long')
        .max(19, 'The card number must have a maximum of 19 characters'),
      expiresMonth: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(2, 'The month must be at least 2 characters long')
        .max(2, 'The month must have a maximum of 2 characters'),
      expiresYear: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(4, 'The year must be at least 4 characters long')
        .max(4, 'The year must have a maximum of 4 characters'),
      cardCode: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(3, 'The card code must be at least 3 characters long')
        .max(4, 'The card code must have a maximum of 4 characters'),
      installments: Yup.string()
        .when((values, schema) =>
          payWithCard ? schema.required('Field is mandatory') : schema
        )
        .min(12, 'The name must be at least 12 characters long')
        .max(19, 'The CPF must have a maximum of 14 characters')
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  return (
    <>
      <form onSubmit={form.handleSubmit} className="container">
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
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('fullName', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="text"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('email', form.errors.fullName)}</small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="cpf">Cpf</label>
                <input
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage('cpf', form.errors.fullName)}</small>
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
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('deliveryEmail', form.errors.fullName)}
                </small>
              </InputGroup>
              <InputGroup>
                <label htmlFor="confirmDeliveryEmail">Confirm Email</label>
                <input
                  type="email"
                  id="confirmDeliveryEmail"
                  name="confirmDeliveryEmail"
                  value={form.values.confirmDeliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage(
                    'confirmDeliveryEmail',
                    form.errors.confirmDeliveryEmail
                  )}
                </small>
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
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardOwner', form.errors.cardOwner)}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cpfOwner">Cardholder CPF</label>
                      <input
                        type="text"
                        id="cpfOwner"
                        name="cpfOwner"
                        value={form.values.cpfCardOwner}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cpfOwner', form.errors.cpfCardOwner)}
                      </small>
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
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'cardDisplayName',
                          form.errors.cardDisplayName
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="cardNumber">Card number</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardNumber', form.errors.cardNumber)}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresMonth">Due month</label>
                      <input
                        type="text"
                        id="expiresMonth "
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresMonth',
                          form.errors.expiresMonth
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="123px">
                      <label htmlFor="expiresYear">Due year</label>
                      <input
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          'expiresYear',
                          form.errors.expiresYear
                        )}
                      </small>
                    </InputGroup>
                    <InputGroup maxWidth="48px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        type="text"
                        id="cardCode"
                        name="cardCode"
                        value={form.values.cardCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage('cardCode', form.errors.cardCode)}
                      </small>
                    </InputGroup>
                  </Row>
                  <Row marginTop="24px">
                    <InputGroup maxWidth="140px">
                      <label htmlFor="installments">installment</label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        <option>1x of R$200,00</option>
                        <option>2x of R$200,00</option>
                        <option>3x of R$200,00</option>
                      </select>
                      <small>
                        {getErrorMessage(
                          'installments',
                          form.errors.installments
                        )}
                      </small>
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
      </form>
    </>
  )
}

export default Checkout
