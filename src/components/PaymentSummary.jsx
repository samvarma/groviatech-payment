function formatCurrency(amount, currency) {
  if (currency === 'INR') {
    return `₹${amount.toLocaleString('en-IN')}`
  }
  return `${currency} ${amount.toLocaleString('en-IN')}`
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`)
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

function PaymentSummary({ parentName, studentName, dueDate, amount, currency, paymentStatus }) {
  return (
    <section className="payment-summary" aria-label="Payment summary">
      <dl className="summary-details">
        <div className="summary-row">
          <dt>Parent</dt>
          <dd>{parentName}</dd>
        </div>
        <div className="summary-row">
          <dt>Student</dt>
          <dd>{studentName}</dd>
        </div>
        <div className="summary-row">
          <dt>Due Date</dt>
          <dd>{formatDate(dueDate)}</dd>
        </div>
      </dl>

      <div className="amount-block">
        <div className="amount-label-row">
          <span className="amount-label">Pending Amount</span>
          {paymentStatus && (
            <span className={`status-badge status-${paymentStatus}`}>{paymentStatus}</span>
          )}
        </div>
        <span className="amount-value">{formatCurrency(amount, currency)}</span>
      </div>
    </section>
  )
}

export default PaymentSummary
