import '../globals.css'
import { Ubuntu } from 'next/font/google'
// Context Proider
import { FormProvider } from '../context/FormProvider.context'
//Components
import Sidebar from '@/components/sidebar'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ["300", "400", "500", "700"] })

export const metadata = {
  title: 'Multistep Form',
  description: 'Multistep Form Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={`${ubuntu.className} bg-light_gray px-80 pt-10`}> */}
      <body className={`${ubuntu.className} flex justify-center items-center bg-light_gray w-screen h-screen`}>
        <FormProvider>
          <div className='flex flex-col md:flex-row md:w-3/6 h-auto md:h-5/6 border-white bg-white border-8 rounded-xl overflow-auto'>
            <Sidebar />
            <main className='bg-white absolute top-28 left-3 right-3  rounded-xl md:static flex justify-center items-center w-auto md:w-4/6 '>
              {children}
            </main>
          </div>
        </FormProvider>
      </body>
    </html>
  )
}
