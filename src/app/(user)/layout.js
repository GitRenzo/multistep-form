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
          <div className=' flex flex-row  w-3/6 h-5/6 bg-white border-white border-8 rounded-xl overflow-auto'>
            <Sidebar/>
            <main className='flex justify-center items-center w-4/6 h-auto'>
              {children}
            </main>
          </div>
        </FormProvider>
      </body>
    </html>
  )
}
