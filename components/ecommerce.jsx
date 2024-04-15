/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BVG8Pfa5TXb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"

export default function ecommerce() {
  return (
    <div className="grid min-h-screen py-6 gap-6 lg:grid-cols-[280px_1fr]">
      <div className="hidden lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                All
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Prints
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                Stickers
              </Link>
              
              
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <header className="flex h-14 items-center gap-4 border-b px-6 lg:hidden">
          <Link className="w-6 h-6" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <Button className="rounded-full" size="icon" variant="ghost">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
          <form className="w-full md:ml-auto md:w-1/3 lg:w-1/4">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/2 dark:bg-gray-950"
                placeholder="Search"
                type="search"
              />
            </div>
          </form>
        </header>
        <main className="h-full flex flex-col flex-wrap justify-end gap-4 p-4 m-4 md:gap-8 md:p-6">
          <div className="flex flex-wrap gap-4 justify-center mx-auto">
            <Card className="container lg:max-w-lg justify-end">
            <Link className="" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-object object-cover w-full transition-transform hover:scale-105 duration-300"
                  height="300"
                  src="/351.jpg"
                  width="300"
                />
              </Link>
              <CardContent className="p-4">
                <Link className="font-semibold" href="#">
                  Glimmer Lamps
                </Link>
                <div className="font-semibold">$60.00</div>
              </CardContent>
            </Card>
            <Card className="container lg:max-w-lg flex flex-col justify-self-end">
              <Link className="" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-object object-cover w-full transition-transform hover:scale-105 duration-300"
                  height="300"
                  src="/BailWhale.jpg"
                  width="300"
                />
              </Link>
              <CardContent className="p-4">
                <Link className="font-semibold" href="#">
                  Aqua Filters
                </Link>
                <div className="font-semibold">$16.33</div>
              </CardContent>
            </Card>
            <Card className="container lg:max-w-lg">
            <Link className="" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-object object-cover w-full transition-transform hover:scale-105 duration-300"
                  height="300"
                  src="/20211.jpg"
                  width="300"
                />
              </Link>
              <CardContent className="p-4">
                <Link className="font-semibold" href="#">
                  Eco Planters
                </Link>
                <div className="font-semibold">$25.00</div>
              </CardContent>
            </Card>
            <Card className="pt-10 lg:w-2/3 lg:max-h-1/3">
            <Link className="" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-object object-cover w-full transition-transform hover:scale-105 duration-300"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
              </Link>
              <CardContent className="p-4">
                <Link className="font-semibold" href="#">
                  Zest Juicers
                </Link>
                <div className="font-semibold">$50.00</div>
              </CardContent>
            </Card>
            <Card>
            <Link className="" href="#">
                <img
                  alt="Thumbnail"
                  className="aspect-object object-cover w-full transition-transform hover:scale-105 duration-300"
                  height="300"
                  src="/placeholder.svg"
                  width="300"
                />
              </Link>
              <CardContent className="p-4">
                <Link className="font-semibold" href="#">
                  Flexi Wearables
                </Link>
                <div className="font-semibold">$100.00</div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
