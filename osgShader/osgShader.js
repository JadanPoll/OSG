import Compiler from '../osgShader/Compiler.js';
import ShaderGenerator from '../osgShader/ShaderGenerator.js';
import ShaderGeneratorProxy from '../osgShader/ShaderGeneratorProxy.js';
import ShaderProcessor from '../osgShader/ShaderProcessor.js';
import nodeFactory from '../osgShader/nodeFactory.js';
import Node from '../osgShader/node/Node.js';
import utils from '../osgShader/utils.js';

var lib = {};

lib.Compiler = Compiler;
lib.ShaderGenerator = ShaderGenerator;
lib.ShaderGeneratorProxy = ShaderGeneratorProxy;
lib.ShaderProcessor = ShaderProcessor;
lib.nodeFactory = nodeFactory;
lib.utils = utils;

lib.node = {};
lib.node.Node = Node; // used for inheritance
nodeFactory._nodes.forEach(function(value, key) {
    lib.node[key] = value;
});

// debug utility: set it to one to have verbose in shaders
lib.debugShaderNode = false;
/*develblock:start*/
lib.debugShaderNode = true;
/*develblock:end*/

export default lib;
