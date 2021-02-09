import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Reset from '~/general/Reset'
import { colors } from '%/styles'

export default class MyDocument extends Document {
  constructor () {
    super()
  }

  componentWillMount () {
    Reset()
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/static/favicon.ico' type='image/x-icon' />
          <meta name='theme-color' content={colors.blue} />
          <title>MarketCheck</title>
          {styleTags}
        </Head>
        <body>
          <div className='root'>{main}</div>
          <NextScript />
        </body>
      </html>
    )
  }
}
