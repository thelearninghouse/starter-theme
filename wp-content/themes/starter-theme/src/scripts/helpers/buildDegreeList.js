export function buildDegreeList(Degrees) {
  return Degrees.map((degree, index) => {
    var levelsArray = [];
    var areasArray = [];

    if (degree.degree_levels) {
      levelsArray = degree.degree_levels.map(level => level.term_id )
    }

    if (degree.degree_areas) {
      areasArray = degree.degree_areas.map(area => area.term_id )
    }

    degree['levels'] = levelsArray
    degree['areas'] = areasArray
    return degree
  })
}
