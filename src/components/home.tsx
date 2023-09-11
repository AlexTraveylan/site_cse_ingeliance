import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export type Reunion = { title: string; date: Date; link: string }

export const reunions: Reunion[] = [
  { title: "Réunion CSE du 23 Juin 2023", date: new Date(2023, 5, 23), link: "/reunions/2023-06-23" },
  { title: "Réunion CSE du 3 Mars 2023", date: new Date(2023, 2, 3), link: "/reunions/2023-03-03" },
]

export async function Reunion() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Réunions</CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {reunions.map((reunion, index) => (
            <li key={index}>
              <Link className="hover:font-bold" href={reunion.link}>
                {reunion.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
