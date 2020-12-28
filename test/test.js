const assert = require('assert');
const ISO6391 = require('../build/index');

describe('getNameEN()', function() {
  it('en', function() {
    assert.equal(ISO6391.getNameEN('en'), 'English');
  });
  it('zh', function() {
    assert.equal(ISO6391.getNameEN('zh'), 'Chinese');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNameEN('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNameEN('toString'), '');
  });
});

describe('getNameTH()', function() {
  it('th', function() {
    assert.equal(ISO6391.getNameTH('th'), 'ไทย');
  });
  it('es', function() {
    assert.equal(ISO6391.getNameTH('es'), 'สเปน');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNameTH('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNameTH('toString'), '');
  });
});

describe('getNativeName()', function() {
  it('en', function() {
    assert.equal(ISO6391.getNativeName('en'), 'English');
  });
  it('zh', function() {
    assert.equal(ISO6391.getNativeName('zh'), '中文');
  });
  it('xx', function() {
    assert.equal(ISO6391.getNativeName('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getNativeName('toString'), '');
  });
});

describe('getCode()', function() {
  it('English', function() {
    assert.equal(ISO6391.getCode('English'), 'en');
  });
  it('Chinese', function() {
    assert.equal(ISO6391.getCode('Chinese'), 'zh');
  });
  it('中文', function() {
    assert.equal(ISO6391.getCode('中文'), 'zh');
  });
  it('xx', function() {
    assert.equal(ISO6391.getCode('xx'), '');
  });
  it('toString', function() {
    assert.equal(ISO6391.getCode('toString'), '');
  });
  it('สเปน', function() {
    assert.equal(ISO6391.getCode('สเปน'), 'es');
  });
});

describe('validate()', function() {
  it('en', function() {
    assert.equal(ISO6391.validate('en'), true);
  });
  it('zh', function() {
    assert.equal(ISO6391.validate('zh'), true);
  });
  it('xx', function() {
    assert.equal(ISO6391.validate('xx'), false);
  });
  it('toString', function() {
    assert.equal(ISO6391.validate('toString'), false);
  });
});

describe('getLanguages()', function() {
  it('[en, zh, xx, toString]', function() {
    assert.deepEqual(ISO6391.getLanguages(['en', 'zh', 'xx', 'toString']), [
      {
        code: 'en',
        nameTH: 'อังกฤษ',
        nameEN: 'English',
        nativeName: 'English',
      },
      {
        code: 'zh',
        nameTH: 'จีน',
        nameEN: 'Chinese',
        nativeName: '中文',
      },
      {
        code: 'xx',
        nameTH: '',
        nameEN: '',
        nativeName: '',
      },
      {
        code: 'toString',
        nameTH: '',
        nameEN: '',
        nativeName: '',
      },
    ]);
  });
});
