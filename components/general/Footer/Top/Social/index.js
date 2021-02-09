import Facebook from './Facebook.svg'
import Twitter from './Twitter.svg'
import GooglePlus from './GooglePlus.svg'
import Instagram from './Instagram.svg'
import Linkedin from './Linkedin.svg'
import Youtube from './Youtube.svg'

import Network from './Network'
import NetworksWrapper from './NetworksWrapper'

export default () =>
  <NetworksWrapper>
    <Network href='#' title='Facebook'><Facebook /></Network>
    <Network href='#' title='Twitter'><Twitter /></Network>
    <Network href='#' title='Google Plus'><GooglePlus /></Network>
    <Network href='#' title='Youtube'><Youtube /></Network>
    <Network href='#' title='Instagram'><Instagram /></Network>
    <Network href='#' title='Linkedin'><Linkedin /></Network>
  </NetworksWrapper>
