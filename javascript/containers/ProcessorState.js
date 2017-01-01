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
  editing: false,
  activeBank: 0,
  activePatch: 0,
  banks: [
    {
      code: 'A',
      patches: [{
        patchName: 'Evil Tone',
        effects: [
          {
            name: 'Drive',
            active: false,
            settings: [{
              name: 'Level',
              level: 0,
              max: 10
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Driver',
        effects: [
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Mild Solo',
        effects: [
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
        ],
        outputLevel: 50
      }]
    }, {
      code: 'B',
      patches: [{
        patchName: 'Blues',
        effects: [
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Crunch',
        effects: [
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Bonamassa',
        effects: [
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
        ],
        outputLevel: 50
      }]
    }, {
      code: 'C',
      patches: [{
        patchName: 'Floyd',
        effects: [
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Class Rock',
        effects: [
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
        ],
        outputLevel: 50
      }, {
        patchName: 'Sweet Child',
        effects: [
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
        ],
        outputLevel: 50
      }]
    },
  ]
};

module.exports = {
  ProcessorState: ProcessorState
};
