import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components'
import { videosApi } from '../../api/api'
import Header from '../../components/header/Header'
import { range } from '../../utils/utils'
import VideoList from './Videos/VideoList'

const Wrapper = styled.div`
  
`

const Lists = styled.div`
  
`

const SATISFYING_NUMBER_OF_VIDEOS = 30
const LAST_LIST_ID = 9
const FIRST_LIST_ID = 2
const LIST_SIZE = 15

const Home = () => {
  
  const [lastlyDownloadedListId, setLastlyDownloadedListId] = useState(FIRST_LIST_ID)

  const [videos, addVideos] = useReducer((state, payload) => 
    [...state, ...payload], []) 

  const getListOfVideos = async id => 
    await videosApi.getListOfVideos({
      MediaListId: id,
      IncludeCategories: false,
      IncludeImages: true,
      IncludeMedia: false,
      PageNumber: 1,
      PageSize: 15
    })

  useEffect(() => {
    if (videos.length < SATISFYING_NUMBER_OF_VIDEOS && lastlyDownloadedListId < LAST_LIST_ID) {
      getListOfVideos(lastlyDownloadedListId)
        .then(result => {
          result.data?.Entities && addVideos(result.data?.Entities)
          setLastlyDownloadedListId(l => l + 1)
        })
    }
  }, [videos])

  return (
    <Wrapper>
      <Header title={'Home'} />
      <Lists>
        {
          range(Math.floor(videos.length / LIST_SIZE))
            .map(listNumber => {
              const slicedArray = videos.slice(listNumber, listNumber + LIST_SIZE)
              return slicedArray.length === LIST_SIZE && <VideoList videos={slicedArray}/>
            })
        }
      </Lists>
    </Wrapper>
  )
}

export default Home