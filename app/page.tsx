import Link from 'next/link'

import ExternalRedirectWithCountdown from '@/components/molecules/ExternalRedirectWithCountdown'

export default function Home () {
  const newVersionAddress = 'http://localhost:3000/#ok'

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full items-center justify-center font-mono text-sm flex">
        <div className="w-auto pb-6 pt-8 p-4 static border-b border border-gray-300 rounded-xl bg-gray-200 ">
          You are going to be redirect to a&nbsp;
          <code className="font-mono font-bold">
            new version!
          </code>

          <div className='pt-6 underline text-blue-500 dark:text-orange-300'>
            <Link href={newVersionAddress}> {newVersionAddress} </Link>
          </div>

          <div className='italic text-gray-400 m-auto p-auto'>
            <ExternalRedirectWithCountdown url={newVersionAddress} delayInSeconds={3} />
          </div>
        </div>
      </div>
      {/* <ExternalRedirect url={newVersionAddress} delayInSeconds={3}/> */}
    </main>
  )
}
