const colors = {
  blue: '#2465e1',
  gold: '#e7a218',
  forest: '#039396',
  purple: '#690496',
  darkRed: '#e91550',
  lightRed: '#ff6666',
  darkGrey: '#7d8082',
  lightGrey: '#aeaeae'
}

const defaultIconStyles = {
  width: '1.2em',
  height: '1.2em',
  display: 'block',
  verticalAlign: 'middle',
  content: '&nbsp;',
  fontSize: '.75em',
  textAlign: 'center'
}

const circleIconStyles = {
  width: '1.5em',
  height: '1.5em',
  color: 'white',
  display: 'table-cell',
  borderRadius: '50%'
}

export default [
  { // Ethereum Main Network
    id: '1',
    name: 'ethereum',
    type: 'main net',
    color: colors.forest,
    iconStyles: {
      ...defaultIconStyles,
      background: colors.forest,
      transform: 'rotate(45deg)'
    }
  },
  { // Ropsten Test Network
    id: '3',
    name: 'ropsten',
    type: 'test net',
    color: colors.darkRed,
    iconStyles: {
      ...defaultIconStyles,
      ...circleIconStyles,
      background: colors.darkRed
    }
  },
  { // Rinkeby Test Network
    id: '4',
    name: 'rinkeby',
    type: 'test net',
    color: colors.gold,
    iconStyles: {
      ...defaultIconStyles,
      width: '1.5em',
      height: '1.5em',
      background: colors.gold
    }
  },
  { // Kovan Test Network
    id: '42',
    name: 'kovan',
    type: 'test net',
    color: colors.purple,
    iconStyles: {
      ...defaultIconStyles,
      border: `solid .3em ${colors.purple}`,
      boxSizing: 'border-box',
      transform: 'rotate(45deg)'
    }
  },
  { // Default, Unknown Private Network
    id: 'null',
    name: 'private',
    type: 'network',
    color: colors.blue,
    iconStyles: {
      ...defaultIconStyles,
      ...circleIconStyles,
      content: '?',
      background: colors.blue
    }
  },
  { // Not Listening to the blockchain
    id: 'not-listening',
    name: 'no node',
    type: 'need provider',
    color: colors.darkGrey,
    iconStyles: {
      ...defaultIconStyles,
      ...circleIconStyles,
      content: '!',
      background: colors.darkGrey
    }
  },
  { // No unlocked account
    id: 'account-not-unlocked',
    name: 'account locked',
    type: 'please unlock',
    color: colors.darkGrey,
    iconStyles: {
      ...defaultIconStyles,
      ...circleIconStyles,
      content: '!',
      background: colors.darkGrey
    }
  }
]
