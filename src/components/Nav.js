import React from 'react';

export default function Nav({currentPage, handlePageChange}) {

//Nav Component
  return (
    <div className="navigation">

      <nav>
      <header className="header">
        <h1>Joel Cronin</h1>
      </header> 
        <a href="#AboutMe"
        // On click will render appropriate page and change class so that the text can be highlighted
           onClick={() => handlePageChange('AboutMe')}
           className={currentPage === 'AboutMe' ? 'active' : 'nav'}
          >
            About Me
        </a>
        <a href="#Projects"
           onClick={() => handlePageChange('Projects')}
           className={currentPage === 'Projects' ? 'active' : 'nav'}
          >
            Portfolio
        </a>
        {/* <a href="#Contact"
           onClick={() => handlePageChange('Contact')}
           className={currentPage === 'Contact' ? 'active' : 'nav'}
          >
            Contact
        </a> */}
        <a href="#Contact"
           onClick={() => handlePageChange('Resume')}
           className={currentPage === 'Resume' ? 'active' : 'nav'}
          >
            Resume
        </a>
      </nav>
    </div>
  );
}
