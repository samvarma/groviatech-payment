function BusinessHeader({ businessName, pageTitle }) {
  return (
    <header className="business-header">
      <h1 className="business-name">{businessName}</h1>
      <p className="page-title">{pageTitle}</p>
    </header>
  )
}

export default BusinessHeader
