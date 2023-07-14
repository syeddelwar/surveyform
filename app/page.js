import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
  
    <div className="flex justify-center">
       <Link href='/survey' className="py-3 px-6 border  mt-10">Go to survey page</Link>
    </div>
   </>
  )
}
