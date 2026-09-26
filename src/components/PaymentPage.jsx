import BusinessHeader from './BusinessHeader'
import PaymentSummary from './PaymentSummary'
import PaymentMethodSection from './PaymentMethodSection'
import DemoNotice from './DemoNotice'
import PaymentActions from './PaymentActions'
import PoweredByFooter from './PoweredByFooter'
import './PaymentPage.css'

function PaymentPage({ data }) {
  const { businessName, pageTitle, parentName, studentName, amount, currency, dueDate, paymentStatus, mode } =
    data

  return (
    <div className="payment-page">
      <div className="payment-card">
        <BusinessHeader businessName={businessName} pageTitle={pageTitle} />
        <PaymentSummary
          parentName={parentName}
          studentName={studentName}
          dueDate={dueDate}
          amount={amount}
          currency={currency}
          paymentStatus={paymentStatus}
        />
        <PaymentMethodSection />
        <DemoNotice />
        <PaymentActions mode={mode} />
      </div>
      <PoweredByFooter />
    </div>
  )
}

export default PaymentPage
