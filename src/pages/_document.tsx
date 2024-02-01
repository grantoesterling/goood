/* eslint-disable jsx-a11y/iframe-has-title */
import Document, { Html, Head, Main, NextScript } from 'next/document'

import { AppConfig } from '../utils/AppConfig'
import { css } from 'twin.macro'

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://www.googletagmanager.com" />
          <link rel="preconnect" href="https://www.google-analytics.com" />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TBPSKQV')`,
            }}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
  (function() {
    try {
      window.setTimeout(function(){
        dataLayer.push({
          'event' : 'afterLoad'
        });
      }, 1500);
    } catch (err) {}
  })();
                `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-TBPSKQV"
              height="0"
              width="0"
              css={css`
                display: none;
                visibility: hidden;
              `}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.omnisend = window.omnisend || [];
                omnisend.push(["accountID", "641b5e5f77036e20b19b41f5"]);
                omnisend.push(["track", "$pageViewed"]);
                !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
