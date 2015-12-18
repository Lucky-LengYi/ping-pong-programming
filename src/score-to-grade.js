function scoreToGrade(score) {
  var grade = ['D', 'C', 'B', 'A', 'S'];
  var scoreParagraph = [0, 60, 70, 80, 90];

  if (isNaN(score)) {
    throw new TypeError('is not a number');
  }

  if (score > 100 || score < 0) {
    throw new TypeError('invalid score');
  }

  var result;

  scoreParagraph.forEach(function(item, i) {
    if (score >= item) {
      result = grade[i];
    }
  });

  return result;
}
