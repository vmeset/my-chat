import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-3xl font-bold m-10">выРУчатик</h1>

        <div className='flex space-x-3'>
            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* SunIcon */}
                    <SunIcon className="h-9 w-9"/>
                    <h2>Примеры</h2>
                </div>
                <div className="space-y-2">
                    <p className="customParagraph">"Поясни за..."</p>
                    <p className="customParagraph">"Какая разница?!"</p>
                    <p className="customParagraph">"ЧеКаво"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* SunIcon */}
                    <BoltIcon className="h-9 w-9"/>
                    <h2>Возможности</h2>
                </div>
                <div className="space-y-2">
                    <p className="customParagraph">"Поясни за..."</p>
                    <p className="customParagraph">"Какая разница?!"</p>
                    <p className="customParagraph">"ЧеКаво"</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center mb-5">
                    {/* SunIcon */}
                    <ExclamationTriangleIcon className="h-9 w-9"/>
                    <h2>Ограничения</h2>
                </div>
                <div className="space-y-2">
                    <p className="customParagraph">"Поясни за..."</p>
                    <p className="customParagraph">"Какая разница?!"</p>
                    <p className="customParagraph">"ЧеКаво"</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage