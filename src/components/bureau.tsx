import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"

export async function RoleCse() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Le rôle du CSE</CardTitle>
        <CardDescription>
          Le comité social et économique (CSE) est l'instance de représentation du personnel dans l'entreprise. Le bureau est élu pour 4 ans.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          <li>Des difficultés profesionnelles quelconques</li>
          <li>Un risque socio-professionnel (vous vous trouvez dans une situation qui vous met en danger)</li>
          <li>Vous observez une situation anormale, un défaut d’application de la loi, etc.</li>
          <li>Des envies et suggestions pour l’utilisation du budget du CSE,</li>
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2">
        <h3>Pour plus de détails :</h3>
        <Link
          className="text-slate-400 hover:text-slate-500"
          href="https://www.service-public.fr/particuliers/vosdroits/F34474/personnalisation/resultat?lang=&quest0=2&quest="
          target="_blank"
        >
          cliquer ici, site du service public
        </Link>
      </CardFooter>
    </Card>
  )
}

export async function LesReunions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Les réunions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div>
          Le nombre de réunions est fixé à 7 par an. Chaque réunion fait l'objet d'un compte rendu affiché en agence. La direction ne souhaite pas
          diffuser pas courriel les PV à l'ensemble des salariés, mais nous pouvons vous les envoyer sur demande : n'hésitez pas.
        </div>
        <div>
          Chaque réunion comporte un temps consacré aux questions générales et individuelles, c'est à ce moment notamment que l'on peut aborder les
          points que vous nous faites remonter.
        </div>
      </CardContent>
    </Card>
  )
}

export async function LeBureau() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Le bureau</CardTitle>
        <CardDescription>
          Vous pouvez nous contacter sur nos adresses mail @ingeliance.com, par téléphone (voir l'annuaire). L'adresse mail du CSE est cse.bx (at)
          ingeliance (point) com.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <h3>Les membres du bureau sont :</h3>
        <ul>
          <li>Gilles VOGT (secrétaire)</li>
          <li>Clément JAUNEAULT (trésorier)</li>
          <li>Michel TAICLET</li>
          <li>Valérie CRUGEON</li>
          <li>Miguel MIYOUNA N'KOMBO</li>
        </ul>
      </CardContent>
    </Card>
  )
}
