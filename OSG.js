
import './osg/polyfill.js';
import osgNameSpace from './osgNameSpace.js';

import osg from './osg/osg.js';
import osgAnimation from './osgAnimation/osgAnimation.js';
import osgDB from './osgDB/osgDB.js';
import osgGA from './osgGA/osgGA.js';
import osgUtil from './osgUtil/osgUtil.js';
import osgViewer from './osgViewer/osgViewer.js';
import osgShader from './osgShader/osgShader.js';
import osgShadow from './osgShadow/osgShadow.js';
import osgStats from './osgStats/osgStats.js';
import osgText from './osgText/osgText.js';
import osgWrappers from './osgWrappers/osgWrappers.js';
import osgPlugins from './osgPlugins/osgPlugins.js';

var OSG = osgNameSpace;

OSG.osg = osg;
OSG.osgAnimation = osgAnimation;
OSG.osgDB = osgDB;
OSG.osgGA = osgGA;
OSG.osgUtil = osgUtil;
OSG.osgViewer = osgViewer;
OSG.osgShader = osgShader;
OSG.osgShadow = osgShadow;
OSG.osgStats = osgStats;
OSG.osgText = osgText;
OSG.osgWrappers = osgWrappers;
OSG.osgPlugins = osgPlugins;

// for backward compatibility
OSG.globalify = function() {
    window.osg = OSG.osg;
    window.osgAnimation = OSG.osgAnimation;
    window.osgDB = OSG.osgDB;
    window.osgGA = OSG.osgGA;
    window.osgUtil = OSG.osgUtil;
    window.osgViewer = OSG.osgViewer;
    window.osgShader = OSG.osgShader;
    window.osgShadow = OSG.osgShadow;
    window.osgStats = OSG.osgStats;
    window.osgText = OSG.osgText;
    window.osgWrappers = OSG.osgWrappers;
    window.osgPlugins = OSG.osgPlugins;
};

export {
    osg,
    osgAnimation,
    osgDB,
    osgGA,
    osgUtil,
    osgViewer,
    osgShader,
    osgShadow,
    osgStats,
    osgText,
    osgWrappers,
    osgPlugins
};

export default OSG;
