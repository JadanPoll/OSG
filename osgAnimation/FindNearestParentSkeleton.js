import utils from '../osg/utils.js';
import NodeVisitor from '../osg/NodeVisitor.js';
import Skeleton from '../osgAnimation/Skeleton.js';

/**
 * FindNearestParentSkeleton
 */

var FindNearestParentSkeleton = function() {
    NodeVisitor.call(this, NodeVisitor.TRAVERSE_PARENTS);
    this._root = undefined;

    // node path to skeleton (without skeleton node though)
    this._pathToRoot = undefined;
};

utils.createPrototypeObject(
    FindNearestParentSkeleton,
    utils.objectInherit(NodeVisitor.prototype, {
        apply: function(node) {
            if (this._root) return;

            if (node.typeID === Skeleton.typeID) {
                this._root = node;
                this._pathToRoot = this.nodePath.slice(1);
                return;
            }

            this.traverse(node);
        }
    }),
    'osgAnimation',
    'FindNearestParentSkeleton'
);

export default FindNearestParentSkeleton;
