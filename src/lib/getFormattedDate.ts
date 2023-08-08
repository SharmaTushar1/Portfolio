// ? This code is formatting the date to a more readable format

export default function getFormattedDate(dateString: string) : string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(dateString));
}