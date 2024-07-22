import utils from '../osg/utils.js';
import MatrixTransform from '../osg/MatrixTransform.js';
import UpdateSkeleton from '../osgAnimation/UpdateSkeleton.js';
import NodeVisitor from '../osg/NodeVisitor.js';
import UpdateMatrixTransform from '../osgAnimation/UpdateMatrixTransform.js';
import Bone from '../osgAnimation/Bone.js';

var ResetRestPoseVisitor = function() {
    NodeVisitor.call(this, NodeVisitor.TRAVERSE_ALL_CHILDREN);
};

utils.createPrototypeObject(
    ResetRestPoseVisitor,
    utils.objectInherit(NodeVisitor.prototype, {
        apply: function(node) {
            if (node.getTypeID() === Bone.getTypeID()) {
                var cb = node.getUpdateCallback();
                if (cb instanceof UpdateMatrixTransform) {
                    var stackedTransforms = cb._stackedTransforms;
                    for (var st = 0, l = stackedTransforms.length; st < l; st++) {
                        var stackedTransform = stackedTransforms[st];
                        stackedTransform.resetToDefaultValue();
                    }
                    cb.computeChannels();
                }
            }
            this.traverse(node);
        }
    }),
    'osgAnimation',
    'ResetRestPoseVisitor'
);

var resetter = new ResetRestPoseVisitor();

var Skeleton = function() {
    MatrixTransform.call(this);
};

utils.createPrototypeNode(
    Skeleton,
    utils.objectInherit(MatrixTransform.prototype, {
        setDefaultUpdateCallback: function() {
            this.addUpdateCallback(new UpdateSkeleton());
        },

        setRestPose: function() {
            this.accept(resetter);
        }
    }),
    'osgAnimation',
    'Skeleton'
);

export default Skeleton;
