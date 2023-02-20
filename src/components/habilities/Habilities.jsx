import React from 'react'
import html from '../../assets/images/html.webp';
import css from '../../assets/images/css.webp';
import git from '../../assets/images/Git.webp';
import reactIcon from '../../assets/images/react.webp';
import reactNative from '../../assets/images/react-native.webp';
import vue from '../../assets/images/vue.webp';
import javascript from '../../assets/images/js.webp';
import bootstrap from '../../assets/images/bootstrap.webp'
import './habilities.scss';

const Habilities = () => {
  return (
    <section class="skills" id="skills">
      <div className='container--space'>
        <h1 className='titleSkilss'>Hi, I’m Mauricio. Nice to meet you.</h1>
        <p className='descSkilss'>Electronics engineer with experience in web development, especially the React js and Vue js of 2 years and notions of mobile application development with React native. 
        In charge of creating and maintaining the user interface of a website or application in both web and responsive design.  Web 
        view and responsive design. This includes the programming of visual elements  visual elements such as buttons, forms, menus 
        and general design of the page. Proactive,  resilient, dedicated and assertive communication with developers and designers.</p>
        <div class="container--skills">
          <img
            src={html}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={css}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={javascript}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={bootstrap}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={reactNative}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={git}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />

          <img
            src={vue}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={reactIcon}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>
      </div>
    </section>
  )
}

export default Habilities