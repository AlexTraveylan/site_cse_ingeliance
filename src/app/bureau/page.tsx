import { LeBureau, LesReunions, RoleCse } from "@/components/bureau"

export default async function PageBureau() {
  return (
    <div className="flex flex-col gap-5 max-w-xl m-3">
      <RoleCse />
      <LesReunions />
      <LeBureau />
    </div>
  )
}
