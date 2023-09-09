import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import HomeVideoCard from '../HomeVideoCard'

const HomeVideos = props => {
  const {homeVideos, onRetry} = props
  const VideosCount = homeVideos.length

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return VideosCount > 0 ? (
          <VideoCardList>
            {homeVideos.map(eachVideos => (
              <HomeVideoCard video={eachVideos} key={eachVideos.id} />
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
            <NoVideosNote noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
