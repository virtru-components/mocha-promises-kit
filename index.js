/**
 * Promise aware test method
 */
function itAsync(testLabel, testFunction) {
  it(testLabel, function(done) {
    testFunction()
      .then(
        function success() {
          done();
        },
        function error(err) {
          done(err);
        }
      )
      .done();
  });
}

exports.itAsync = itAsync;
