// type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

//format as YYYYMMDD
export function formatDate(dateString: Date) {
    let date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based in JS
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
