import ComposerPostProcess from '../osgUtil/ComposerPostProcess.js';
import debug from '../osgUtil/debug.js';
import DelayInterpolator from '../osgUtil/DelayInterpolator.js';
import DisplayNormalVisitor from '../osgUtil/DisplayNormalVisitor.js';
import DisplayGeometryVisitor from '../osgUtil/DisplayGeometryVisitor.js';
import DisplayGraph from '../osgUtil/DisplayGraph.js';
import IntersectFunctor from '../osgUtil/IntersectFunctor.js';
import Intersector from '../osgUtil/Intersector.js';
import IntersectionVisitor from '../osgUtil/IntersectionVisitor.js';
import LineSegmentIntersector from '../osgUtil/LineSegmentIntersector.js';
import LineSegmentIntersectFunctor from '../osgUtil/LineSegmentIntersectFunctor.js';
import utils from '../osg/utils.js';
import NodeGizmo from '../osgUtil/NodeGizmo.js';
import GizmoGeometry from '../osgUtil/gizmoGeometry.js';
import PolytopeIntersector from '../osgUtil/PolytopeIntersector.js';
import PolytopeIntersectFunctor from '../osgUtil/PolytopeIntersectFunctor.js';
import SphereIntersector from '../osgUtil/SphereIntersector.js';
import TangentSpaceGenerator from '../osgUtil/TangentSpaceGenerator.js';
import WebVRCustom from '../osgUtil/WebVRCustom.js';
import WebVR from '../osgUtil/WebVR.js';
import intersectionEnums from '../osgUtil/intersectionEnums.js';

var osgUtil = {};

osgUtil.ComposerPostProcess = ComposerPostProcess;
utils.objectMix(osgUtil, debug);
osgUtil.DelayInterpolator = DelayInterpolator;
osgUtil.DisplayNormalVisitor = DisplayNormalVisitor;
osgUtil.DisplayGeometryVisitor = DisplayGeometryVisitor;
osgUtil.DisplayGraph = DisplayGraph;
osgUtil.IntersectFunctor = IntersectFunctor;
osgUtil.Intersector = Intersector;
osgUtil.IntersectionVisitor = IntersectionVisitor;
osgUtil.LineSegmentIntersector = LineSegmentIntersector;
osgUtil.LineSegmentIntersectFunctor = LineSegmentIntersectFunctor;
osgUtil.NodeGizmo = NodeGizmo;
osgUtil.GizmoGeometry = GizmoGeometry;
osgUtil.WebVRCustom = WebVRCustom;
osgUtil.PolytopeIntersector = PolytopeIntersector;
osgUtil.PolytopeIntersectFunctor = PolytopeIntersectFunctor;
osgUtil.SphereIntersector = SphereIntersector;
osgUtil.TangentSpaceGenerator = TangentSpaceGenerator;
osgUtil.WebVR = WebVR;

osgUtil.NO_LIMIT = intersectionEnums.NO_LIMIT;
osgUtil.LIMIT_ONE_PER_DRAWABLE = intersectionEnums.LIMIT_ONE_PER_DRAWABLE;
osgUtil.LIMIT_ONE = intersectionEnums.LIMIT_ONE;

osgUtil.POINT_PRIMITIVES = intersectionEnums.POINT_PRIMITIVES;
osgUtil.LINE_PRIMITIVES = intersectionEnums.LINE_PRIMITIVES;
osgUtil.TRIANGLE_PRIMITIVES = intersectionEnums.TRIANGLE_PRIMITIVES;
osgUtil.ALL_PRIMITIVES = intersectionEnums.ALL_PRIMITIVES;

export default osgUtil;
