type tPerson = { fname: string, lname: string; };

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {

  arr.sort((a: tPerson, b: tPerson): number => {
    if (a.lname < b.lname) return -1;
    if (a.lname > b.lname) return 1;
    if (a.fname < b.fname) return -1;
    if (a.fname > b.fname) return 1;
    return 0;
  });

  return arr;
}

export { peopleSort };
