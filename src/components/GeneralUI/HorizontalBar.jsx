import '../../Spur.css'

export const HBar = () => {
  return (
    <header className='dash-toolbar'>
      <a href='#!' className='menu-toggle'>
        <i className='fas fa-bars' />
      </a>
      <a href='#!' className='searchbox-toggle'>
        <i className='fas fa-search' />
      </a>
      <form className='searchbox' action='#!'>
        <a href='#!' className='searchbox-toggle'>
          {' '}
          <i className='fas fa-arrow-left' />{' '}
        </a>
        <button type='submit' className='searchbox-submit'>
          {' '}
          <i className='fas fa-search' />{' '}
        </button>
        <input
          type='text'
          className='searchbox-input'
          placeholder='type to search'
        />
      </form>
      <div className='tools'>
        <a
          href='#'
          target='_blank'
          className='tools-item' rel='noreferrer'
        >
          <i className='fab fa-github' />
        </a>
        <a href='#!' className='tools-item'>
          <i className='fas fa-bell' />
          <i className='tools-item-count'>4</i>
        </a>
        <div className='dropdown tools-item'>
          <a
            href='#'
            className=''
            id='dropdownMenu1'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <i className='fas fa-user' />
          </a>
          <div
            className='dropdown-menu dropdown-menu-right'
            aria-labelledby='dropdownMenu1'
          >
            <a className='dropdown-item' href='#!'>
              Profile
            </a>
            <a className='dropdown-item' href='#'>
              Logout
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
export default HBar
