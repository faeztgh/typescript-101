/******************************** As Const ********************************/
const socials = {
    facebook: "https://facebook.com",
    google: "https://google.com",
    youtube: "https://youtube.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    pinterest: "https://pinterest.com",
} as const;

type SocialTypes = typeof socials;

const facebook = socials.facebook;

/**
 * Generates the social name from the given social link.
 *
 * @param {SocialTypes[keyof SocialTypes]} input - The input value.
 * @return {string} The generated social name.
 */
const getSocialName = (input: SocialTypes[keyof SocialTypes]) => {
    return input.split("//")[1].split(".")[0];
};

console.log(getSocialName(socials.google)); // google
console.log(getSocialName(socials.facebook)); // facebook
