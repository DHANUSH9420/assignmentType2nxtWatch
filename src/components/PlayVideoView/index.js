import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDisLike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusContainer,
  PlayVideoDot,
  PlaySocialButtonContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescription,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {VideoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props

  const onClickLike = () => {
    clickLiked()
  }
  const onClickDislike = () => {
    clickDisLiked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === VideoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : textColor

        const onClickSave = () => {
          addVideo(VideoDetails)
        }

        return (
          <VideoPlayer>
            <ReactPlayer url={VideoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {VideoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusContainer>
              <PlayVideoStatus color={textColor}>
                {VideoDetails.viewCount} views
                <PlayVideoDot> &#8226; </PlayVideoDot>{' '}
                {VideoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickDislike}
                  >
                    <AiOutlineDisLike size={25} />
                    <ButtonText>Dislike</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={saveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonContainer>
            </PlayVideoStatusContainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={VideoDetails.profileImageUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{VideoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {VideoDetails.subscribeCount} Subscribers
                </ChannelSubscribers>
                <ChannelDescription color={textColor}>
                  {VideoDetails.description}
                </ChannelDescription>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView
