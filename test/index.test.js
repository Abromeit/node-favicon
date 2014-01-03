var should  = require('should')
  , favicon = require(__dirname + '/../');

describe("favicon", function() {
  this.timeout(4000);
  it("discovers a favicon.ico in the web site root", function(done) {
    favicon("http://nodejs.org/", function(err, url) {
      if (err) return done(err);
      url.should.eql("http://nodejs.org/favicon.ico");
      done();
    });
  });

  it("discovers a favicon.ico in SHORTUCT ICON", function(done) {
    favicon("http://www.abandonware-france.org/", function(err, url) {
      if (err) return done(err);
      url.should.eql("http://www.abandonware-france.org/ltf_images/favicon.ico");
      done();
    });
  });

  it("discovers a favicon found from a <link> tag", function(done) {
    favicon("http://hyperpolyglot.org/lisp", function(err, url) {
      if (err) return done(err);
      url.should.eql("http://hyperpolyglot.org/favicon.gif");
      done();
    });
  });

  it("can handle https protocol", function(done) {
    favicon("https://github.com/sentientwaffle/gift", function(err, url) {
      if (err) return done(err);
      url.should.eql("https://github.com/favicon.ico")
      done();
    });
  });

  it("handles single quotes", function(done) {
    favicon("http://hashrocket.com/articles", function(err, url) {
      if (err) return done(err);
      url.should.eql("http://hashrocket.com/favicon.png");
      done();
    });
  });

  it("will follow redirect from http to https", function(done) {
    favicon("http://github.com/", function(err, url) {
      if (err) return done(err);
      url.should.eql("https://github.com/favicon.ico")
      done();
    });
  });

  // 1. http://www.rai.nl => http://www.rai.nl/nl/pages/default.aspx
  // 2. href found === ../../_catalogs/masterpage/img/favicon.png
  // 3. resolves to http://www.rai.nl/_catalogs/masterpage/img/favicon.png
  it("it will follow redirect and resolve url from link", function(done) {
    favicon("http://www.rai.nl/", function(err, url) {
      if (err) return done(err);
      url.should.eql("http://www.rai.nl/_catalogs/masterpage/img/favicon.png")
      done();
    });
  });

});
