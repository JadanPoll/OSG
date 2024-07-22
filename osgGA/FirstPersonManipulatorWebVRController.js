import Controller from '../osgGA/Controller.js';
import utils from '../osg/utils.js';

var FirstPersonManipulatorWebVRController = function(manipulator) {
    Controller.call(this, manipulator);
    this.init();
};

utils.createPrototypeObject(
    FirstPersonManipulatorWebVRController,
    utils.objectInherit(Controller.prototype, {
        init: function() {},
        update: function(q, position) {
            this._manipulator.setPoseVR(q, position);
        }
    })
);

export default FirstPersonManipulatorWebVRController;
