export const data = [
  {
    key: 'The <div> element',
    value: [
      'Issue warning for using <div> and recommend to replace it',
      'If we get a very deep nesting of <div> (we will check for all divs), we can raise an alert that they should be segregated into separate sections, we can specify a maximum depth after which we should raise the alert.',
      'If any <div> is direct child of <body>, can be replaced by <main> or <section>',
      'If a <div> element has only text elements like <headings>, <p> or <span> etc, then it should preferably be replaced with a <section> or an <article>',
      'If a <div> has a button and an input, it might be that it is being used as a form',
      'Check the id or classname of div, if it contains "nav" or related keywords, we know it is to be a nav and then raise an error',
      'If the id or classname of div contains "sidebar" or "side" keyword, we might consider replacing with aside',
      'Check if <div> is just used purely as a wrapper to a single element, if it is then raise a warning for if the wrapper can be removed',
    ],
  },
  {
    key: 'The <img> element',
    value: [
      'Consider replacing it with a more semantic element like - <figure>',
      'Must have an *alt* property',
    ],
  },
  {
    key: 'The <span> element',
    value: [
      'Issue warning for using <span> and recommend to replace it with <p> or other semantic html tags',
      'If any <span> has no child elements, replace it with <p>, else replace it with <div> or <section>',
      'If the <span> is only used for keeping multiple children on the same line, achieve the same using css',
    ],
  },
  {
    key: 'Use proper heading structure',
    value: [
      'Use <h1> to <h6> tags in a hierarchical manner to structure the headings on your webpage. <h1> represents the main heading, followed by subheadings using <h2>, <h3>, and so on. for e.g. <h2> should never come before <h1> in a section, for any lower h tags, we can check for its parentList',
      'If say an <h4> has occured in the DOM, then it must be true that prior to that element, lower <h> tags like <h1>, <h2> etc must have occured.',
    ],
  },
  {
    key: 'The <article> tag',
    value: [
      '<article> tag is used to mark up a complete, meaningful, and distinct composition',
      'They should be direct children of generic tags like <body> or main, raise warning if they are chilren of <div> or similar tags',
      'Nesting of <article> tags is not recommended',
    ],
  },
  {
    key: 'The <main> tag',
    value: [
      'It is used to mark the primary content area within a web page',
      'A document should contain only one <main> element, check for it',
      'The <main> tag should represent the main content area of a document, excluding any header, navigation, or footer sections',
      'Should be placed directly within the <body> element, its immediate parent should be body',
      'Strongly advised that <main> tag should be present',
    ],
  },
  {
    key: 'The <header> tag',
    value: [
      '<header> tag represents the introductory or navigational section of a document or a specific section',
      'Should be within the top levels of the DOM, recommended to have <body>, <section> or <article> as parent',
      'We should have only one <header> element at the parent-level like <article>, <section>, <body>',
      'Should not be present in tags like <headers> (nesting), <footer> etc',
    ],
  },
  {
    key: 'The <footer> tag',
    value: [
      '<footer> tag typically contains information about the author, copyright notices, contact information, related links, and other supplementary content',
      'It is recommended to have only one footer in a page, check for it and raise warning if it does',
      'It should not be wrapped around by elements like <div>',
      'Preferably placed at the bottom of the document, preferably the last element of every section',
    ],
  },
  {
    key: 'The <section> tag',
    value: [
      '<section> tag  represents generic standalone section of a document, which could not be represented by any other wrap up',
      'Sections should always have a heading, with very few exceptions, check for its children',
      'Should not be used as a wrapper, divs should not be immediate child',
      'There can be multiple sections in the DOM, more the better, compared to the count of div',
      '<section> tag should be directly nested within a generic container like <body>, <main>, <article> etc tag.',
    ],
  },
  {
    key: 'The <aside> tag',
    value: [
      '<aside> tag represents a portion of a document whose content is only indirectly related to the documents main content',
      'Do not use the <aside> element to tag parenthesized text, as this kind of text is considered part of the main flow, check for the textContent',
      'Should be direct child of the <article>, <section>, <main> or <body> tags',
      'Should not contain elements like - section, article, div, etc. can contain all the text elements, icons and images, lists',
    ],
  },
  {
    key: 'The <details> tag',
    value: [
      '<details> tag creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state',
      'first element inside it should preferably be a <summary> tag, check for it',
    ],
  },
  {
    key: 'The <summary> tag',
    value: [
      '<summary> tag specifies a summary, caption, or legend for a <details> elements disclosure box',
      'A <summary> element may only be used as the first child of a <details> element',
      'The <summary> elements contents can be any heading content, plain text, or HTML that can be used within a paragraph, it should preferably not contain any other HTML elements',
    ],
  },
  {
    key: 'The <time> tag',
    value: [
      'Should preferably contain a *datetime* attribute which should be in a particular given format',
      'Should not have any other child, check for it',
      'we retrieve the value of the datetime attribute using getAttribute("datetime"). We then check if the datetime attribute is present and if it represents a valid date/time value. We use Date.parse() to check if the attributes value can be parsed as a valid date/time',
    ],
  },
  {
    key: 'The <nav> tag',
    value: [
      'Should not be used as a wrapper for containers like div or section, they should not be its first child, also, <div> should not be its parent',
      '<nav> tags should purposefully be used for navigation, it should contain <ul>, <ol>, <a> collections',
      'Should be direct child of <body>, <main>, <section> or a general section of website',
    ],
  },
  {
    key: 'The <fig> and the <figcaption> tag',
    value: [
      '<fig> tag should contain <figCaption> tag',
      '<figCaption> tag should have <fig> as its parent',
      'Preferably replace <img> with <figure>',
    ],
  },
  {
    key: 'Count of non-semantic elements',
    value: [
      'Check for the count of non-semantic elements - <div>, <span>, <i>, <b>, <strong>, <br>, <hr>',
      'Show the total non-semantic elements on DOM and the semantic elements which are not used',
    ],
  },
  {
    key: 'The <br> and <hr> tags',
    value: [
      'Remove <br> and <hr> tags and achieve them using the css styles, and use <em> tags for <b> and <strong>',
    ],
  },
  {
    key: 'Alternative Text for Images',
    value: [
      'Always include the alt attribute in <img> tags to provide alternative text that describes the content of the image. This is important for accessibility and SEO',
    ],
  },
  {
    key: 'The <input> tag',
    value: [
      'The <input> element must contain "name", "id", and "type" attribute',
    ],
  },
  {
    key: 'The <form> tag',
    value: [
      'It must have an "action" attribute present',
      'It should have a "submit" button or an <input> with type="submit"',
    ],
  },
  {
    key: 'Non-text elements e.g <audio> and <video>',
    value: [
      '<audio> or <video> should have <source> tags as their children',
      'They should provide fallback support for e.g. download options',
      'They should provide captions preferably using the <track> element',
    ],
  },
]
