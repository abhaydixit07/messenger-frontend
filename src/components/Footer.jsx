import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center footer-bg' color='white'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fas icon='envelope'/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1 rounded-circle' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
          <section className='mb-4'>
          <p>
          ConnZen where direct messaging meets seamless channel communication, fostering connections effortlessly. Streamline your conversations with ConnZen, the ultimate chat app blending direct messages and channels for unparalleled communication.
          </p>
        </section>
        
     </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        ©  {new Date().getFullYear()} ConnZen{" : "}
        <a className='text-white' href='https://github.com/abhaydixit07'>
           Abhay Dixit
        </a>
      </div>
    </MDBFooter>
  );
}