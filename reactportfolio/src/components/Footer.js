import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-left'>
      <div className='text-center p-3'> 
        <a className='text-light' href='https://mdbootstrap.com/'>
          Thank you for viewing my portfolio!
        </a>
      </div>
    </MDBFooter>
  );
}