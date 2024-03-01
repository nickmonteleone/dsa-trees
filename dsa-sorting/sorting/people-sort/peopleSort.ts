p2type tPerson = { fname: string, lname: string; };

/** Sort array of persons in place (lname > fname). Returns array. */

function peopleSort(arr: tPerson[]): tPerson[] {

  arr.sort((p1, p2) => {
    if (p1.lname > p2.lname) return -1;
    if (p1.lname < p2.lname) return 1;
    return _sortFirstName(p1,p2)
  }
  );

  function _sortFirstName(p1,p2): number {

      if (p1.fname > p2.fname) return -1;
      if (p1.fname < p2.fname) return 1;
      return 0;

  }

  return arr;
}

export { peopleSort };
