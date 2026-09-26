function NotFound({ message }) {
  return (
    <div className="not-found">
      <h1>Page not available</h1>
      <p>{message ?? 'Please use the payment link provided by your institution.'}</p>
    </div>
  )
}

export default NotFound
