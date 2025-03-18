export default function Dateformater(isoString) {
    const date = new Date(isoString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
}