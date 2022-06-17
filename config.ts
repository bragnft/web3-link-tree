// Leave unwanted fields equal to undefined.
// Web3 Link Tree will handle the rest (🔗, 🌲)

// Set 'wallet' to undefined if you wish to disable the Tipping feature
export const DETAILS = {
  name: 'Brag',
  header: undefined,
  headerlink: 'https://twitter.com/bragnft',
  wallet: '0xD76E3fa964D26E08B2BD64e04BEAa44B1fe47865'
}

// Import Background Image here 👇
import bg from './images/bg.png'
export const BG = bg;

// Import Logo Image here 👇
import logo from './images/logo.png'
export const LOGO = logo;

import btn_twitter from './images/btn_twitter.png'
import btn_discord from './images/btn_discord.png'
// Import Button Images here 👆

// Buttons are best as 1500x500px images!
// Upload your image to twitter as a header,
// then save your image and drag it in the /images/ folder.

// To include a footer icon: Give 'link' a value
// To include a button: Give 'button' your imported image value
export const TWITTER = {
  link: 'https://twitter.com/bragnft',
  button: btn_twitter
}

export const MEDIUM = {
  link: undefined,
  button: undefined
}

export const GITHUB = {
  link: undefined,
  button: undefined
}

export const DISCORD = {
  link: "https://www.discord.gg/EH25v67e33",
  button: btn_discord
}

export const SUBSTACK = {
  link: undefined,
  button: undefined
}

export const ABOUT = {
  title: 'What is Brag?',
  text: 'A Gallery, Gaming, & Metaverse.'
}
export const ABOUT2 = {
  title: 'Why just a login?',
  text: 'Logging into brag reserves your whitelist spot. 1,000 spots available today! Better hurry, spots are closing fast!'
}
export const ABOUT3 = {
  title: 'Why follow Brag?',
  text: "Stay up to date about recent updates, and news!"
}
export const ABOUT4 = {
  title: undefined,
  text: undefined
}
export const ABOUT5 = {
  title: undefined,
  text: undefined
}

export const TITLE = `${DETAILS.name}'s Web3 Link Tree`