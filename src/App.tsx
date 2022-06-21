import { gql, useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import { client } from './lib/apollo'
import './styles/global.css'

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id,
      title,
      teacher{
        name
      }
    }
  }
`

interface ILesson {
  id: string;
  title: string;
}

function App() {
  // usaremos o apolo para evitar esse tipo de código estranho
  // useEffect(()=>{
  //   fetch('https://api-sa-east-1.graphcms.com/v2/cl4nl559i0a4401xo5le0hvam/master', {
  //     method: 'POST',
  //     body: `query {}`
  //   })
  // },[])

  // useEffect(()=>{
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then( response => {
  //     console.log(response.data)
  //   })
  // },[])

  const { data } = useQuery<{lessons: ILesson[]}>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <ul>
      {data?.lessons.map((lesson: ILesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
