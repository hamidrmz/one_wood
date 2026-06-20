export const metadata = {
  title: "One Wood"
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body style={{margin:0}}>
        {children}
      </body>
    </html>
  )
}
