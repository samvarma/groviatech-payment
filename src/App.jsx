import PaymentPage from './components/PaymentPage'
import NotFound from './components/NotFound'
import { getDemoPaymentData, getPaymentDataByToken } from './data/paymentData'

// Lightweight, dependency-free routing.
// Only two path shapes exist today (/demo/:slug and the future
// /pay/:token), so a full router is unnecessary. If the route surface
// grows beyond this, that is the point to introduce React Router.
function resolveRoute(pathname) {
  const demoMatch = pathname.match(/^\/demo\/([a-zA-Z0-9-]+)\/?$/)
  if (demoMatch) {
    return { type: 'demo', param: demoMatch[1] }
  }

  const payMatch = pathname.match(/^\/pay\/([a-zA-Z0-9_-]+)\/?$/)
  if (payMatch) {
    return { type: 'pay', param: payMatch[1] }
  }

  return { type: 'unknown' }
}

function App() {
  const route = resolveRoute(window.location.pathname)

  if (route.type === 'demo') {
    const data = getDemoPaymentData(route.param)
    if (data) {
      return <PaymentPage data={data} />
    }
    return <NotFound message={`No demo found for "${route.param}".`} />
  }

  if (route.type === 'pay') {
    const data = getPaymentDataByToken(route.param)
    if (data) {
      return <PaymentPage data={data} />
    }
    return <NotFound message="Secure payment links are coming soon." />
  }

  return <NotFound />
}

export default App
