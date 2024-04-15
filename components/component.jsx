import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    (<div className="w-full max-w-2xl space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-5xl font-bold">Contact</h2>
        <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl">Want to enquire about some of my work? or any other questions?</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-xl md:text-2xl">Name</Label>
          <Input id="name" placeholder="Enter your name" className="text-md md:text-lg"/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-xl md:text-2xl">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" className="text-md md:text-lg" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-xl md:text-2xl">Message</Label>
          <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" className="text-md md:text-lg" />
        </div>
        <Button className="text-lg md:text-xl">Send message</Button>
      </div>
    </div>)
  );
}
