describe('Score-to-grade',function () {
  it('should return S, when score is greater than 90 but less than 100', function () {
    expect(scoreToGrade(90)).toEqual('S');
    expect(scoreToGrade(100)).toEqual('S');
    expect(scoreToGrade(94)).toEqual('S');
  });

  it('should return A, when score is greater than 80 but less than 90', function () {
    expect(scoreToGrade(80)).toEqual('A');
    expect(scoreToGrade(89)).toEqual('A');
  });

  it('should return B, when score is greater than 70 but less than 80', function () {
    expect(scoreToGrade(70)).toEqual('B');
    expect(scoreToGrade(79)).toEqual('B');
  });

  it('should return C, when score is greater than 60 but less than 70', function () {
    expect(scoreToGrade(60)).toEqual('C');
    expect(scoreToGrade(69)).toEqual('C');
  });

  it('should return D, when score is greater than 0 but less than 60', function () {
    expect(scoreToGrade(59)).toEqual('D');
    expect(scoreToGrade(46)).toEqual('D');
    expect(scoreToGrade(0)).toEqual('D');
  });

  it('should throw error when score is greater than 100 or less than 0', function () {
   expect(function(){scoreToGrade(-10)}).toThrowError('invalid score');
  });

  it('should throw error when score is not a number', function () {
   expect(function(){scoreToGrade('a')}).toThrowError('is not a number');
  });
});
