// Demo data source, keyed by slug (used by /demo/:slug).
// A future /pay/:token route can be backed by a real API without
// changing any component — only getPaymentDataByToken needs to change.
const demoPayments = {
  'little-bridge': {
    businessName: 'Little Bridge School',
    pageTitle: 'Fee Payment',
    parentName: 'Mr. Sampath',
    studentName: 'Shreeyansh K',
    amount: 50000,
    currency: 'INR',
    dueDate: '2026-11-01',
    paymentStatus: 'pending',
    mode: 'demo',
  },
}

export function getDemoPaymentData(slug) {
  return demoPayments[slug] ?? null
}

// Placeholder for the future secure-token payment flow.
// Not implemented yet — intentionally returns null.
// eslint-disable-next-line no-unused-vars
export function getPaymentDataByToken(token) {
  return null
}
