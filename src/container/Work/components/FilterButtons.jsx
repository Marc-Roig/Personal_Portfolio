import './../Work.scss'

/*
    Buttons to filter work items
    @param {string} activeFilter
    @param {function} handleWorkFilter
*/
export const FilterButtons = ({activeFilter, handleWorkFilter}) => {
    return (
      <div className='app__work-filter'>
        {['Backend', 'Web App', 'Embedded', 'Python', 'All'].map((filter, index) => 
          <div
            key={index}
            onClick={() => handleWorkFilter(filter)}
            className={`app__work-filter-item app__flex ${activeFilter === filter ? 'item-active' : ''}`}
          >
            {filter}
          </div>
          )}
      </div>
    )
  }