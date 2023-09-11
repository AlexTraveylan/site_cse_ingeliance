export function formatDate(inputDate: Date): string {
  const day = inputDate.getDate()
  const year = inputDate.getFullYear()

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const month = monthNames[inputDate.getMonth()]

  return `${day} ${month} ${year}`
}
