import React from 'react';
import './certificates.css';

const certificateList = [
  {
    name: 'Dynamic',
    image: '/certificates/dynamic.jpg',
    url: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=YWQESHCUYP'
  },
  {
    name: 'Responsive',
    image: '/certificates/responsive.jpg',
    url: 'https://certificates.ccbp.in/intensive/responsive-website?id=QETFVGYJLY'
  },
  
  {
    name: 'SQL',
    image: '/certificates/databases.jpg',
    url:'https://certificates.ccbp.in/intensive/introduction-to-databases?id=MWUGOEYJME'
  },

  {
    name: 'FlexBox',
    image: '/certificates/flexbox.jpg',
    url: 'https://certificates.ccbp.in/intensive/flexbox?id=SYPVAJWJPP'
  },
  
  {
    name: 'Python',
    image: '/certificates/python.jpg',
    url: 'https://certificates.ccbp.in/intensive/programming-foundations?id=LOVVOHQJJM'
  },
  {
    name: 'Static',
    image: '/certificates/static.jpg',
    url: 'https://certificates.ccbp.in/intensive/static-website?id=MTKWAGNZKV'
  },
  
];

const Certificates = () => {
  return (
    <div id='SectionCertificates' className='certificates-div'>
        <h1 className='certificates-heading heading'>Certifications</h1> 
        <p className='cert-info'>These certifications reflect my continuous learning and growth in web development. From building static and dynamic websites to mastering JavaScript, Node.js, react.js and databases.</p>
        <div className='certificates-grid'>
            {certificateList.map((cert,index)=> (
                <div className='certificate-item' key={index}>
                    <a href={cert.url}><img src={cert.image} alt={cert.name}   className='certificate'/></a>
                    <p  className='cert-name'>{cert.name}</p>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Certificates;
