/**
 * @desc VARIABLES
 * @author Mathieu-ai
 */

let sortedclasses;
// Take value as param. value is an Array. map to return an object.
function mapObj(value) {
    return value.map((stud) => {
        // the map will return an object with the Propertys as detailed with their values
        // (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
        return {
            Class: stud.className,
            FirstName: stud.firstName,
            lastName: stud.lastName,
            Average: stud.moyenne,
        };
    });
}

function regroupByClass(value) {
    return value.reduce(
        (groups, item) => ({
            ...groups,
            [item.Class]: [...(groups[item.Class] || []), item],
        }),
        [],
    );
}

// Take value as param. value is an Array. sort the array by the moyenne prop.
function sort1param(value) {
    return value.sort((a, b) => b.moyenne - a.moyenne);
}

// Take value as param. value is an Array. sort the array by the className,moyenne and lastName props.
function sort2params(value) {
    return value.sort(
        (a, b) => b.moyenne - a.moyenne || a.lastName.localeCompare(b.lastName),
    );
}

// Take value as param. value is an Array. sort the array by the className,moyenne and lastName props.
function sort3params(value) {
    return value.sort(
        (a, b) =>
            // sort will sort 1.the classnames then the average then the last names
            // (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
            a.className.localeCompare(b.className) ||
            b.moyenne - a.moyenne ||
            a.lastName.localeCompare(b.lastName),
    );
}

/**
 * @desc OPTIONS
 * @author Mathieu-ai
 */

// Option1
export function Option1(classes) {
    sortedclasses = sort3params(classes) && mapObj(classes);
    sortedclasses = regroupByClass(sortedclasses);
    console.log(sortedclasses);
}

// Option2
export function Option2(classes) {
    // will generate a table with the data
    // ( https://nodejs.org/dist/latest-v10.x/docs/api/console.html#console_console_table_tabulardata_properties)
    sortedclasses = sort3params(classes) && mapObj(classes);
    console.table(sortedclasses);
}

// Option3
export function Option3(classes) {
    sortedclasses = sort1param(classes) && mapObj(classes);
    console.table(sortedclasses);
}

// Option4
export function Option4(classes) {
    sortedclasses = sort2params(classes) && mapObj(classes);
    console.table(sortedclasses);
}
