export default function formatDate(isoString) {
    if (!isoString) return "Invalid date";

    const date = new Date(isoString);

    if (isNaN(date.getTime())) return "Invalid date"; // Check if date is valid

    // Extract day, month, and year
    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
}