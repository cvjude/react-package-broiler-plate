import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

const HomePage = () => {
  return (
    <>
      <main className='home_page'>
        <Helmet>
          <title></title>
          <meta name='description' content='' />
        </Helmet>

        <Banner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
