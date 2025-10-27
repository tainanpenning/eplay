import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { usePurchaseMutation } from '../../services/api'
import { getTotalPrice, parseToBrl } from '../../utils'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import barCode from '../../assets/images/boleto.png'
import creditCard from '../../assets/images/cartao.png'
import * as S from './styles'

type Installment = {
  quantity: number
  amount: number
  formattedAmount: string
}

export const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installments, setInstallments] = useState<Installment[]>([])

  const totalPrice = getTotalPrice(items)

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
      cardExpireMonth: '',
      cardExpireYear: '',
      cardCode: '',
      installments: 1
    },
    validationSchema: Yup.object({
      // delivery validation
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      email: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      cpf: Yup.string()
        .min(14, 'O campo precisa ter 14 caracteres')
        .max(14, 'O campo precisa ter 14 caracteres')
        .required('O campo é obrigatório'),
      deliveryEmail: Yup.string()
        .email('E-mail inválido')
        .required('O campo é obrigatório'),
      confirmDeliveryEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'Os E-mails não correspondem')
        .required('O campo é obrigatório'),

      // payment validation
      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardExpireMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardExpireYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
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
          card: {
            active: payWithCard,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.cardExpireMonth),
              year: Number(values.cardExpireYear)
            },
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            }
          },
          installments: 1
        },
        products: [
          {
            id: 1,
            price: 100
          }
        ]
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  useEffect(() => {
    const calculateInstallments = () => {
      const installmentsArray: Installment[] = []

      for (let i = 1; i <= 6; i++) {
        installmentsArray.push({
          quantity: i,
          amount: totalPrice / i,
          formattedAmount: parseToBrl(totalPrice / i)
        })
      }

      return installmentsArray
    }

    if (totalPrice > 0) {
      setInstallments(calculateInstallments())
    }
  }, [totalPrice])

  return (
    <>
      {items.length ? (
        <div className="container">
          {!isSuccess ? (
            <form onSubmit={form.handleSubmit}>
              <Card title="Dados de Crobança">
                <>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="fullName">Nome completo</label>
                      <input
                        id="fullName"
                        type="text"
                        name="fullName"
                        value={form.values.fullName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('fullName') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.values.email}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('email') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="cpf">CPF</label>
                      <input
                        id="cpf"
                        type="text"
                        name="cpf"
                        value={form.values.cpf}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('cpf') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <h3 className="margin-top">
                    Dados de entrega - conteúdo digital
                  </h3>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="deliveryEmail">E-mail</label>
                      <input
                        id="deliveryEmail"
                        type="email"
                        name="deliveryEmail"
                        value={form.values.deliveryEmail}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('deliveryEmail') ? 'error' : ''
                        }
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="confirmDeliveryEmail">
                        Confirme o e-mail
                      </label>
                      <input
                        id="confirmDeliveryEmail"
                        type="email"
                        name="confirmDeliveryEmail"
                        value={form.values.confirmDeliveryEmail}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('confirmDeliveryEmail')
                            ? 'error'
                            : ''
                        }
                      />
                    </S.InputGroup>
                  </S.Row>
                </>
              </Card>
              <Card title="Pagamento">
                <>
                  <S.TabButton
                    type="button"
                    $isActive={!payWithCard}
                    onClick={() => setPayWithCard(false)}
                  >
                    <img src={barCode} alt="Boleto" />
                    Boleto bancário
                  </S.TabButton>
                  <S.TabButton
                    type="button"
                    $isActive={payWithCard}
                    onClick={() => setPayWithCard(true)}
                  >
                    <img src={creditCard} alt="Cartão de crédito" />
                    Cartão de crédito
                  </S.TabButton>
                  <div className="margin-top">
                    {payWithCard ? (
                      <>
                        <S.Row>
                          <S.InputGroup>
                            <label htmlFor="cardOwner">
                              Nome do titular do cartão
                            </label>
                            <input
                              id="cardOwner"
                              type="text"
                              name="cardOwner"
                              value={form.values.cardOwner}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardOwner') ? 'error' : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup>
                            <label htmlFor="cpfCardOwner">
                              CPF do titular do cartão
                            </label>
                            <input
                              id="cpfCardOwner"
                              type="text"
                              name="cpfCardOwner"
                              value={form.values.cpfCardOwner}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cpfCardOwner')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                        </S.Row>
                        <S.Row className="margin-top">
                          <S.InputGroup>
                            <label htmlFor="cardDisplayName">
                              Nome no cartão
                            </label>
                            <input
                              id="cardDisplayName"
                              type="text"
                              name="cardDisplayName"
                              value={form.values.cardDisplayName}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardDisplayName')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup>
                            <label htmlFor="cardNumber">Número do cartão</label>
                            <input
                              id="cardNumber"
                              type="text"
                              name="cardNumber"
                              value={form.values.cardNumber}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardNumber') ? 'error' : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup $maxWidth="123px">
                            <label htmlFor="cardExpireMonth">
                              Mês do vencimento
                            </label>
                            <input
                              id="cardExpireMonth"
                              type="text"
                              name="cardExpireMonth"
                              value={form.values.cardExpireMonth}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardExpireMonth')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup $maxWidth="123px">
                            <label htmlFor="cardExpireYear">
                              Ano do vencimento
                            </label>
                            <input
                              id="cardExpireYear"
                              type="text"
                              name="cardExpireYear"
                              value={form.values.cardExpireYear}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardExpireYear')
                                  ? 'error'
                                  : ''
                              }
                            />
                          </S.InputGroup>
                          <S.InputGroup $maxWidth="48px">
                            <label htmlFor="cardCode">CVV</label>
                            <input
                              id="cardCode"
                              type="text"
                              name="cardCode"
                              value={form.values.cardCode}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                              className={
                                checkInputHasError('cardCode') ? 'error' : ''
                              }
                            />
                          </S.InputGroup>
                        </S.Row>
                        <S.Row className="margin-top">
                          <S.InputGroup $maxWidth="150px">
                            <label htmlFor="installments">Parcelamento</label>
                            <select
                              id="installments"
                              name="installments"
                              value={form.values.installments}
                              onChange={form.handleChange}
                              onBlur={form.handleBlur}
                            >
                              {installments.map((installment) => (
                                <option key={installment.quantity}>
                                  {installment.quantity}x de{' '}
                                  {installment.formattedAmount}
                                </option>
                              ))}
                            </select>
                          </S.InputGroup>
                        </S.Row>
                      </>
                    ) : (
                      <p>
                        Ao optar por essa forma de pagamento, é importante
                        lembrar que a confirmação pode levar até 3 dias úteis,
                        devido aos prazos estabelecidos pelas instituições
                        financeiras. Portanto, a liberação do código de ativação
                        do jogo adquirido ocorrerá somente após a aprovação do
                        pagamento do boleto.
                      </p>
                    )}
                  </div>
                </>
              </Card>
              <Button
                type="submit"
                title="Clique aqui para finalizar o pagamento"
              >
                Finalizar compra
              </Button>
            </form>
          ) : (
            <Card title="Muito Obrigado">
              <>
                <p>
                  É com satisfação que informamos que recebemos seu pedido com
                  sucesso! <br />
                  Abaixo estão os detalhes da sua compra: <br />
                  Número do pedido: {data.orderId} <br />
                  Forma de pagamento:{' '}
                  {payWithCard ? 'Cartão de Crédito' : 'Boleto Bancário'}
                </p>
                <p className="margin-top">
                  Caso tenha optado pelo pagamento via boleto bancário,
                  lembre-se de que a confirmação pode levar até 3 dias úteis.
                  Após a aprovação do pagamento, enviaremos um e-mail contendo o
                  código de ativação do jogo.
                </p>
                <p className="margin-top">
                  Se você optou pelo pagamento com cartão de crédito, a
                  liberação do código de ativação ocorrerá após a aprovação da
                  transação pela operadora do cartão. Você receberá o código no
                  e-mail cadastrado em nossa loja.
                </p>
                <p className="margin-top">
                  Pedimos que verifique sua caixa de entrada e a pasta de spam
                  para garantir que receba nossa comunicação. Caso tenha alguma
                  dúvida ou necessite de mais informações, por favor, entre em
                  contato conosco através dos nossos canais de atendimento ao
                  cliente.
                </p>
                <p className="margin-top">
                  Agradecemos por escolher a EPLAY e esperamos que desfrute do
                  seu jogo!
                </p>
              </>
            </Card>
          )}
        </div>
      ) : (
        <div className="container">
          <Card title="Ops...">
            <>
              <p>
                Parece que você não tem nenhum jogo adicionado ao carrinho.
                Adicione pelo menos um jogo para prosseguir com a compra.
              </p>
              <p>
                Para fazer isso, navegue pelo cabeçalho ou no rodapé e escolha
                uma seção que lhe interesssa!
              </p>
            </>
          </Card>
        </div>
      )}
    </>
  )
}
