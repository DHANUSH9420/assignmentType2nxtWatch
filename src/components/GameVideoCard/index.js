import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbnailImage,
  GamingContentSection,
  GamingTittle,
  GamingViewAndDate,
} from './styledComponents'

const VideoCard = props => {
  const {VideoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = VideoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink to={`/Videos/${id}`} className="link">
            <GamingListItem>
              <GamingThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GamingContentSection>
                <GamingTittle color={textColor}>{title}</GamingTittle>
                <GamingViewAndDate color={textColor}>
                  {viewCount} Watching Worldwide
                </GamingViewAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoCard
