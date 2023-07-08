function dateConverter(date: Date) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const parsedDate = new Date(date);
    const dateFormat = `${months[parsedDate.getMonth()]} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}` // January 01, 1976
    
    return dateFormat;
}

export default dateConverter;