import { UserButton } from "@clerk/nextjs";

export default function test() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
