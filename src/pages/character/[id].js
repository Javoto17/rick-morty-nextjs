import React from 'react'
import axios from 'axios'

import { useRouter } from 'next/router'

const Character = ({ character }) => {
  // const router = useRouter()
  const router = useRouter()
  console.log(character)
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }
}

export async function getStaticPaths () {
  const res = await axios.get('https://rickandmortyapi.com/api/character/')
  const characters = res.data.results
  const paths = characters.map((character) => ({
    params: { id: character.id.toString() }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${params.id}`
  )
  const character = res.data

  // Pass post data to the page via props
  return { props: { character } }
}

export default Character
