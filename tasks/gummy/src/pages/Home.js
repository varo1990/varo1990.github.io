import React from 'react';
import Footer from "./Footer";
import BlockOne from "../components/BlockOne";
import BlockTwo from "../components/BlockTwo";
import BlockThree from "../components/BlockThree";
import BlockFour from "../components/BlockFour";
import BlockFive from "../components/BlockFive";
import BlockSix from "../components/BlockSix";
import BlockSeven from "../components/BlockSeven";
import BlockEight from "../components/BlockEight";

function Home(props) {
  return (
    <div className='home'>
      <BlockOne/>
      <BlockTwo/>
      <BlockThree/>

      <BlockFour/>
      <BlockFive/>
      <BlockSix/>
      <BlockSeven/>
      <BlockEight/>

      {/*<Footer/>*/}

    </div>
  );
}

export default Home;