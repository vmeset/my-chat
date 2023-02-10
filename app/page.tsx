function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-3xl font-bold m-10">chatGPT messenger</h1>

        <div>
            <div>
                <div>
                    {/* SunIcon */}
                    <h2>Examples</h2>
                </div>
                <div>
                    <p className="customParagraph">Поясни за...</p>
                    <p className="customParagraph">Какая разница?!</p>
                    <p className="customParagraph">ЧеКаво</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage