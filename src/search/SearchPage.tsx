import { Suspense } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { SearchResults } from "../pages/SearchResults"

function SearchLoadingFallback() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Search Results</h1>
          <p className="text-muted-foreground">Loading search results...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoadingFallback />}>
      <SearchResults />
    </Suspense>
  )
}
