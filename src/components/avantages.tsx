import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export async function Avantage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Le forfait culture et sport</CardTitle>
        <CardDescription>
          Il s'agit d'un remboursement annuel pour vos activités sociales et culturelles d'un montant de 50€. Il vous faut nous adresser une ou des
          factures pour un montant total d'au moins 50€ pour des activités sportives ou culturelles en un{" "}
          <span className="font-semibold">seul courriel</span>. Il s'agit bien d'une facture ou d'un justificatif à votre nom et non du ticket.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3 pb-5">
          <h2 className="font-semibold">Les conditions</h2>
          <h3 className="text-sm text-slate-500 dark:text-slate-400">
            Réductions tarifaires accordées à l'occasion de voyages touristiques, de la pratique d'une activité sportive ou sur des spectacles
          </h3>
          <p>
            Les réductions tarifaires accordées par le comité d'entreprise à l'occasion de voyages touristiques, de la pratique d'activités
            sportives ou sur les spectacles sont exonérées de charges sociales, qu'il s'agisse de réductions directement supportées par le comité
            d'entreprise ou du remboursement total ou partiel des sommes payées par le salarié sur présentation de justificatifs.
          </p>
        </div>
        <div className="flex flex-col gap-3 pb-5">
          <h3 className=" text-sm font-semibold">Plus précisément</h3>
          <ul className="flex flex-col gap-5 text-sm text-slate-400 dark:text-slate-300 ">
            <li>
              <p>
                le remboursement du prix du billet d'entrée à un spectacle (cinéma, théâtre, représentation lyrique ou chorégraphique, concert,
                cirque…) ou à un parc de loisirs ; NB : en matière de spectacles, le comité doit être en mesure de présenter les justificatifs des
                prestations versées (nature de la manifestation afin de déterminer si celle-ci entre dans la notion de spectacles, sa date, le prix
                du billet, l'identité du bénéficiaire)
              </p>
            </li>
            <li>
              <p>
                l'attribution à tarif réduit de billets d'entrée à un parc de loisirs, peu important le fait que cette prestation soit servie par
                le comité d'entreprise qui gère le parc de loisirs
              </p>
            </li>
            <li>
              <p>
                le remboursement du coût des abonnements, adhésions, forfaits, droits d'entrée dans le domaine de la culture, des spectacles, des
                loisirs et du sport ;
              </p>
            </li>
            <li>
              <p>
                les participations à l'achat ou à la location de matériel permettant l'exercice d'une activité sportive ou de loisir, tel l'achat
                d'une bicyclette
              </p>
            </li>
            <li>
              <p>
                le financement des stages sportifs suivis par les enfants du personnel, sous réserve notamment de la production d'une attestation
                d'inscription de l'enfant ;
              </p>
            </li>
            <li>
              <p>dans le cadre d'un voyage, le remboursement des frais de transport pour de rendre à la gare ou à l'aéroport</p>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

export async function CarteCadeau() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Les cartes cadeau</CardTitle>
      </CardHeader>
      <CardContent>Chaque année, tous les salariés bénéficient d'une carte cadeau pour eux et chacun de leurs enfants mineurs.</CardContent>
    </Card>
  )
}
