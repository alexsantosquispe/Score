import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export function getFormattedDateAndTime(dateString: string) {
  const utcDate = new Date(dateString);

  const zonedDate = toZonedTime(utcDate, "UTC");

  const formattedDate = format(zonedDate, "dd MMM");
  const formattedTime = format(zonedDate, "hh:mm a");

  return { formattedDate, formattedTime };
}
