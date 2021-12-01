import React from 'react'
import Sectiononep from '../components/Sectiononep'
import Hero from '../components/Hero'
import Navbarc from '../components/Navbarc'
import Sectiontwo from '../components/Sectiontwo'
import Sectionthree from '../components/Sectionthree'
import FooterPage from '../components/FooterPage'

const Navbarpage = () => {
    return (
        <div>
            <Navbarc/>
            <Hero></Hero>
            <Sectiononep></Sectiononep>
            <Sectiontwo></Sectiontwo>
            <Sectionthree></Sectionthree>
            <FooterPage></FooterPage>
            {/* <SectionOne></SectionOne> */}
        </div>
    )
}

export default Navbarpage
