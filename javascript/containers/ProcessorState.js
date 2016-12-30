let effects = [
  {
    name: 'Drive',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Comp.',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'EQ',
    active: false,
    settings: [{
      name: 'Treble',
      level: 0,
      max: 100
    }, {
      name: 'High Mids',
      level: 0,
      max: 100
    }, {
      name: 'Low Mids',
      level: 0,
      max: 100
    }, {
      name: 'Bass',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Chorus',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Flanger',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Tremolo',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Delay',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }, {
    name: 'Reverb',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  }
];

let ProcessorState = {
  outputLevel: 50,
  editing: false,
  pedalLevel: 0,
  activeFx: {
    name: 'Drive',
    active: false,
    settings: [{
      name: 'Level',
      level: 0,
      max: 100
    }]
  },
  bankName: 'A01',
  patchName: 'Evil Tone',
  effects: effects,
  banks: [
    {
      code: 'A',
      patches: [{
        patchName: 'Evil Tone',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Driver',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Mild Solo',
        effects: effects,
        outputLevel: 50
      }]
    }, {
      code: 'B',
      patches: [{
        patchName: 'Blues',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Crunch',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Bonamassa',
        effects: effects,
        outputLevel: 50
      }]
    }, {
      code: 'C',
      patches: [{
        patchName: 'Floyd',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Class Rock',
        effects: effects,
        outputLevel: 50
      }, {
        patchName: 'Sweet Child',
        effects: effects,
        outputLevel: 50
      }]
    },
  ]
};

module.exports = {
  ProcessorState: ProcessorState,
  effects: effects
};
