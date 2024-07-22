import Hammer from '../hammer.js';
import CADManipulator from '../osgGA/CADManipulator.js';
import CADManipulatorStandardMouseKeyboardController from '../osgGA/CADManipulatorStandardMouseKeyboardController.js';
import CADManipulatorHammerController from '../osgGA/CADManipulatorHammerController.js';
import FirstPersonManipulator from '../osgGA/FirstPersonManipulator.js';
import FirstPersonManipulatorDeviceOrientationController from '../osgGA/FirstPersonManipulatorDeviceOrientationController.js';
import FirstPersonManipulatorHammerController from '../osgGA/FirstPersonManipulatorHammerController.js';
import FirstPersonManipulatorStandardMouseKeyboardController from '../osgGA/FirstPersonManipulatorStandardMouseKeyboardController.js';
import FirstPersonManipulatorWebVRController from '../osgGA/FirstPersonManipulatorWebVRController.js';
import Manipulator from '../osgGA/Manipulator.js';
import OrbitManipulator from '../osgGA/OrbitManipulator.js';
import OrbitManipulatorDeviceOrientationController from '../osgGA/OrbitManipulatorDeviceOrientationController.js';
import OrbitManipulatorGamePadController from '../osgGA/OrbitManipulatorGamePadController.js';
import OrbitManipulatorHammerController from '../osgGA/OrbitManipulatorHammerController.js';
import OrbitManipulatorStandardMouseKeyboardController from '../osgGA/OrbitManipulatorStandardMouseKeyboardController.js';
import OrbitManipulatorWebVRController from '../osgGA/OrbitManipulatorWebVRController.js';
import SwitchManipulator from '../osgGA/SwitchManipulator.js';
import OrbitManipulatorEnums from '../osgGA/orbitManipulatorEnums.js';
import Controller from '../osgGA/Controller.js';

var osgGA = {};

Hammer.NO_MOUSEEVENTS = true; // disable hammer js mouse events

osgGA.CADManipulator = CADManipulator;
osgGA.getCADManipulatorStandardMouseKeyboardController = function() {
    return CADManipulatorStandardMouseKeyboardController;
};
osgGA.getCADManipulatorHammerController = function() {
    return CADManipulatorHammerController;
};
osgGA.FirstPersonManipulator = FirstPersonManipulator;
osgGA.getFirstPersonDeviceOrientationController = function() {
    return FirstPersonManipulatorDeviceOrientationController;
};
osgGA.getFirstPersonManipulatorHammerController = function() {
    return FirstPersonManipulatorHammerController;
};
osgGA.getFirstPersonStandardMouseKeyboardControllerClass = function() {
    return FirstPersonManipulatorStandardMouseKeyboardController;
};
osgGA.getFirstPersonWebVRControllerClass = function() {
    return FirstPersonManipulatorWebVRController;
};
osgGA.Manipulator = Manipulator;
osgGA.OrbitManipulator = OrbitManipulator;
osgGA.getOrbitManipulatorDeviceOrientationController = function() {
    return OrbitManipulatorDeviceOrientationController;
};
osgGA.getOrbitManipulatorGamePadController = function() {
    return OrbitManipulatorGamePadController;
};
osgGA.getOrbitManipulatorHammerController = function() {
    return OrbitManipulatorHammerController;
};
osgGA.getOrbitManipulatorStandardMouseKeyboardController = function() {
    return OrbitManipulatorStandardMouseKeyboardController;
};
osgGA.getOrbitManipulatorWebVRController = function() {
    return OrbitManipulatorWebVRController;
};

osgGA.SwitchManipulator = SwitchManipulator;

osgGA.OrbitManipulator.Rotate = OrbitManipulatorEnums.ROTATE;
osgGA.OrbitManipulator.Pan = OrbitManipulatorEnums.PAN;
osgGA.OrbitManipulator.Zoom = OrbitManipulatorEnums.ZOOM;

osgGA.Controller = Controller;

export default osgGA;
