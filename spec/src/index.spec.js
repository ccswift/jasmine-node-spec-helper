const appRootDir = require('app-root-dir').get();
const specHelper = require(appRootDir + '/src/index.js')('/src/index.js');

var mockRequireSpy;
var intance;

var init = () => {
  mockRequireSpy = jasmine.createSpy('mock base');
  mockRequireSpy.reRequire = jasmine.createSpy('mock reRequire');
  specHelper.mock('mock-require', mockRequireSpy);

  instance = specHelper.start();
}

beforeEach(init);

describe('specHelper index.js', function(){
  describe('instance', function(){
    it('instance should be a function', function(){
      expect(instance).toEqual(jasmine.any(Function));
    });
    it('instance function call should return an object (load)', function(){
      expect(instance('/src/index.js')).toEqual(jasmine.any(Object));
    });

  });
  describe('start', function(){
    it('instance object should have a property start, as a function', function(){
      expect(instance('/src/index.js').start).toBeDefined();
      expect(instance('/src/index.js').start).toEqual(jasmine.any(Function));
    });
  });

  describe('restart', function(){
    it('instance object should have a property restart, as a function', function(){
      expect(instance('/src/index.js').restart).toBeDefined();
      expect(instance('/src/index.js').restart).toEqual(jasmine.any(Function));
    });
  });

  describe('mock', function(){
    it('instance object should have a property mock, as a function', function(){
      expect(instance('/src/index.js').mock).toBeDefined();
      expect(instance('/src/index.js').mock).toEqual(jasmine.any(Function));
    });
  });
});
