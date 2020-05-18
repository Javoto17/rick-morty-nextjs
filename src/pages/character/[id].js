import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import { useRouter } from 'next/router'

import MainLayout from '../../layouts/MainLayout'

const Character = ({ character }) => {
  // const router = useRouter()
  const router = useRouter()
  console.log(character)
  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      {character.toString()}
    </MainLayout>
  )
}

export async function getStaticPaths () {
  const res = await axios.get('https://rickandmortyapi.com/api/character/')
  const characters = res.data.results
  const paths = characters.map((character) => ({
    params: { id: character.id.toString() }
  }))

  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps ({ params }) {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${params.id}`
  )
  const character = res.data

  return { props: { character } }
}

Character.propTypes = {
  character: PropTypes.shape({
  })
}

export default Character
