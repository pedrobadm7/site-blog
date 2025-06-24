export default function BlogPage() {
  return (
    <div className="flex h-full flex-grow flex-col py-24">
      <header className="">
        <div className="container flex flex-col items-start justify-between space-y-6 md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className="w-fit rounded-md bg-cyan-300 px-4 py-2 text-center text-body-tag text-cyan-100 md:text-left">
              BLOG
            </span>
            <h1 className="max-w-2xl text-balance text-start text-heading-lg text-gray-100 md:text-left md:text-heading-xl">
              Dicas e estratégias para impulsionar o seu negócio
            </h1>
          </div>
        </div>
      </header>
    </div>
  )
}
