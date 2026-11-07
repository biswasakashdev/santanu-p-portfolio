import { GoogleAnalytics } from "@next/third-parties/google";
import { ReactNode } from "react";



export default function PrivacyLayout({children}:{children:ReactNode}) {
  return (
    <html>
      <body>
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
    </html>
  )
}
