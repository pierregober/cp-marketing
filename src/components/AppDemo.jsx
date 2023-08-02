'use client'

import { useId, useRef, useState, useEffect } from 'react'
import Image from 'next/image'

import { AppScreen } from '@/components/AppScreen'

function LocationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 48 48"
      height="24"
      width="24"
    >
      <g transform="matrix(0.9,0,0,0.9,2.3999999999999986,2.4354967946768333)">
        <g id="location-pin--navigation-map-maps-pin-gps-location">
          <path
            id="Subtract"
            fill="#ffffff"
            fill-rule="evenodd"
            d="M4.5 21C4.5 10.23 13.23 1.5 24 1.5S43.5 10.23 43.5 21c0 6.987-3.606 12.865-7.526 17.203-3.932 4.351-8.326 7.316-10.237 8.506a3.262 3.262 0 0 1-3.474 0c-1.91-1.19-6.305-4.155-10.237-8.506C8.106 33.865 4.5 27.987 4.5 21ZM24 29a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
            clip-rule="evenodd"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export function AppDemo() {
  const [windowWidth, setWindowWidth] = useState(900)
  const handleResize = () => {
    setWindowWidth(window?.innerWidth)
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // detect window screen width function
      window?.addEventListener('resize', handleResize)
      return () => {
        window?.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  const images = [
    'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80',
    'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1513003541363-48566f75d05f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1600714577133-78dcaf9a2eb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1560449752-ac541afdd6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1598832517527-7e5b15ee1b2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1096&q=80',
    'https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=696&q=80',
    'https://images.unsplash.com/photo-1465161191540-aac346fcbaff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1594950981383-6eb659d18fbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1919&q=80',
    'https://images.unsplash.com/photo-1597858520171-563a8e8b9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80',
    'https://images.unsplash.com/photo-1497214068716-571605b05ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    'https://images.unsplash.com/photo-1616422285623-13ff0162193c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=731&q=80',
  ]

  return (
    <AppScreen>
      <AppScreen.Body>
        <div style={{ paddingLeft: 17, paddingRight: 17, paddingTop: 5 }}>
          <div className="grid-container">
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              style={{ backgroundColor: '#262626' }}
              placeholder="Search"
            />
            <div
              style={{
                backgroundColor: 'rgba(41, 107, 251, 0.3)',
                borderRadius: '6px',
                display: 'flex',
                marginBottom: '6px',
                marginTop: '6px',
                padding: '5px',
              }}
            >
              <LocationIcon />
              <div
                style={{
                  color: 'white',
                  display: 'flex',
                  fontSize: 12,
                  justifyContent: 'space-around',
                  width: '100%',
                  margin: 'auto',
                }}
              >
                Cambridge, MA {` 10 mi`}
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '3px',
                justifyContent: 'center',
              }}
            >
              {images.map((image, i) => (
                <Image
                  key={i}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    borderRadius: 6,
                    width:
                      windowWidth < 376
                        ? 65
                        : windowWidth < 412
                        ? 75
                        : windowWidth < 447
                        ? 80
                        : 90,
                    height:
                      windowWidth < 376
                        ? 65
                        : windowWidth < 412
                        ? 75
                        : windowWidth < 447
                        ? 80
                        : 90,
                  }}
                  src={image}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}
