import React from 'react'

import NetworkStatus from '../../src/Stateful'
// import NetworkStatusStateless from '../../src/Stateless'

const App = () => (
  <div className='flex flex-column min-vh-100 helvetica'>
    <header className='bg-near-white fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l'>
      <nav className='dib v-mid f6 fw6 ttu tracked'>
        <a className='link dim black-90 dib mr3' href='#' title='Home'>Home</a>
        <a className='link dim black-90 dib mr3' href='#' title='About'>About</a>
        <a className='link dim black-90 dib mr3' href='#' title='Store'>Store</a>
        <a className='link dim black-90 dib' href='#' title='Contact'>Contact</a>
      </nav>
      <div className='dib fr v-mid'>
        <NetworkStatus />
        {/* <NetworkStatusStateless networkId={1} /> */}
      </div>
    </header>
    <main className='flex-auto mt5'>
      <article className='pa3 pa5-ns center measure measure-wide-ns'>
        <h1 className='f3 f2-m f1-l'>Title</h1>
        <p className='lh-copy'>
          Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation.
        </p>
        <p className='lh-copy'>
          Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off - then, I account it high time to get to sea as soon as I can.
        </p>
        <p className='lh-copy'>
           This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.
        </p>
      </article>
    </main>
    <footer className='black-90 bg-near-white ph3 pv3 pv4-ns ph4-m ph5-l'>
      <p className='f6'>
        <span className='dib mr4 mr5-ns'>©2048 Your Company LLC, Inc.</span>
      </p>
    </footer>
  </div>
)

export default App
