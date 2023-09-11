import { AchatsDispos, AchatsGroupes } from "@/components/achatsgroupes"

export default async function PageAchatsGroupes() {
  return (
    <div className="flex flex-col gap-5 max-w-xl m-3">
      <AchatsGroupes />
      <AchatsDispos />
    </div>
  )
}
