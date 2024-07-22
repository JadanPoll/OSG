import utils from '../osg/utils.js';
import notify from '../osg/notify.js';
import UpdateMatrixTransform from '../osgAnimation/UpdateMatrixTransform.js';
import { mat4 } from '../osg/glMatrix.js';
import NodeVisitor from '../osg/NodeVisitor.js';

/**
 *  UpdateBone
 *  @class UpdateBone
 */
var UpdateBone = function() {
    UpdateMatrixTransform.call(this);
};

/** @lends UpdateBone.prototype */
utils.createPrototypeObject(
    UpdateBone,
    utils.objectInherit(UpdateMatrixTransform.prototype, {
        update: function(node, nv) {
            if (nv.getVisitorType() === NodeVisitor.UPDATE_VISITOR) {
                if (node.className && node.className() !== 'Bone') {
                    notify.warn('Warning: UpdateBone set on non-Bone object.');
                    return false;
                }

                var bone = node;

                UpdateMatrixTransform.prototype.update.call(this, node);
                bone.setMatrix(bone.getMatrix());
                var matrix = bone.getMatrix();
                var parent = bone.getBoneParent();

                if (parent) {
                    mat4.mul(
                        bone.getMatrixInSkeletonSpace(),
                        parent.getMatrixInSkeletonSpace(),
                        matrix
                    );
                } else {
                    bone.setMatrixInSkeletonSpace(matrix);
                }
            }
            return true;
        }
    }),
    'osgAnimation',
    'UpdateBone'
);

export default UpdateBone;
