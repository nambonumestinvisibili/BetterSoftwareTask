import React, { useContext, useEffect, useReducer, useState } from 'react'
import { videosApi } from '../../api/api'
import { GlobalContext } from '../../App'
import Header from '../../components/header/Header'
import { range } from '../../utils/utils'
import VideoList from './Videos/VideoList'

const SATISFYING_NUMBER_OF_VIDEOS = 30
const LAST_LIST_ID = 9
const FIRST_LIST_ID = 2
const LIST_SIZE = 15

const Home = () => {
  
  const [lastlyDownloadedListId, setLastlyDownloadedListId] = useState(FIRST_LIST_ID)

  const [videos, addVideos] = useReducer((state, payload) => 
    [...state, ...payload], []) 

  const { showLoading, hideLoading } = useContext(GlobalContext)

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
    showLoading()
  }, [])

  useEffect(() => {
    if (videos.length < SATISFYING_NUMBER_OF_VIDEOS && lastlyDownloadedListId < LAST_LIST_ID) {
      getListOfVideos(lastlyDownloadedListId)
        .then(result => {
          result.data?.Entities && addVideos(result.data?.Entities)
          setLastlyDownloadedListId(l => l + 1)
        })
    }
    else {
      hideLoading()
    }
  }, [videos])

  return (
    <div>
      <Header title={'Home'} />
      <div>
        {
          range(Math.floor(videos.length / LIST_SIZE))
            .map(listNumber => {
              const slicedArray = videos.slice(listNumber, listNumber + LIST_SIZE)
              return slicedArray.length === LIST_SIZE && <VideoList videos={slicedArray}/>
            })
        }
      </div>
    </div>
  )
}

export default Home