// Option1
export function Option1(classes) {
    let sortedclasses = classes
        .sort(
            (a, b) =>
                a.className.localeCompare(b.className) ||
                b.moyenne - a.moyenne ||
                a.lastName.localeCompare(b.lastName),
        )
        .map((student) => {
            return [
                student.className,
                student.lastName,
                student.firstName,
                student.moyenne,
            ];
        });

    console.log(sortedclasses);
}

// Option1
export function Option2(classes) {
    let sortedclasses = classes
        .sort(
            (a, b) =>
                a.className.localeCompare(b.className) ||
                b.moyenne - a.moyenne ||
                a.lastName.localeCompare(b.lastName),
        )
        .map((stud) => {
            return {
                Class: stud.className,
                FirstName: stud.firstName,
                lastName: stud.lastName,
                Average: stud.moyenne,
            };
        });

    console.table(sortedclasses);
}
