import localFont from 'next/font/local'

export const yekanBakh = localFont({
  src: [
    {
      path: '../public/fonts/YekanBakh-Regular.woff',
      weight: '400',
      style: 'normal',
    }
    // ,
    // {
    //   path: '../public/fonts/IRANSansWeb_Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
  ],
  variable: '--font-yekan-bakh'
})