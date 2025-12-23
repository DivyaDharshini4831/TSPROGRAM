export default function calculateAverage(...marks: number[]): number {
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    return total / marks.length;
}
