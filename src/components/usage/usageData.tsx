export const usageData = [
  'This chrome extension can be used on both local as well as online websites',
  'Open the websites that you wish to validate',
  'Once you have loaded unpacked the extension on chrome, its icon would appear along with other extensions on your browser',
  'You will need to click on the extension icon on the website you wish to work upon to show the popup of extension',
  'The popup also contains links to video manual and website',
  'You will be able to see the three main features of extension on the popup',
  'You will also be able to se the version number and a link to a feedback form in case you got into an issue',
]

export const semanticData = [
  {
    key: 'Select the option check semantics on the popup',
    value: [],
  },
  {
    key: 'You will notice a few things happening',
    value: [],
  },
  {
    key: 'You websites dom will be updated with red-highlighted rectangles and query-icons',
    value: [
      'The red-highlighted elements are the tags which violated our semantic standards',
      'The query tag serves as an indicator to know more about the issue',
      'Clicking on the query icon will open a modal which conatins what standards did that element violate and possible fixes, if any',
    ],
  },
  {
    key: 'A bulb-icon also appears on the dom',
    value: [
      'This is about the general errors on the website regarding what semantic elements did this website not use',
      'Clicking the bulb icon gives that info in a modal',
    ],
  },
  {
    key: 'A new-chrome tab will also open',
    value: [
      'This contains all the violations that we encountered while traversing dom',
      'You also get options to view the full path of element in the html dom tree',
      'You can choose to highlight any specific element from this tab',
      'As an extra feature you can also get accessibility errors of your website on this new tab',
    ],
  },
  {
    key: 'It also constantly watches for mutations on the website, and is also compatible for dynamic loading website',
    value: [],
  },
  {
    key: 'When async data loads, you will get an alert that website has mutated, and you will need to refresh the new tab for latest violations',
    value: [],
  },
]

export const stylesData = [
  {
    key: 'Click on the option check-styles from the popup',
    value: [],
  },
  {
    key: 'It gives two options to users',
    value: [
      'Validate against the default styles configuration',
      'Or, upload a custom JSON styles configuration file, you will be able to download the default configuration on clicking check sample config',
    ],
  },
  {
    key: 'On clicking submit, the checks start for the website',
    value: [],
  },
  {
    key: 'Similar to the check-semantics, here also the dom gets modified with red-highlighted elements and you can view the error messages on clicking the icons',
    value: [],
  },
  {
    key: 'A new tab opens using which you can see the detailed violation and get full path in the html tree and get to highlight specific elements',
    value: [],
  },
  {
    key: 'Similar to the check-semantics option, this also accounts for mutations and gives alert when you need to refresh the new tab',
    value: [],
  },
]

export const densityData = [
  {
    key: 'Click on the option check-density from the popup',
    value: [],
  },
  {
    key: 'It gives two options to users',
    value: [
      'Validate against the spacious styles configuration',
      'Or, validate against the compact view configuration',
      'The configuration options can be viewed in the desnity section of this website',
    ],
  },
  {
    key: 'On clicking submit, the checks start for the website',
    value: [],
  },
  {
    key: 'A new tab opens using which you can see the detailed violation and get full path in the html tree and get to highlight specific elements',
    value: [],
  },
  {
    key: 'Similar to the other two options, here also the dom gets modified with cross-icons clicking which opens a modal showing the error messages',
    value: [],
  },
  {
    key: 'It also tracks for mutations',
    value: [],
  },
]
