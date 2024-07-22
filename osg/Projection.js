import utils from '../osg/utils.js';
import Node from '../osg/Node.js';
import { mat4 } from '../osg/glMatrix.js';

var Projection = function() {
    Node.call(this);
    this.projection = mat4.create();
};

utils.createPrototypeNode(
    Projection,
    utils.objectInherit(Node.prototype, {
        getProjectionMatrix: function() {
            return this.projection;
        },
        setProjectionMatrix: function(m) {
            this.projection = m;
        }
    }),
    'osg',
    'Projection'
);

export default Projection;
