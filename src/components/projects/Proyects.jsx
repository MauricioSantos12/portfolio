import React from 'react'
import './projects.scss'
import First from '../../images/Projects/First.png';
import Second from '../../images/Projects/Second.png';
import Third from '../../images/Projects/Third.png';
import Fourth from '../../images/Projects/Fourth.png';
import Sixth from '../../images/Projects/Sixth.png';
import Seventh from '../../images/Projects/Seventh.png';
import { ChevronRight } from 'feather-icons-react';


const Proyects = () => {
  return (
    <section className='container-projects'>
      <div className='container--space'>
        <section className="proyects" id="projects">
          <div className='container-project'>
            <img src={First} alt="project example" className='image--poject'/>
            <div className='container--data--project'>
              <h1 className='title'>Colombian API</h1>
              <button className='button'><a href='https://col-info.web.app/home' target='_blank'>Visit Website <ChevronRight className='iconRigth' /> </a></button>
            </div>
          </div>
          <div className='container-project'>
            <img src={Second} alt="project example" className='image--poject' />
            <div className='container--data--project'>
              <h1 className='title'>To Do App</h1>
              <button className='button'><a href='https://to-do-app-ddb9c.web.app/' target='_blank'>Visit Website <ChevronRight className='iconRigth' /></a></button>
            </div>
          </div>
          <div className='container-project'>
            <img src={Third} alt="project example" className='image--poject' />
            <div className='container--data--project'>
              <h1 className='title'>Rick and Morty App</h1>
              <button className='button'><a href='https://rick-and-morty-ng-47082.web.app/' target='_blank'>Visit Website <ChevronRight className='iconRigth' /></a></button>
            </div>
          </div>
          <div className='container-project'>
            <img src={Sixth} alt="project example" className='image--poject'/>
            <div className='container--data--project'>
              <h1 className='title'>Recipe App</h1>
              <button className='button'><a href='https://cerulean-maamoul-37195e.netlify.app/' target='_blank'>Visit Website <ChevronRight className='iconRigth' /></a></button>
            </div>
          </div>
          <div className='container-project'>
            <img src={Seventh} alt="project example" className='image--poject' />
            <div className='container--data--project'>
              <h1 className='title'>Login App</h1>
              <button className='button'><a href='https://superlative-lolly-e8a125.netlify.app/' target='_blank'>Visit Website <ChevronRight className='iconRigth' /></a></button>
            </div>
          </div>
          <div className='container-project'>
            <img src={Fourth} alt="project example" className='image--poject' />
            <div className='container--data--project'>
              <h1 className='title'>Tic Tac App</h1>
              <button className='button'><a href='https://elaborate-pavlova-69c6fe.netlify.app/' target='_blank'>Visit Website <ChevronRight className='iconRigth' /></a></button>
            </div>
          </div>
        </section>
      </div>
    </section>

  )
}

export default Proyects