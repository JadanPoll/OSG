import Controller from '../osgGA/Controller.js';
import utils from '../osg/utils.js';

var OrbitManipulatorWebVRController = function(manipulator) {
    Controller.call(this, manipulator);
    this.init();
};

utils.createPrototypeObject(
    OrbitManipulatorWebVRController,
    utils.objectInherit(Controller.prototype, {
        init: function() {},
        update: function(q, position) {
            this._manipulator.setPoseVR(q, position);
        }
    })
);

export default OrbitManipulatorWebVRController;
