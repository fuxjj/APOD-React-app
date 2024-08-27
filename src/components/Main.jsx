import React from 'react'

export default function Main(props) {
    const { data } = props
  return (
    <main className='imgContainer'>
        {data.media_type === 'video' ? (
                <embed
                    src={data.url}
                    controls
                    alt={data.title || 'background video'}
                    className='bgImage'
                />
            ) : (
                <img
                    src={data.hdurl}
                    alt={data.title || 'background image'}
                    className='bgImage'
                />
            )}
    </main>
  )
}
