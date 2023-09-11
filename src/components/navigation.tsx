import { navigationTitles } from "@/lib/navigation_title"
import Image from "next/image"
import Link from "next/link"
import { SwitchToggle } from "./switch-theme"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export async function Navigation() {
  return (
    <Card className="m-3">
      <CardHeader className="relative">
        <div className="absolute top-0 right-0 p-5">
          <SwitchToggle />
        </div>
        <CardTitle>
          <Image src="/INGELIANCE-2020-COULEURS.png" alt="logo ingeliance" width={300} height={150} />
        </CardTitle>
        <CardDescription>
          <Link className="hover:font-bold scale-90" href="/">
            CSE Bordeaux
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        <ul>
          {navigationTitles.map((nav, index) => (
            <li className="hover:font-bold scale-90" key={index}>
              <Link href={nav.link}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
