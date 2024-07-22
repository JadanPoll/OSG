import Stats from '../osgStats/Stats.js';
import BufferStats from '../osgStats/BufferStats.js';
import Graph from '../osgStats/Graph.js';
import TextGenerator from '../osgStats/TextGenerator.js';
import Counter from '../osgStats/Counter.js';
import defaultStats from '../osgStats/defaultStats.js';
import browserStats from '../osgStats/browserStats.js';
import glStats from '../osgStats/glStats.js';

var osgStats = {
    Stats: Stats,
    BufferStats: BufferStats,
    Graph: Graph,
    TextGenerator: TextGenerator,
    Counter: Counter,
    defaultStats: defaultStats,
    browserStats: browserStats,
    glStats: glStats
};

export default osgStats;
