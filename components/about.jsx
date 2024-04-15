import Link from "next/link"
import { Button } from "@/components/ui/button"

export function About() {
  return (<div className="h-full">
    <div className="grid gap-6 lg:gap-12 xl:grid-cols-2 pb-8">
      <div className="flex flex-col justify-center space-y-4 px-6 pt-12">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">A bit about me</h1>
          <p
            className="text-gray-500 md:text-2xl dark:text-gray-400">
            Follow me on Instagram @d_w_styles for the latest
              
          </p>
          <a href="https://www.instagram.com/d_w_styles/" target="_blank" className="w-fit pb-4 hover:rotate-180 hover:scale-110 transition duration-1000 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>
          </a>
        </div>
        
      </div>
      <div className="mx-auto flex items-center justify-center pb-10">
      <div className="space-y-4">
        <Link href="/contact">
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl border-2 border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-600 hover:scale-110 transistion duration-300 hover:text-white">Get in Touch</h2>
          </Link>
        </div>
      </div>
    </div>
    <div className="grid gap-6 lg:gap-8 xl:grid-cols-2">
      <div
        className="mx-auto grid max-w-4xl items-start gap-4 px-4 text-center lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4 shadow-xl rounded-xl p-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Artistic Style</h2>
          <p
            className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            My artistic style is inspired by nature and the interplay of light and shadow. I strive to capture the
            fleeting moments of beauty in everyday life through my art. I work primarily in watercolors...
          </p>
        </div>
        <div className="space-y-4 shadow-xl rounded-xl p-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Inspirations</h2>
          <p
            className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            My art is influenced by the works of the Impressionist painters, particularly Claude Monet and his
            masterful use of color and light. I am also inspired by the natural world around me...
          </p>
        </div>
      </div>
      <div
        className="px-6 py-12">
        <div className="space-y-4 bg-gray-200 p-8 rounded-xl border-2 border-gray-600">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl ">About Me</h2>
          <p
            className="mx-auto max-w-3xl text-gray-500 md:text-2xl/relaxed dark:text-gray-400">
            I am an artist who finds beauty in the world around me and seeks to capture it on canvas. My art is a
            reflection of my deep appreciation for the natural world and my fascination with the play of light and
            color. Through my paintings, I aim to transport viewers to moments of peace and tranquility, allowing them
            to experience the magic of the world through my eyes.
          </p>
        </div>
        
      </div>
    </div>
    <div>
      <Link href="/art" className="mx-auto flex items-center justify-center text-xl font-bold md:text-3xl border-2 border-gray-600 px-4 py-2 rounded-xl hover:bg-gray-600 hover:scale-105 transistion duration-300 hover:text-white">
      View Selected Works
      </Link>
    </div>
  </div>);
}
