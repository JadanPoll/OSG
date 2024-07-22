import Controller from '../osgGA/Controller.js';
import utils from '../osg/utils.js';
import {quat} from '../osg/glMatrix.js';
import {vec3} from '../osg/glMatrix.js';

import FirstPersonDeviceOrientation from '../osgGA/FirstPersonManipulatorDeviceOrientationController.js';

var OrbitManipulatorDeviceOrientationController = function(manipulator) {
    Controller.call(this, manipulator);
    this.init();
};

utils.createPrototypeObject(
    OrbitManipulatorDeviceOrientationController,
    utils.objectInherit(Controller.prototype, {
        init: function() {
            this._stepFactor = 1.0; // meaning radius*stepFactor to move
            this._quat = quat.create();
            this._pos = vec3.create();
        },

        update: function(deviceOrientation, screenOrientation) {
            // for now we use the same code in first person and orbit to compute rotation
            FirstPersonDeviceOrientation.computeQuaternion(
                this._quat,
                deviceOrientation,
                screenOrientation
            );
            this._manipulator.setPoseVR(this._quat, this._pos);
        }
    })
);

export default OrbitManipulatorDeviceOrientationController;
