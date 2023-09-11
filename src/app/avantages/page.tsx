import { Avantage, CarteCadeau } from "@/components/avantages"

export default async function PageAvantages() {
  return (
    <div className="flex flex-col gap-5 max-w-xl m-3">
      <Avantage />
      <CarteCadeau />
    </div>
  )
}
