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
        
          <section className='mb-4' style={{padding:'20px'}}>
          <h1>Get Started!</h1>
          <p>
          ConnZen where direct messaging meets seamless channel communication, fostering connections effortlessly. Streamline your conversations with ConnZen, the ultimate chat app blending direct messages and channels for unparalleled communication.
          </p>
        </section>
        <section className=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='6'>
              <div className='ratio ratio-16x9'>
              {/* <iframe
                    className='shadow-1-strong rounded'
                    src='https://www.youtube.com/embed/tBCZebLl33M'
                    title='YouTube video'
                    allowFullScreen
                    data-gtm-yt-inspected-2340190_699='true'
                    id='388567449'
                ></iframe> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/mAg8UyDt_sw?si=wsHI7UBu7yQr8rgH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </section>

        <section className='mb-4' style={{paddingTop:'20px'}}>
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