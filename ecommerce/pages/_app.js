import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import '../styles/globals.scss';
import { StateContext } from '../context/StateContext';

function MyApp ({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component { ...pageProps } />
      </Layout>
    </StateContext>
  );
};

export default MyApp;
