import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const ParallaxScrollingPage = () => {
  return (
    <ParallaxProvider>
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        {/* First Section */}
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={{ height: '100vh', backgroundColor: '#3498db', textAlign: 'center', paddingTop: '50vh' }}>
            <h1>Parallax Section 1</h1>
          </div>
        </Parallax>

        {/* Second Section */}
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={{ height: '100vh', backgroundColor: '#2ecc71', textAlign: 'center', paddingTop: '50vh' }}>
            <h1>Parallax Section 2</h1>
          </div>
        </Parallax>

        {/* Third Section */}
        <Parallax y={[-20, 20]} tagOuter="figure">
          <div style={{ height: '100vh', backgroundColor: '#e74c3c', textAlign: 'center', paddingTop: '50vh' }}>
            <h1>Parallax Section 3</h1>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default ParallaxScrollingPage;
