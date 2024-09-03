import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props

  const {displayText, tabId} = tabDetails

  const onClickTab = () => {
    updateTabId(tabId)
  }

  const activeTab = isActive ? ' active-tab' : ''

  return (
    <li className="tab-card">
      <button className={`tab ${activeTab}`} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
