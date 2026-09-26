import { useState } from 'react'

function PaymentActions({ mode }) {
  const [showDemoMessage, setShowDemoMessage] = useState(false)

  const handlePayNow = () => {
    if (mode === 'demo') {
      setShowDemoMessage(true)
      return
    }
  }

  return (
    <div className="payment-actions">
      <button type="button" className="btn btn-primary" onClick={handlePayNow}>
        Pay Now
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        disabled
        title="Contact details will be added when this school goes live"
      >
        Contact School
      </button>

      {showDemoMessage && (
        <p className="demo-click-message" role="status">
          This is a demo — no real payment was processed.
        </p>
      )}
    </div>
  )
}

export default PaymentActions
