import utils from '../osg/utils.js';
import Object from '../osg/Object.js';
import { mat4 } from '../osg/glMatrix.js';
import Target from '../osgAnimation/target.js';

var StackedMatrix = function(name, matrix) {
    Object.call(this);
    this._target = Target.createMatrixTarget(matrix || mat4.IDENTITY);
    if (name) this.setName(name);
};

utils.createPrototypeObject(
    StackedMatrix,
    utils.objectInherit(Object.prototype, {
        init: function(matrix) {
            this.setMatrix(matrix);
            mat4.copy(this._target.defaultValue, matrix);
        },

        getTarget: function() {
            return this._target;
        },

        getMatrix: function() {
            return this._target.value;
        },

        setMatrix: function(m) {
            mat4.copy(this._target.value, m);
        },

        resetToDefaultValue: function() {
            this.setMatrix(this._target.defaultValue);
        },

        applyToMatrix: function(m) {
            mat4.mul(m, m, this._target.value);
        }
    }),
    'osgAnimation',
    'StackedMatrix'
);

export default StackedMatrix;
