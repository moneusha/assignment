import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import ThemeAndVideoContent from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const videosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContent.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading headingColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote>
              <RetryButton type="button" onClick={onClickRetry}>
                Retry
              </RetryButton>
            </NoVideosNote>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContent.Consumer>
  )
}

export default HomeVideos
