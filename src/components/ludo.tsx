import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export type Jeu = { title: string; link: string }

export const jeuxdispos: Jeu[] = [
  { title: "LES AVENTURIERS DU RAIL - EUROPE", link: "https://ludovox.fr/jeu-de-societe/les-aventuriers-du-rail-europe-209/" },
  { title: "DIXIT", link: "https://ludovox.fr/jeu-de-societe/dixit-2614/" },
  { title: "CATAN", link: "https://ludovox.fr/jeu-de-societe/catan-a-laube-de-lhumanite/" },
  { title: "TERRAFORMING MARS", link: "https://ludovox.fr/jeu-de-societe/terraforming-mars-2/" },
  { title: "TRÈS FUTÉ", link: "https://ludovox.fr/jeu-de-societe/tres-fute/" },
  { title: "CRACK LIST", link: "https://ludovox.fr/jeu-de-societe/crack-list/" },
  { title: "6 QUI PREND", link: "https://ludovox.fr/jeu-de-societe/6-qui-prend-3260/" },
  { title: "PICKOMINO", link: "https://ludovox.fr/jeu-de-societe/pickomino-7135/" },
  { title: "TURING MACHINE", link: "https://ludovox.fr/jeu-de-societe/turing-machine/" },
  { title: "7 WONDERS", link: "https://ludovox.fr/jeu-de-societe/7-wonders-3136/" },
  { title: "LOTUS", link: "https://ludovox.fr/jeu-de-societe/lotus/" },
  { title: "TRIO", link: "https://ludovox.fr/jeu-de-societe/trio/" },
  { title: "SKYJO", link: "https://ludovox.fr/jeu-de-societe/skyjo/" },
]

export async function Ludo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Ludothèque du CSE</CardTitle>
        <CardDescription>
          Les jeux peuvent être empruntés deux semaines, il faut venir les chercher à l'agence. Contactez un membre du bureau. Certains jeux
          peuvent être empruntés à la journée pour jouer sur place. Ils sont disponibles au rez-de-chaussée de l'agence de Mérignac.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <h3 className="font-semibold">Les jeux disponibles :</h3>
        <ul className="flex flex-col gap-3 text-slate-500 dark:text-slate-400">
          {jeuxdispos.map((jeu, index) => (
            <li className="hover:font-bold" key={index}>
              <Link href={jeu.link}>{jeu.title}</Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
