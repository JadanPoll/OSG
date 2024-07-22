import notify from '../osg/notify.js';
import ShaderGenerator from '../osgShader/ShaderGenerator.js';
import ShadowCastShaderGenerator from '../osgShadow/ShadowCastShaderGenerator.js';
import DisplayNormalVisitor from '../osgUtil/DisplayNormalVisitor.js';
import DisplayGeometryVisitor from '../osgUtil/DisplayGeometryVisitor.js';

var ShaderGeneratorProxy = function() {
    // object of shader generators
    this._generators = {};
    this.addShaderGenerator('default', new ShaderGenerator());
    this.addShaderGenerator('ShadowCast', new ShadowCastShaderGenerator());
    this.addShaderGenerator(
        'debugNormal',
        new DisplayNormalVisitor.ShaderGeneratorCompilerOffsetNormal()
    );
    this.addShaderGenerator(
        'debugTangent',
        new DisplayNormalVisitor.ShaderGeneratorCompilerOffsetTangent()
    );
    this.addShaderGenerator(
        'debugGeometry',
        new DisplayGeometryVisitor.ShaderGeneratorCompilerColorGeometry()
    );
    this.addShaderGenerator(
        'debugSkinning',
        new DisplayGeometryVisitor.ShaderGeneratorCompilerColorSkinning()
    );

    return this;
};

ShaderGeneratorProxy.prototype = {
    getShaderGenerator: function(name) {
        if (!name) return this._generators.default;

        var shaderGenerator = this._generators[name];

        if (!shaderGenerator) {
            notify.error('ShaderGenerator ' + name + ' does not exist in ShaderGeneratorProxy');
            return this._generators.default;
        }

        return shaderGenerator;
    },

    // user-space facility to provide its own
    addShaderGenerator: function(name, sg) {
        this._generators[name] = sg;
    }
};

export default ShaderGeneratorProxy;
