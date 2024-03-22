#!node

const conf = [
  /* keycode , mandatory modifier , target modifier*/
  ["delete_or_backspace", "control","left_option"],
  ["delete_forward", "control","left_option"],
  ["left_arrow", "control","left_option"],
  ["right_arrow", "control","left_option"],
  ["slash", "control","left_option"],
  ["a", "control","command"],
  ["b", "control","command"],
  ["c", "control","command"],
  ["d", "control","command"],
  ["f", "control","command"],
  ["i", "control","command"],
  ["j", "control","command"],
  ["l", "control","command"],
  ["o", "control","command"],
  ["p", "control","command"],
  ["r", "control","command"],
  ["s", "control","command"],
  ["t", "control","command"],
  ["w", "control","command"],
  ["v", "control","command"],
  ["x", "control","command"],
  ["y", "control","command"],
  ["z", "control","command"],
]

const def = {
  description: "Universal",
  manipulators: [],
}
conf.forEach(v => {
  const [key_code, mandatory_modifier,  target_modifier] = v
  
  def.manipulators.push({
    from: {
      key_code,
      modifiers: {
        mandatory: [mandatory_modifier],
        optional: ['any']
      },
    },
    to: {
      key_code,
      modifiers: [target_modifier]
    },
    "conditions": [
      {
        "type": "frontmost_application_unless",
        "bundle_identifiers": [
          "^com\\.glavsoft\\.Remote-Ripple-macOS$"
        ]
      }
    ],
    "type": "basic"

  })
  def.manipulators.push({
    from: {
      key_code,
      modifiers: {
        mandatory: [target_modifier],
        optional: ['any']
        // optional: optional_modifier ? [optional_modifier] : undefined
      },
    },
    to: {
      key_code,
      modifiers: [mandatory_modifier]
    },
    "conditions": [
      {
        "type": "frontmost_application_unless",
        "bundle_identifiers": [
          "^com\\.glavsoft\\.Remote-Ripple-macOS$"
        ]
      }
    ],
    "type": "basic"
  })
})


console.log(JSON.stringify(def, null, 2))