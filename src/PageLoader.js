import React, {useState} from 'react'
import Nav from './components/Nav'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Resume from './components/Resume'
import Contact from './components/Contact'
import lists from './projectsList'
import './app.css'

//Logic to decide which page should be rendered
function PageLoader() {

    const [currentPage, setCurrentPage] = useState('AboutMe')

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
          }
          if (currentPage === 'Projects') {
            return <Projects lists={lists}/>;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage (page);

  return (
    <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer/>
    </div>
  )
}

export default PageLoader