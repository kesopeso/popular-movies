export function formatMinutes(minutesCount: number) {
    const hours = Math.floor(minutesCount / 60);
    const mins = minutesCount % 60;
    return `${hours}h ${mins}m`;
}
