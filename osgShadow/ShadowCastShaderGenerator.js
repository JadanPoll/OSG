import ShaderGenerator from '../osgShader/ShaderGenerator.js';
import ShadowCompiler from '../osgShadow/ShadowCastCompiler.js';

var ShaderGeneratorShadowCast = function() {
    ShaderGenerator.apply(this, arguments);
    this.setShaderCompiler(ShadowCompiler);
};

ShaderGeneratorShadowCast.prototype = ShaderGenerator.prototype;

export default ShaderGeneratorShadowCast;
