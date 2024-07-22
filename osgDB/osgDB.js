import utils from '../osg/utils.js';
import Input from '../osgDB/Input.js';
import ReaderParser from '../osgDB/readerParser.js';
import DatabasePager from '../osgDB/DatabasePager.js';
import osgWrappers from '../osgWrappers/serializers/osg.js';
import osgAnimationWrappers from '../osgWrappers/serializers/osgAnimation.js';
import osgTextWrappers from '../osgWrappers/serializers/osgText.js';
import Registry from '../osgDB/Registry.js';
import FileHelper from '../osgDB/FileHelper.js';
import requestFile from '../osgDB/requestFile.js';
import zlib from '../osgDB/zlib.js';

var osgDB = {};
osgDB.Input = Input;
utils.objectMix(osgDB, ReaderParser);
osgDB.DatabasePager = DatabasePager;
osgDB.ObjectWrapper.serializers.osg = osgWrappers;
osgDB.ObjectWrapper.serializers.osgAnimation = osgAnimationWrappers;
osgDB.ObjectWrapper.serializers.osgText = osgTextWrappers;
osgDB.Registry = Registry;
osgDB.FileHelper = FileHelper;
osgDB.requestFile = requestFile;

utils.objectMix(osgDB, zlib);

export default osgDB;
