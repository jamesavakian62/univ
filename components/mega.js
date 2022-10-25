// import '../styles/global.css';

import React, { useEffect, useRef } from 'react';

import Image from 'next/image';
// import Layout from '../components/webSite/layout';
import Video from '../components/video';
import Link from 'next/link'
import { useRouter } from 'next/router';



// import Link from 'next/link';

function Mega() {
  return (
    <>
      <div>
        {/* Created By CodingNepal - www.codingnepalweb.com */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MyOneUniverse</title>

        <nav>
          <div className="wrapper">
            <div className="logo">
              <a href="http://www.myoneuniverse.com">My One Universe</a>
            </div>
            <input type="radio" name="slider" id="menu-btn" />
            <input type="radio" name="slider" id="close-btn" />
            <ul className="nav-links">
              <label htmlFor="close-btn" className="btn close-btn">
                <i className="fas fa-times" />
              </label>
              <li>
                <li>
                  <a href="http://#">Home</a>
                </li>
              </li>
              <li>
                <a href="http://#" className="desktop-item">
                  Technical
                </a>
                <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  Technical
                </label>
                <ul className="drop-menu">
                  <li>
                    <a href="http://#">Network Origin</a>
                  </li>
                  <li>
                    <a href="http://#">ShopperLady</a>
                  </li>
                  <li>
                    <a href="http://#">Software</a>{' '}
                    {/*  ReactJS, NextJS, and Firebase */}
                  </li>
                  <li>
                    <a href="http://#">Apps</a>
                  </li>
                  <li>
                    <a href="http://#">Preferences / Security</a>
                  </li>
                  <li>
                    <a href="http://#">Optical Automation, LLC</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://#" className="desktop-item">
                  Dashboard
                </a>
                <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  Dashboard
                </label>
                <ul className="drop-menu">
                  <li>
                  
                    <Link href="../components/nav/Americana">
                    <a>
                    Americana
                    </a>
                  </Link>
                  </li>
                  <li>
                    <a href="http://#">ShopperLady</a>
                  </li>
                  <li>
                    <a href="http://#">MyPersonalOrganizer</a>
                  </li>
                  <li>
                    <a href="http://#">MyBusinessOrganizer</a>
                  </li>
                  <li>
                    <a href="http://#">TechnologyHouse</a>
                  </li>
                  <li>
                    <a href="http://#">Optical Automation, LLC</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="http://#" className="desktop-item">
                  Access
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Access
                </label>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com">Americana </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/flag.png"
                        alt="Americana Network"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#"> Law And Government </a>
                        </li>
                        <li>
                          <a href="http://#">American Life</a>
                        </li>
                        <li>
                          <a href="http://#">Major Cities</a>
                        </li>
                        <li>
                          <a href="http://#">Business</a>
                        </li>
                        <li>
                          <a href="http://#">Parks And Museumss</a>
                        </li>
                        <li>
                          <a href="http://#">Comon Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Education and Medicine</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com"> ShopperLady </a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/ShopperLady.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">
                            Food, DrugStore, Office, Hardware, Garden
                          </a>
                        </li>
                        <li>
                          <a href="http://#">ToDos, Tasks, Reminders, Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Jobs, Notes, and Lists</a>
                        </li>
                        <li>
                          <a href="http://#">Client Selectable Info</a>
                        </li>
                        <li>
                          <a href="http://#">Occupations, DDD, and ggg</a>
                        </li>
                        <li>
                          <a href="http://#">Goals</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com">
                          {' '}
                          MyPersonalOrganizer{' '}
                        </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/personal.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />

                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Photo Album</a>
                        </li>
                        <li>
                          <a href="http://#">Monentos - Sayings</a>
                        </li>
                        <li>
                          <a href="http://#">Fav YouTube</a>
                        </li>
                        <li>
                          <a href="http://#">Hobbies</a>
                        </li>
                        <li>
                          <a href="http://#">Cars, Bikes, Motos</a>
                        </li>
                        <li>
                          <a href="http://#">Reminders / Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Doctors, Dentists, more</a>
                        </li>
                        <li>
                          <a href="http://#">Real Estate</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com">
                          {' '}
                          MyBusinessOrganizer{' '}
                        </a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/businessinfo.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Inventory</a>
                        </li>
                        <li>
                          <a href="http://#">eCommerce</a>
                        </li>
                        <li>
                          <a href="http://#">Materials/Parts</a>
                        </li>
                        <li>
                          <a href="http://#">Professionals Dir</a>
                        </li>
                        <li>
                          <a href="http://#">Tax Organizer</a>
                        </li>
                        <li>
                          <a href="http://#">Suppliers</a>
                        </li>
                        <li>
                          <a href="http://#">Clients n Advertising</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com">TechnologyHouse </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/tech.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Dollar Dimestore, 1, 2, 3</a>
                        </li>
                        <li>
                          <a href="http://#">Technology And Times</a>
                        </li>
                        <li>
                          <a href="http://#">The Branded Series</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">How To Build A Website</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
             

              <li>
                <a href="http://#" className="desktop-item">
                  Network
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Network
                </label>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                    <a>Earth Station One</a>
                      <header>
                        {' '}
                        <a href="http://www.Americana.com">Americana </a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/flag1.png"
                        alt="Americana Network"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#"> Parts of Government </a>
                        </li>
                        <li>
                          <a href="http://#">Life In American</a>
                        </li>
                        <li>
                          <a href="http://#">City And States</a>
                        </li>
                        <li>
                          <a href="http://#">Money</a>
                        </li>
                        <li>
                          <a href="http://#">Fun Facts</a>
                        </li>
                        <li>
                          <a href="http://#">Common Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Education and Medicine</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com"> ShopperLady</a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/ShopperLady2.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">
                            Food, DrugStore, Office, Hardware, Garden
                          </a>
                        </li>
                        <li>
                          <a href="http://#">ToDos, Tasks, Reminders, Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Jobs, Notes, and Lists</a>
                        </li>
                        <li>
                          <a href="http://#">Client Selectable Info</a>
                        </li>
                        <li>
                          <a href="http://#">Occupations, DDD, and ggg</a>
                        </li>
                        <li>
                          <a href="http://#">Goals</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.MyPersonalOrganizer.com">
                          {' '}
                          MyPersonalOrganizer{' '}
                        </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/personal.png"
                        alt="MyPersonalOrganizer"
                        width={200}
                        height={200}
                      />

                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Photo Album</a>
                        </li>
                        <li>
                          <a href="http://#">Monentos - Sayings</a>
                        </li>
                        <li>
                          <a href="http://#">Fav YouTube</a>
                        </li>
                        <li>
                          <a href="http://#">Hobbies</a>
                        </li>
                        <li>
                          <a href="http://#">Cars, Bikes, Motos</a>
                        </li>
                        <li>
                          <a href="http://#">Reminders / Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Doctors, Dentists, more</a>
                        </li>
                        <li>
                          <a href="http://#">Real Estate</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        <a href="http://http://www.MyBusinessOrganizer.com">
                          MyBusinessOrganizer
                        </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/businessinfo.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Inventory</a>
                        </li>
                        <li>
                          <a href="http://#">eCommerce</a>
                        </li>
                        <li>
                          <a href="http://#">Materials/Parts</a>
                        </li>
                        <li>
                          <a href="http://#">Professionals Dir</a>
                        </li>
                        <li>
                          <a href="http://#">Tax Organizer</a>
                        </li>
                        <li>
                          <a href="http://#">Suppliers</a>
                        </li>
                        <li>
                          <a href="http://#">Clients n Advertising</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com"> TechnologyHouse </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/tech.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Dollar Dimestore, 1, 2, 3</a>
                        </li>
                        <li>
                          <a href="http://#">Technology And Times</a>
                        </li>
                        <li>
                          <a href="http://#">The Branded Series</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">How To Build A Website</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
               <li>
                <a href="http://#" className="desktop-item">
                  Network II
                </a>
                <input type="checkbox" id="showMega" />
                <label htmlFor="showMega" className="mobile-item">
                  Network
                </label>
                <div className="mega-box">
                  <div className="content">
                    <div className="row">
                    <a>Earth Station One</a>
                      <header>
                        {' '}
                        <a href="http://www.Americana.com">Americana </a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/flag1.png"
                        alt="Americana Network"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#"> Parts of Government </a>
                        </li>
                        <li>
                          <a href="http://#">Life In American</a>
                        </li>
                        <li>
                          <a href="http://#">City And States</a>
                        </li>
                        <li>
                          <a href="http://#">Money</a>
                        </li>
                        <li>
                          <a href="http://#">Fun Facts</a>
                        </li>
                        <li>
                          <a href="http://#">Common Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Education and Medicine</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com"> ShopperLady</a>{' '}
                      </header>
                      <Image
                        // loader={myLoader}
                        src="/ShopperLady2.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">
                            Food, DrugStore, Office, Hardware, Garden
                          </a>
                        </li>
                        <li>
                          <a href="http://#">ToDos, Tasks, Reminders, Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Jobs, Notes, and Lists</a>
                        </li>
                        <li>
                          <a href="http://#">Client Selectable Info</a>
                        </li>
                        <li>
                          <a href="http://#">Occupations, DDD, and ggg</a>
                        </li>
                        <li>
                          <a href="http://#">Goals</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.MyPersonalOrganizer.com">
                          {' '}
                          MyPersonalOrganizer{' '}
                        </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/personal.png"
                        alt="MyPersonalOrganizer"
                        width={200}
                        height={200}
                      />

                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Photo Album</a>
                        </li>
                        <li>
                          <a href="http://#">Monentos - Sayings</a>
                        </li>
                        <li>
                          <a href="http://#">Fav YouTube</a>
                        </li>
                        <li>
                          <a href="http://#">Hobbies</a>
                        </li>
                        <li>
                          <a href="http://#">Cars, Bikes, Motos</a>
                        </li>
                        <li>
                          <a href="http://#">Reminders / Goals</a>
                        </li>
                        <li>
                          <a href="http://#">Doctors, Dentists, more</a>
                        </li>
                        <li>
                          <a href="http://#">Real Estate</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        <a href="http://http://www.MyBusinessOrganizer.com">
                          MyBusinessOrganizer
                        </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/businessinfo.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Introduction</a>
                        </li>
                        <li>
                          <a href="http://#">Inventory</a>
                        </li>
                        <li>
                          <a href="http://#">eCommerce</a>
                        </li>
                        <li>
                          <a href="http://#">Materials/Parts</a>
                        </li>
                        <li>
                          <a href="http://#">Professionals Dir</a>
                        </li>
                        <li>
                          <a href="http://#">Tax Organizer</a>
                        </li>
                        <li>
                          <a href="http://#">Suppliers</a>
                        </li>
                        <li>
                          <a href="http://#">Clients n Advertising</a>
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <header>
                        {' '}
                        <a href="http://www.msn.com"> TechnologyHouse </a>{' '}
                      </header>

                      <Image
                        // loader={myLoader}
                        src="/tech.png"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                      />
                      <ul className="mega-links">
                        <li>
                          <a href="http://#">Dollar Dimestore, 1, 2, 3</a>
                        </li>
                        <li>
                          <a href="http://#">Technology And Times</a>
                        </li>
                        <li>
                          <a href="http://#">The Branded Series</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">nnnnnnnnnnnnnn</a>
                        </li>
                        <li>
                          <a href="http://#">mmmmmmmmmmmmm</a>
                        </li>
                        <li>
                          <a href="http://#">How To Build A Website</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <a href="http://#" className="desktop-item">
                Network III
              </a>
              <input type="checkbox" id="showMega" />
              <label htmlFor="showMega" className="mobile-item">
                Network
              </label>
              <div className="mega-box">
                <div className="content">
                  <div className="row">
                  <a>Earth Station One</a>
                    <header>
                      {' '}
                      <a href="http://www.Americana.com">Americana </a>{' '}
                    </header>
                    <Image
                      // loader={myLoader}
                      src="/flag1.png"
                      alt="Americana Network"
                      width={200}
                      height={200}
                    />
                    <ul className="mega-links">
                      <li>
                        <a href="http://#">Introduction</a>
                      </li>
                      <li>
                        <a href="http://#"> Parts of Government </a>
                      </li>
                      <li>
                        <a href="http://#">Life In American</a>
                      </li>
                      <li>
                        <a href="http://#">City And States</a>
                      </li>
                      <li>
                        <a href="http://#">Money</a>
                      </li>
                      <li>
                        <a href="http://#">Fun Facts</a>
                      </li>
                      <li>
                        <a href="http://#">Common Goals</a>
                      </li>
                      <li>
                        <a href="http://#">Education and Medicine</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>
                      {' '}
                      <a href="http://www.msn.com"> ShopperLady</a>{' '}
                    </header>
                    <Image
                      // loader={myLoader}
                      src="/ShopperLady2.png"
                      alt="Picture of the author"
                      width={200}
                      height={200}
                    />
                    <ul className="mega-links">
                      <li>
                        <a href="http://#">Introduction</a>
                      </li>
                      <li>
                        <a href="http://#">
                          Food, DrugStore, Office, Hardware, Garden
                        </a>
                      </li>
                      <li>
                        <a href="http://#">ToDos, Tasks, Reminders, Goals</a>
                      </li>
                      <li>
                        <a href="http://#">Jobs, Notes, and Lists</a>
                      </li>
                      <li>
                        <a href="http://#">Client Selectable Info</a>
                      </li>
                      <li>
                        <a href="http://#">Occupations, DDD, and ggg</a>
                      </li>
                      <li>
                        <a href="http://#">Goals</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>
                      {' '}
                      <a href="http://www.MyPersonalOrganizer.com">
                        {' '}
                        MyPersonalOrganizer{' '}
                      </a>{' '}
                    </header>

                    <Image
                      // loader={myLoader}
                      src="/personal.png"
                      alt="MyPersonalOrganizer"
                      width={200}
                      height={200}
                    />

                    <ul className="mega-links">
                      <li>
                        <a href="http://#">Introduction</a>
                      </li>
                      <li>
                        <a href="http://#">Photo Album</a>
                      </li>
                      <li>
                        <a href="http://#">Monentos - Sayings</a>
                      </li>
                      <li>
                        <a href="http://#">Fav YouTube</a>
                      </li>
                      <li>
                        <a href="http://#">Hobbies</a>
                      </li>
                      <li>
                        <a href="http://#">Cars, Bikes, Motos</a>
                      </li>
                      <li>
                        <a href="http://#">Reminders / Goals</a>
                      </li>
                      <li>
                        <a href="http://#">Doctors, Dentists, more</a>
                      </li>
                      <li>
                        <a href="http://#">Real Estate</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>
                      <a href="http://http://www.MyBusinessOrganizer.com">
                        MyBusinessOrganizer
                      </a>{' '}
                    </header>

                    <Image
                      // loader={myLoader}
                      src="/businessinfo.png"
                      alt="Picture of the author"
                      width={200}
                      height={200}
                    />
                    <ul className="mega-links">
                      <li>
                        <a href="http://#">Introduction</a>
                      </li>
                      <li>
                        <a href="http://#">Inventory</a>
                      </li>
                      <li>
                        <a href="http://#">eCommerce</a>
                      </li>
                      <li>
                        <a href="http://#">Materials/Parts</a>
                      </li>
                      <li>
                        <a href="http://#">Professionals Dir</a>
                      </li>
                      <li>
                        <a href="http://#">Tax Organizer</a>
                      </li>
                      <li>
                        <a href="http://#">Suppliers</a>
                      </li>
                      <li>
                        <a href="http://#">Clients n Advertising</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <header>
                      {' '}
                      <a href="http://www.msn.com"> TechnologyHouse </a>{' '}
                    </header>

                    <Image
                      // loader={myLoader}
                      src="/tech.png"
                      alt="Picture of the author"
                      width={200}
                      height={200}
                    />
                    <ul className="mega-links">
                      <li>
                        <a href="http://#">Dollar Dimestore, 1, 2, 3</a>
                      </li>
                      <li>
                        <a href="http://#">Technology And Times</a>
                      </li>
                      <li>
                        <a href="http://#">The Branded Series</a>
                      </li>
                      <li>
                        <a href="http://#">nnnnnnnnnnnnnn</a>
                      </li>
                      <li>
                        <a href="http://#">mmmmmmmmmmmmm</a>
                      </li>
                      <li>
                        <a href="http://#">nnnnnnnnnnnnnn</a>
                      </li>
                      <li>
                        <a href="http://#">mmmmmmmmmmmmm</a>
                      </li>
                      <li>
                        <a href="http://#">How To Build A Website</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
         
            
              <li>
                <a href="http://#" className="desktop-item">
                  About Us
                </a>
                <input type="checkbox" id="showDrop" />
                <label htmlFor="showDrop" className="mobile-item">
                  About Us
                </label>
                <ul className="drop-menu">
                  <li>
                    <a href="http://#">Network Origin</a>
                  </li>
                  <li>
                    <a href="http://#">ShopperLady</a>
                  </li>
                  <li>
                    <a href="http://#">Websites</a>
                  </li>
                  <li>
                    <a href="http://#">Mbile Apps</a>
                  </li>
                  <li>
                    <a href="http://#">Technical Support</a>
                  </li>
                  <li>
                    <a href="http://#">The Author</a>
                  </li>
                </ul>
              </li>

              <div className="navimage">
                <Image
                  // loader={myLoader}
                  src="/about.jpg"
                  alt="My1.im Alert Information Website"
                  width={38}
                  height={38}
                />
              </div>
            </ul>
            <label htmlFor="menu-btn" className="btn menu-btn">
              <i className="fas fa-bars" />
            </label>
          </div>
        </nav>
        <div>
          {/* <video autoPlay loop>
            <source
              // className="video"
              // src="../public/assets/myoneuniversecom.mp4"
              src="/myoneuniversecom.mp4"
              height={'450'}
              width={'450'}
              type="video/mp4"
              alt="movie"
            />
          </video> */}

        </div>
      </div>
    </>
  );
}
export default Mega;
