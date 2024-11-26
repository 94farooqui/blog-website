import React from 'react'
import Banner from '../components/Banner'
import FeaturedBlogs from '../components/FeaturedBlogs'

const Home = () => {
  return (
    <div className='w-screen mx-auto'>
      <Banner/>
      <FeaturedBlogs/>
    </div>
  )
}

export default Home