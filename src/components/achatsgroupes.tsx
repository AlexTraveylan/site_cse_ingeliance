import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export async function AchatsGroupes() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Les achats groupés</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div>
          Le CSE peut aussi assurer l'achat et la revente à tarif préférentiel de diverses places ou tickets sur demande. La revente se fait à prix
          coûtant (le CSE ne s'occupe que de la revente, il n'y a pas de participation supplémentaire, voir{" "}
          <Link className="text-slate-400 hover:text-slate-500" href="budget">
            ici
          </Link>
          ).
        </div>
        <div>Les membres du CSE ont besoin de vos suggestions pour ce sujet.</div>
      </CardContent>
    </Card>
  )
}

export const achatsdispos: string[] = ["entrée à la piscine de Mérignac"]

export async function AchatsDispos() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Achats disponibles</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <h3>Les places à la revente aujourd'hui disponibles sont :</h3>
        <ul className="flex flex-col gap-3 text-sm text-slate-500 dark:text-slate-400">
          {achatsdispos.map((achat, index) => (
            <li key={index}>{achat}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
