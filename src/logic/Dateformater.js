export default function formatDate(isoString) {
    if (!isoString) return "Invalid date";

    const date = new Date(isoString);

    if (isNaN(date.getTime())) return "Invalid date";

    // Extract day, month, and year in UTC
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long", timeZone: "UTC" });
    const year = date.getUTCFullYear();

    return `${day} ${month} ${year}`;
}
