import './index.css'

const TabItem = props => {
  const {tabDetails, filterActiveTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onActive = () => {
    filterActiveTab(tabId)
  }

  const className = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        onClick={onActive}
        type="button"
        className={`tab-btn ${className}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
