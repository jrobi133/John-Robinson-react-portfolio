import React from 'react';
import './Tools.css';
import ToolsItem from '../ToolsItem'

function Tools() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <ToolsItem
              src='logo/react.png'
              title='Frontend'
              text='HTML, CSS, React'
              label='Adventure'
              path='/services'
            />
            <ToolsItem
              src='logo/vscode.png'
              title='Tools'
              text='Git, VSCode, Robo 3T, Insomnia'
              label='Luxury'
              path='/services'
            />
          {/* </ul>
          <ul className='cards__items'> */}
            <ToolsItem
              src='logo/leaf.png'
              title='Databases'
              text='MongoDB, MySQL'
              label='Mystery'
              path='/services'
            />
            <ToolsItem
              src='logo/js.png'
              title='Backend'
              text='Node,ExpressJS,'
              label='Adventure'
              path='/products'
            />
            <ToolsItem
              src='logo/bluesqure.png'
              title='Servers'
              text='Heroku, AWS'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
          {/* ---------- */}
          <ul className='cards__items'>
            <ToolsItem
              src='logo/whitebord.png'
              title='Roadmap & Strategy'
              text='I focus on your needs before even beginning to look at solutions.'
              label='Adventure'
              path='/services'
            />
            <ToolsItem
              src='logo/app.png'
              title='Visual Design'
              text='I pay attention to detail down to every pixel and will follow your design as close as i can to creat a pixel-perfect result.'
              label='Luxury'
              path='/services'
            />
          {/* </ul>
          <ul className='cards__items'> */}
            <ToolsItem
              src='logo/app-12.png'
              title='User Experience'
              text='Strong preference for simplicity and intuitive UX/UI'
              label='Mystery'
              path='/services'
            />
            <ToolsItem
              src='logo/app-010-1.png'
              title='Mobile Responsive'
              text='Optimize layouts to look good on any device, big or small'
              label='Adventure'
              path='/products'
            />
            <ToolsItem
              src='logo/appwithbug.png'
              title='Updates'
              text='Will patch and update any code Ive written to maintain high-quality work.'
              // label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tools;