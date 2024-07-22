import Renderer from '../osgViewer/Renderer.js';
import View from '../osgViewer/View.js';
import Viewer from '../osgViewer/Viewer.js';
import EventProxy from '../osgViewer/eventProxy/eventProxy.js';
import Scene from '../osgViewer/Scene.js';

var osgViewer = {};

osgViewer.Renderer = Renderer;
osgViewer.View = View;
osgViewer.Viewer = Viewer;
osgViewer.EventProxy = EventProxy;
osgViewer.Scene = Scene;

export default osgViewer;
