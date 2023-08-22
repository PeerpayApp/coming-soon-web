import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const App: React.FC = () => {
  const containerStyle = {
    fontFamily: 'Poppins, sans-serif',


    
  };

  const topNavStyle = {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const, // Add this line to vertically align items
    padding: '10px 20px',
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    background: 'none',
  };

  const logoAndSocialContainer = {
    display: 'flex', // Add this line to make logo and social icons flex items
    alignItems: 'center', // Vertically align logo and social icons
  };

  const logoStyle = {
    maxWidth: '125px',
    height: 'auto',
    marginTop: 15,
    marginLeft: 50, // Move the logo to the left
    marginRight:'75vw'
  };

  const socialIconsStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center', // Vertically align social icons
    marginRight: '20px', // Adjust margin as needed
    marginTop: '15px',
  };

  const iconStyle = {
    margin: '0 8px',
    color:'white',
    width: '24px',
    height: '24px',
  };

  const textStyle = {
    color: 'var(--new-color, #C4FF61)',
    textAlign: 'center' as const ,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.84px',
    marginBottom:25
  };

  const headingStyle = {
    color: '#FFF',
    textAlign: 'center' as const ,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '82px',
    fontWeight: 600,
    lineHeight: '82px',
    letterSpacing: '-2.87px',
    display: 'flex',
    width: '917px',
    height: '164px',
    flexDirection: 'column' as const,
    justifyContent: 'center' ,
    flexShrink: 0,
    marginBottom:55
  };

  const descriptionStyle = {
    color: '#FFF',
    width:'40%',
    textAlign: 'center'as const,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '24px',
    fontWeight: 600,
    lineHeight: '24px',
    letterSpacing: '-0.84px',
    marginBottom:45
  };

  const buttonContainerStyle = {
    width: '200px',
    cursor:'pointer',
    height: '65px',
    borderRadius: '15px',
    background: 'var(--new-color, #C4FF61)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const buttonTextStyle = {
    color: '#000',
    textAlign: 'center'as const,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.7px',
  };

  const bottomImageStyle = {
    marginTop:45,
    maxWidth: '75px',
    height: 'auto',


  };

  return (
    <div style={containerStyle}>

    <div style={topNavStyle}>
      <div style={logoAndSocialContainer}>
        <img src="https://firebasestorage.googleapis.com/v0/b/peerpay-23dff.appspot.com/o/peerpayBanner.png?alt=media&token=7e58e808-8759-4347-aeaf-ccd2d7f77586" alt="Logo" style={logoStyle} />
        <div style={socialIconsStyle}>
        <a href="https://twitter.com/peerpay_app" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={iconStyle}/>
              </a>
              <a href="https://t.me/+ioM2ui_b4-dmMTE0" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} style={iconStyle}/>
              </a>
              <a href="https://github.com/PeerpayApp" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={iconStyle}/>
              </a>
              <a href="https://linkedin.com/in/orin-hazan-b640b0271/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={iconStyle}/>
              </a>
        </div>
      </div>
    </div>

    
      <div style={{ marginTop:'15vh',width:'100vw', alignItems: 'center', background: 'none', display: 'flex', flexDirection: 'column' }}>
        <div style={textStyle}>COMING SOON !!!</div>
        <div style={headingStyle}>Simplify Crypto Transfers, Socially!</div>
        <div style={descriptionStyle}>
          Send, receive, and swap cryptocurrencies and NFTs using your social media handles.
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={buttonContainerStyle} onClick={()=>window.open('https://www.cubik.so/project/269e948e-0c48-41e0-b144-ea031c9dcbd0/hackathon/8e23ade0-0dae-4c4b-83aa-67867749029c', '_blank')}>
            <div style={buttonTextStyle}>Vote on cubik.so</div>
          </div>
          <div style={{ ...buttonContainerStyle, margin: '0 10px' }} onClick={()=>window.open('https://pitch.com/v/peerpay-OPOS-vtpevi', '_blank')}>
            <div style={buttonTextStyle}>Check our pitch</div>
          </div>
          <div style={buttonContainerStyle} onClick={()=>window.open('https://cal.com/orin-hazan-voqqcq/30min','_blank')}>
            <div style={buttonTextStyle}>Book a demo</div>
          </div>
        </div>
        <img src="https://firebasestorage.googleapis.com/v0/b/peerpay-23dff.appspot.com/o/peerpayIcon.png?alt=media&token=ca92d2b6-9fe0-4ba6-b647-631fba0cb683" alt="Bottom Image" style={bottomImageStyle} />
      </div>
      
    </div>
  );
};

export default App;
