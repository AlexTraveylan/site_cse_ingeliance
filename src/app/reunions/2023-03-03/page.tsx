import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Page() {
  return (
    <div className="flex flex-col gap-5 max-w-xl m-3">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Réunion CSE du 3 Mars 2023</CardTitle>
          <CardDescription>by Gilles Vogt</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <h2 className="font-semibold">Ordre du jour</h2>
            <div>
              <h3 className="mb-5"></h3>
              <ul className="flex flex-col gap-1 ml-3 text-sm text-slate-300 dark:text-slate-200">
                <li>
                  1. Stratégie de l'entreprise : Information et consultation du CSE sur l'évolution de l'organisation au sein de l'agence de
                  Bordeaux.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-slate-400 dark:text-slate-300 flex justify-end">3 March 2023</CardFooter>
      </Card>
    </div>
  )
}
