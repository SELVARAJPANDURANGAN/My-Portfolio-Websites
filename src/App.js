import React from 'react'
import Header from './components/Header/Header.js'
import TopContainer from './components/TopContainer/TopContainer.js'
import SkillContainer from './components/SkillContainer/SkillContainer.js'
import './App.css';
import ProjectContainer from './components/ProjectContainer/ProjectContainer.js'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer.js';
import Contact from './components/Contact/Contact.js';

const App = () => {
  return (
    <div>
      <Header/>
      <TopContainer/>
      <SkillContainer />
      <ProjectContainer/>
      <ExperienceContainer/>
      <Contact/>

      </div>
  )
}

export default App
