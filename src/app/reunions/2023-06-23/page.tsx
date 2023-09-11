import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
  return (
    <div className="flex flex-col gap-5 max-w-xl m-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Réunion CSE du 23 Juin 2023</CardTitle>
          <CardDescription>by Gilles Vogt</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-5">
            <h2 className="font-semibold">Ordre du jour</h2>
            <div>
              <h3 className="mb-5">I. Sujets HSCT</h3>
              <ul className="flex flex-col gap-1 ml-3 text-sm text-slate-400 dark:text-slate-300">
                <li>1. Consultation sur le bilan HSCT 2022</li>
                <li>2. Point sur la dernière visite d'inspection</li>
                <li>3. Résultats agence de l'enquête Mobilité 2023 « PMIE zone de CADERA » lancée par la CCI et Bordeaux Métropole</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-5">II. Sujets économiques et sociaux</h3>
              <ul className="flex flex-col gap-1 ml-3 text-sm text-slate-400 dark:text-slate-300">
                <li>1. Remise, approbation et signature du procès-verbal de la précédente réunion</li>
                <li>2. Information sur l'activité de l'agence</li>
                <li>3. Effectifs au 30 avril et au 31 mai 2023</li>
                <li>4. Calendrier des réunions en S2 2023</li>
                <li>5. Questions diverses</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-slate-400 dark:text-slate-300 flex justify-end">23 June 2023</CardFooter>
      </Card>
    </div>
  )
}
