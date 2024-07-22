import ShadowCastAttribute from '../osgShadow/ShadowCastAttribute.js';
import ShadowCastCompiler from '../osgShadow/ShadowCastCompiler.js';
import ShadowCastShaderGenerator from '../osgShadow/ShadowCastShaderGenerator.js';
import ShadowCasterVisitor from '../osgShadow/ShadowCasterVisitor.js';
import ShadowFrustumIntersection from '../osgShadow/ShadowFrustumIntersection.js';
import ShadowMap from '../osgShadow/ShadowMap.js';
import ShadowMapAtlas from '../osgShadow/ShadowMapAtlas.js';
import ShadowReceiveAttribute from '../osgShadow/ShadowReceiveAttribute.js';
import ShadowSettings from '../osgShadow/ShadowSettings.js';
import ShadowTechnique from '../osgShadow/ShadowTechnique.js';
import ShadowTexture from '../osgShadow/ShadowTexture.js';
import ShadowTextureAtlas from '../osgShadow/ShadowTextureAtlas.js';
import ShadowedScene from '../osgShadow/ShadowedScene.js';

var osgShadow = {};

osgShadow.ShadowCastAttribute = ShadowCastAttribute;
osgShadow.ShadowCastCompiler = ShadowCastCompiler;
osgShadow.ShadowReceiveAttribute = ShadowReceiveAttribute;
osgShadow.ShadowCasterVisitor = ShadowCasterVisitor;
osgShadow.ShadowFrustumIntersection = ShadowFrustumIntersection;
osgShadow.ShadowMap = ShadowMap;
osgShadow.ShadowMapAtlas = ShadowMapAtlas;
osgShadow.ShadowedScene = ShadowedScene;
osgShadow.ShadowSettings = ShadowSettings;
osgShadow.ShadowCastShaderGenerator = ShadowCastShaderGenerator;
osgShadow.ShadowTechnique = ShadowTechnique;
osgShadow.ShadowTexture = ShadowTexture;
osgShadow.ShadowTextureAtlas = ShadowTextureAtlas;

export default osgShadow;
