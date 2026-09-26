import { useState } from 'react'

const PAYMENT_METHODS = [
  { id: 'upi', label: 'UPI' },
  { id: 'qr', label: 'QR Code' },
  { id: 'other', label: 'Other Payment Options' },
]

function PaymentMethodSection() {
  const [selectedMethod, setSelectedMethod] = useState('upi')

  return (
    <section className="payment-method-section" aria-label="Choose payment method">
      <h2 className="section-heading">Choose Payment Method</h2>

      <div className="method-tabs" role="tablist">
        {PAYMENT_METHODS.map((method) => (
          <button
            key={method.id}
            type="button"
            role="tab"
            aria-selected={selectedMethod === method.id}
            className={`method-tab ${selectedMethod === method.id ? 'method-tab-active' : ''}`}
            onClick={() => setSelectedMethod(method.id)}
          >
            {method.label}
          </button>
        ))}
      </div>

      <div className="method-panel">
        {selectedMethod === 'upi' && (
          <div className="upi-placeholder">
            <label className="upi-label" htmlFor="upi-id-input">
              UPI ID
            </label>
            <input
              id="upi-id-input"
              type="text"
              className="upi-input"
              placeholder="example@upi"
              disabled
            />
            <p className="method-hint">Demo only — UPI collection is not active.</p>
          </div>
        )}

        {selectedMethod === 'qr' && (
          <div className="qr-placeholder">
            <div className="qr-box" aria-hidden="true">
              <span>QR</span>
            </div>
            <p className="method-hint">A scannable payment QR will appear here.</p>
          </div>
        )}

        {selectedMethod === 'other' && (
          <div className="other-placeholder">
            <p className="method-hint">
              Card, net banking, and wallet options will be available here in a future release.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PaymentMethodSection
