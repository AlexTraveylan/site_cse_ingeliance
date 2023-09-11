import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default async function Budget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Utilisation du budget</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-5">
          <div>
            Le budget du CSE est partagé entre les œuvres sociales et les frais de fonctionnement. Nous avons fait le choix depuis des années de
            redistribuer entièrement le budget œuvres sociales via{" "}
            <Link href="avantages" className="text-slate-400 hover:text-slate-500">
              les chèques cadeaux en fin d'année et le forfait remboursement
            </Link>{" "}
            que l'on renouvellera en 2023. Cette répartition nous semble la plus égalitaire entre les salariés. Les autres solutions possibles nous
            semblent peu intéressantes (abonnement à des magasins par exemple) ou peu égalitaires si évènements localisés à Bordeaux par exemple.
          </div>
          <div>
            Néanmoins en 2023 nous avons lancé{" "}
            <Link href="ludo" className="text-slate-400 hover:text-slate-500">
              une ludothèque
            </Link>{" "}
            partagée. Il nous semblait intéressant d'investir sur des achats qu'on gardera plusieurs années.
          </div>
          <div>
            Les frais de fonctionnement nous permettent de financer l'achat de petit matériel, une éventuelle assistance juridique ou expertise,
            ainsi que les repas, petits déjeuners ou goûters d'information. Chaque année, il est possible de transférer 10% du budget
            fonctionnement vers le buget réservé aux œuvres sociales (ce qui est fait chaque année).
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
